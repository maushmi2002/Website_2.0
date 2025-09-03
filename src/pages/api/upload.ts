import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public/images/blog');
    await fs.mkdir(uploadDir, { recursive: true });
    const form = formidable({
      uploadDir: path.join(process.cwd(), 'public/images/blog'),
      filename: (name, ext, part) => {
        return `${Date.now()}-${part.originalFilename}`;
      },
    });

    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const file = Array.isArray(files.image) ? files.image[0] : files.image;
    if (!file || !file.filepath) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Return the public URL for the uploaded image
    const relativePath = path.relative(
      path.join(process.cwd(), 'public'),
      file.filepath
    );
    
    const publicUrl = `/${relativePath.replace(/\\/g, '/')}`;

    return res.status(200).json({ url: publicUrl });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Error uploading file' });
  }
}