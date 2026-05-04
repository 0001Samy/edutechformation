import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Témoignages de nos apprenants',
  description:
    "Découvrez les retours d'expérience de nos apprenants sur les formations Edutech Formations : satisfaction, montée en compétences et évolution professionnelle.",
  alternates: { canonical: '/temoignages' },
  openGraph: {
    title: 'Témoignages de nos apprenants | Edutech Formations',
    description:
      "Avis et retours d'expérience des apprenants formés par Edutech Formations.",
    url: 'https://edutechformations.com/temoignages',
  },
};

export default function TemoignagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
