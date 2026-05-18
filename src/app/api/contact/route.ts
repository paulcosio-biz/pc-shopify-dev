import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL   = 'biz.paulcosio@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // swap to a verified domain later

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, budget, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to:   TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio enquiry] ${name}${budget ? ` — ${budget}` : ''}`,
      text: [
        `From:    ${name} <${email}>`,
        `Budget:  ${budget || 'Not specified'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#111;color:#eee;border-radius:12px;">
          <h2 style="color:#FF5C1A;margin-top:0;">New portfolio enquiry</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:8px 0;color:#888;width:80px;">Name</td>
              <td style="padding:8px 0;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#FF5C1A;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;">Budget</td>
              <td style="padding:8px 0;">${budget || '—'}</td>
            </tr>
          </table>
          <div style="background:#1a1a1a;padding:20px;border-radius:8px;border-left:3px solid #FF5C1A;">
            <p style="margin:0;white-space:pre-wrap;line-height:1.7;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
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
