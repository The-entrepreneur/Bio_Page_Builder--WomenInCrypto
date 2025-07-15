import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const NEWSLETTER_FILE = path.resolve(process.cwd(), 'newsletter_List.txt');

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });
    }
    // Append email to file with newline
    await fs.appendFile(NEWSLETTER_FILE, email + '\n', 'utf8');
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
} 