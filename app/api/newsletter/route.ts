import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import CryptoJS from 'crypto-js';

const NEWSLETTER_FILE = path.resolve(process.cwd(), 'newsletter_List.txt');
const ENCRYPTED_FILE = path.resolve(process.cwd(), 'newsletter_List_encrypted.txt');

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });
    }
    // Append email to file with newline
    await fs.appendFile(NEWSLETTER_FILE, email + '\n', 'utf8');

    // Read all emails and encrypt
    const plainText = await fs.readFile(NEWSLETTER_FILE, 'utf8');
    const ENCRYPTION_PASSWORD = process.env.NEWSLETTER_ENCRYPTION_PASSWORD;
    if (!ENCRYPTION_PASSWORD) {
      return NextResponse.json({ success: false, message: 'Encryption password not set' }, { status: 500 });
    }
    const encrypted = CryptoJS.AES.encrypt(plainText, ENCRYPTION_PASSWORD).toString();
    await fs.writeFile(ENCRYPTED_FILE, encrypted, 'utf8');

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
} 