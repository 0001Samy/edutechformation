import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SUBJECT_LABELS: Record<string, string> = {
  info: "Demande d'information",
  inscription: 'Inscription à une formation',
  financement: 'Question sur le financement',
  handicap: 'Situation de handicap',
  technique: 'Support technique',
  autre: 'Autre',
};

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  subject: 50,
  message: 5000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
    }

    const name = str(body.name, LIMITS.name);
    const email = str(body.email, LIMITS.email);
    const phone = str(body.phone, LIMITS.phone);
    const subject = str(body.subject, LIMITS.subject);
    const message = str(body.message, LIMITS.message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email) || /[\r\n]/.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    if (/[\r\n]/.test(name) || /[\r\n]/.test(subject)) {
      return NextResponse.json(
        { error: 'Champs invalides' },
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
    const subjectLabel = SUBJECT_LABELS[subject] ?? 'Autre';

    const { error } = await resend.emails.send({
      from: 'EduTech Formation <contact@edutechformations.com>',
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
