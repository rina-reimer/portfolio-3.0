"use server";
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'src', 'lib', 'en.json');
  try {
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);
    res.status(200).json(data);
  } catch (error) {
    console.error('Failed to read file:', error);
    res.status(500).json({ error: 'Failed to read file' });
  }
}