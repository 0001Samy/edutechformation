import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_CV_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: FormDataEntryValue | null, max: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData().catch(() => null);
    if (!formData) {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
    }

    const name = str(formData.get('name'), 100);
    const email = str(formData.get('email'), 254);
    const phone = str(formData.get('phone'), 30);
    const domaines = str(formData.get('domaines'), 500);
    const presentation = str(formData.get('presentation'), 3000);

    if (!name || !email || !domaines || !presentation) {
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

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;
    if (!apiKey || !to) {
      return NextResponse.json(
        { error: 'Service email non configuré' },
        { status: 500 }
      );
    }

    // Traitement du CV (optionnel)
    const cvFile = formData.get('cv');
    let attachments: Array<{ filename: string; content: string }> = [];

    if (cvFile instanceof File && cvFile.size > 0) {
      if (cvFile.size > MAX_CV_SIZE) {
        return NextResponse.json(
          { error: 'Le fichier CV dépasse la limite de 5 Mo' },
          { status: 400 }
        );
      }
      if (!ALLOWED_CV_TYPES.includes(cvFile.type)) {
        return NextResponse.json(
          { error: 'Format de fichier non accepté. Utilisez PDF ou Word.' },
          { status: 400 }
        );
      }
      const arrayBuffer = await cvFile.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString('base64');
      attachments = [{ filename: cvFile.name || 'cv.pdf', content: base64 }];
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Edutech Formations <contact@edutechformations.com>',
      to,
      replyTo: email,
      subject: `[Candidature formateur] ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Téléphone : ${phone || '—'}`,
        '',
        "Domaines d'intervention :",
        domaines,
        '',
        'Présentation :',
        presentation,
        cvFile instanceof File && cvFile.size > 0
          ? `\nCV joint : ${cvFile.name}`
          : '\nAucun CV joint',
      ].join('\n'),
      attachments: attachments.length > 0 ? attachments : undefined,
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
    console.error('Nous-rejoindre API error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
