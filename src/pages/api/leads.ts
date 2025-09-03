import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import fs from 'fs/promises';
import nodemailer from 'nodemailer';

// Global dev-time caches (won't persist in serverless environments)
declare global {
  var leadStore: Record<string, any>[] | undefined;
  var lastLeadSubmissions: Map<string, number> | undefined;
}

// Validation schema — name, email and phone required for mandatory capture
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Phone must be at least 6 characters'),
  company: z.string().optional(),
  source: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  timestamp: z.string().optional(), // <-- Added
  _honeypot: z.any().optional(),
});

const transporter = process.env.EMAIL_USER && process.env.EMAIL_PASS
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const parsed = leadSchema.parse(req.body);

    // Honeypot: silently accept and drop spam
    if (parsed._honeypot) {
      return res.status(200).json({ success: true });
    }

    // Rate limit by IP (30s cooldown)
    const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown') as string;
    const now = Date.now();
    global.lastLeadSubmissions = global.lastLeadSubmissions || new Map();
    const last = global.lastLeadSubmissions.get(clientIp);
    if (last && now - last < 30000) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
    global.lastLeadSubmissions.set(clientIp, now);

    const lead = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      name: parsed.name,
      email: parsed.email,
      phone: parsed.phone,
      company: parsed.company || null,
      source: parsed.source || 'digital-assessment',
      metadata: parsed.metadata || {},
      ip: clientIp,
      timestamp: parsed.timestamp || new Date().toISOString(), // <-- Use provided timestamp if present
    };

    // In-memory store for debugging in dev
    global.leadStore = global.leadStore || [];
    global.leadStore.push(lead);

    // Optionally persist to a file (LEADS_FILE_PATH)
    if (process.env.LEADS_FILE_PATH) {
      try {
        await fs.appendFile(process.env.LEADS_FILE_PATH, JSON.stringify(lead) + '\n', 'utf8');
      } catch (err) {
        console.error('Failed to append lead to file:', err);
      }
    }

    // Optionally forward to external webhook/CRM
    if (process.env.LEADS_WEBHOOK) {
      try {
        await fetch(process.env.LEADS_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead),
        });
      } catch (err) {
        console.error('Failed to forward lead to webhook:', err);
      }
    }

    // Optionally email lead details
    if (transporter) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.LEADS_EMAIL_RECIPIENT || process.env.EMAIL_USER,
        subject: `New Lead: ${lead.name}`,
        html: `
          <h3>New Lead Captured</h3>
          <p><strong>Name:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Phone:</strong> ${lead.phone}</p>
          ${lead.company ? `<p><strong>Company:</strong> ${lead.company}</p>` : ''}
          <p><strong>Source:</strong> ${lead.source}</p>
          <pre style="white-space:pre-wrap;">${JSON.stringify(lead.metadata || {}, null, 2)}</pre>
          <hr/><small>${lead.timestamp}</small>
        `,
      };
      transporter.sendMail(mailOptions).catch((err) => console.error('Failed to send lead email:', err));
    }

    return res.status(200).json({ success: true, id: lead.id });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const messages = err.issues.map(i => i.message);
      return res.status(400).json({ error: 'Validation failed', message: messages.join(', ') });
    }
    console.error('Leads API error:', err);
    return res.status(500).json({ error: 'Failed to capture lead' });
  }
}