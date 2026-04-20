import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Témoignages de nos apprenants',
  description:
    "Découvrez les retours d'expérience de nos apprenants sur les formations EduTech : satisfaction, montée en compétences et évolution professionnelle.",
  alternates: { canonical: '/temoignages' },
  openGraph: {
    title: 'Témoignages de nos apprenants | EduTech Formation',
    description:
      "Avis et retours d'expérience des apprenants formés par EduTech Formation.",
    url: 'https://edutechformations.com/temoignages',
  },
};

export default function TemoignagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
