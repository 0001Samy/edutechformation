import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financer votre formation : OPCO, France Travail',
  description:
    'Comment financer votre formation professionnelle ? OPCO, France Travail, plan de développement des compétences : tous les dispositifs expliqués par EduTech Formation.',
  alternates: { canonical: '/financement' },
  openGraph: {
    title: 'Financer votre formation | EduTech Formation',
    description:
      'Tous les dispositifs de financement pour votre formation professionnelle : OPCO, France Travail.',
    url: 'https://edutechformations.com/financement',
  },
};

export default function FinancementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
