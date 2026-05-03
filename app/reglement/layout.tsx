import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Règlement intérieur',
  description:
    'Règlement intérieur applicable aux stagiaires des formations EduTech : règles de vie, sécurité, hygiène, discipline et droits des stagiaires.',
  alternates: { canonical: '/reglement' },
  openGraph: {
    title: 'Règlement intérieur | EduTech Formation',
    description:
      'Règlement intérieur applicable aux stagiaires des formations EduTech.',
    url: 'https://edutechformations.com/reglement',
  },
};

export default function ReglementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
