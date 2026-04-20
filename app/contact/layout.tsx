import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Demandez votre devis ou un renseignement',
  description:
    "Une question sur une formation, un financement ou une inscription ? Contactez l'équipe EduTech Formation par téléphone, email ou via notre formulaire.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | EduTech Formation',
    description:
      "Contactez EduTech Formation pour toute question sur nos formations professionnelles.",
    url: 'https://edutechformations.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
