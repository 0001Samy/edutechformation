import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos formations professionnelles',
  description:
    "Découvrez le catalogue complet des formations EduTech : bureautique, IA, web, marketing. Toutes nos formations sont certifiées Qualiopi et éligibles CPF, OPCO et financements publics.",
  alternates: { canonical: '/cours' },
  openGraph: {
    title: 'Nos formations professionnelles | EduTech Formation',
    description:
      "Catalogue complet des formations certifiées Qualiopi, éligibles CPF et OPCO.",
    url: 'https://edutechformations.com/cours',
  },
};

export default function CoursLayout({ children }: { children: React.ReactNode }) {
  return children;
}
