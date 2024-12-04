import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  console.log('API route hit: /api/download-whitepaper');
  try {
    const filePath = path.join(process.cwd(), 'public', 'Whitepaper V1.0.pdf');
    console.log('Attempting to access file:', filePath);
    
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return new NextResponse('File not found', { 
        status: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
        },
      });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename=Whitepaper V1.0.pdf',
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
    });
  } catch (error) {
    console.error('Error in download-whitepaper route:', error);
    return new NextResponse('Internal Server Error', { 
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

