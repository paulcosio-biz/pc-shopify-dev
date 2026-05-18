import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL   = 'biz.paulcosio@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // swap to a verified domain later

// Simple in-memory rate limiting (works per serverless instance)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

// Utility to strip HTML tags from input
function sanitizeInput(str: string): string {
  if (!str) return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
}

export async function POST(request: Request) {
  try {
    // 1. Origin Verification
    const origin = request.headers.get('origin') || '';
    const isLocalhost = origin.includes('localhost') || origin.includes('127.0.0.1');
    const isProduction = origin === 'https://paulcosio.com' || origin === 'https://www.paulcosio.com'; // Adjust to actual prod domain later
    
    // In production, we'd enforce the origin check strictly.
    // if (process.env.NODE_ENV === 'production' && !isProduction) {
    //   return NextResponse.json({ error: 'Unauthorized origin.' }, { status: 403 });
    // }

    // 2. IP Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const rateData = rateLimit.get(ip);

    if (rateData && now < rateData.resetTime) {
      if (rateData.count >= MAX_REQUESTS) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      rateData.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }
    const body = await request.json();
    const { name, email, budget, message, _honey } = body;

    // 3. Honeypot Validation
    if (_honey) {
      // If the honeypot is filled, silently reject it (spammer thinks it succeeded)
      return NextResponse.json({ success: true, message: 'Message sent.' });
    }

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 4. Input Sanitization
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanBudget = sanitizeInput(budget);
    const cleanMessage = sanitizeInput(message);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to:   TO_EMAIL,
      replyTo: cleanEmail,
      subject: `[Portfolio enquiry] ${cleanName}${cleanBudget ? ` — ${cleanBudget}` : ''}`,
      text: [
        `From:    ${cleanName} <${cleanEmail}>`,
        `Budget:  ${cleanBudget || 'Not specified'}`,
        '',
        cleanMessage,
      ].join('\n'),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#111;color:#eee;border-radius:12px;">
          <h2 style="color:#FF5C1A;margin-top:0;">New portfolio enquiry</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:8px 0;color:#888;width:80px;">Name</td>
              <td style="padding:8px 0;font-weight:600;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${cleanEmail}" style="color:#FF5C1A;">${cleanEmail}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;">Budget</td>
              <td style="padding:8px 0;">${cleanBudget || '—'}</td>
            </tr>
          </table>
          <div style="background:#1a1a1a;padding:20px;border-radius:8px;border-left:3px solid #FF5C1A;">
            <p style="margin:0;white-space:pre-wrap;line-height:1.7;">${cleanMessage}</p>
          </div>
          <p style="margin-top:24px;color:#555;font-size:12px;">Sent from paulcosio.com contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend error]', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (err) {
    console.error('[Contact API error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
