import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "Découvrez Edutech Formations : organisme certifié Qualiopi, engagé pour des formations professionnelles concrètes, accessibles à tous et finançables (OPCO, France Travail).",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'À propos | Edutech Formations',
    description:
      "Organisme de formation certifié Qualiopi, engagé pour la qualité et l'accessibilité.",
    url: 'https://edutechformations.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
