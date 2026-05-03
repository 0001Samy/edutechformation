import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certification Qualiopi',
  description:
    "EduTech Formation est certifié Qualiopi, gage de qualité reconnu par l'État. Découvrez ce que cette certification implique pour vos formations.",
  alternates: { canonical: '/qualiopi' },
  openGraph: {
    title: 'Certification Qualiopi | EduTech Formation',
    description:
      'Organisme de formation certifié Qualiopi : qualité reconnue par une certification nationale.',
    url: 'https://edutechformations.com/qualiopi',
  },
};

export default function QualiopiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
