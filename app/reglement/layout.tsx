import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Règlement intérieur',
  description:
    'Règlement intérieur applicable aux stagiaires des formations Edutech Formations : règles de vie, sécurité, hygiène, discipline et droits des stagiaires.',
  alternates: { canonical: '/reglement' },
  openGraph: {
    title: 'Règlement intérieur | Edutech Formations',
    description:
      'Règlement intérieur applicable aux stagiaires des formations Edutech Formations.',
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
