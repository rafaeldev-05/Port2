import { NextResponse } from 'next/server';
import { escapeHtml, normalizeContactPayload, validateContactPayload } from '@/lib/validations';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

    if (!resendApiKey || !toEmail) {
      return NextResponse.json({ message: 'Contact form is not configured yet.' }, { status: 500 });
    }

    const body = await request.json().catch(() => null);
    const payload = normalizeContactPayload(body);
    const validationError = validateContactPayload(payload);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const safeName = escapeHtml(payload.name);
    const safeEmail = escapeHtml(payload.email);
    const safeSubject = escapeHtml(payload.subject);
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br>');

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Portfolio Contact: ${payload.subject}`,
        reply_to: payload.email,
        html: `
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `
      })
    });

    if (!resendResponse.ok) {
      return NextResponse.json({ message: 'Could not send message right now.' }, { status: 502 });
    }

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch {
    return NextResponse.json({ message: 'Could not process contact request.' }, { status: 500 });
  }
}
