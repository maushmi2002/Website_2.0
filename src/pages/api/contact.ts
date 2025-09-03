import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define global type for rate limiting
declare global {
  var lastSubmissions: Map<string, number> | undefined;
}

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validatedData = contactSchema.parse(req.body);

    // Honeypot check (if implemented in the form)
    if (req.body._honeypot) {
      // Silently reject spam submissions
      return res.status(200).json({ success: true });
    }

    // Rate limiting check (implement proper rate limiting in production)
    // This is a basic example
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const now = Date.now();
    const lastSubmission = global.lastSubmissions?.get(clientIp as string);
    if (lastSubmission && now - lastSubmission < 60000) { // 1 minute cooldown
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
    global.lastSubmissions = global.lastSubmissions || new Map();
    global.lastSubmissions.set(clientIp as string, now);

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
        ${validatedData.service ? `<p><strong>Service Interest:</strong> ${validatedData.service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from your website's contact form.</small></p>
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      throw emailError;
    }

    // Send success response
    res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation errors
      const validationErrors = error.issues.map(issue => issue.message);
      return res.status(400).json({ 
        error: 'Validation failed', 
        message: validationErrors.join(', ')
      });
    }
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
}