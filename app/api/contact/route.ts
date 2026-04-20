import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SUBJECT_LABELS: Record<string, string> = {
  info: "Demande d'information",
  inscription: 'Inscription à une formation',
  financement: 'Question sur le financement',
  technique: 'Support technique',
  autre: 'Autre',
};

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;
    if (!apiKey || !to) {
      console.error('Contact API misconfigured: missing RESEND_API_KEY or CONTACT_EMAIL_TO');
      return NextResponse.json(
        { error: 'Service email non configuré' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const subjectLabel = SUBJECT_LABELS[subject] ?? subject;

    const { error } = await resend.emails.send({
      from: 'EduTech Formation <contact@edutechformation.com>',
      to,
      replyTo: email,
      subject: `[Contact site] ${subjectLabel} — ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Téléphone : ${phone || '—'}`,
        `Sujet : ${subjectLabel}`,
        '',
        'Message :',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: "Échec de l'envoi du message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
