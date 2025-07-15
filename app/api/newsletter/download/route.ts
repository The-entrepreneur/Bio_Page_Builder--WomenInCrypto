import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const NEWSLETTER_FILE = path.resolve(process.cwd(), 'newsletter_List.txt');

export async function GET(req: NextRequest) {
  try {
    const file = await fs.readFile(NEWSLETTER_FILE);
    return new NextResponse(file, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; filename="newsletter_List.txt"',
      },
    });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'File not found' }, { status: 404 });
  }
} 