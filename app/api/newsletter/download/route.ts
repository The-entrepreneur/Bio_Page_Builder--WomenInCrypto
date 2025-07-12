import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const ENCRYPTED_FILE = path.resolve(process.cwd(), 'newsletter_List_encrypted.txt');

export async function GET(req: NextRequest) {
  try {
    const file = await fs.readFile(ENCRYPTED_FILE);
    return new NextResponse(file, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename="newsletter_List_encrypted.txt"',
      },
    });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'File not found' }, { status: 404 });
  }
} 