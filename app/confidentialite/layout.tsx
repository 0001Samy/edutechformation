import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité du site edutechformations.com : données collectées, finalités, durée de conservation et exercice de vos droits RGPD.',
  alternates: { canonical: '/confidentialite' },
  openGraph: {
    title: 'Politique de confidentialité | EduTech Formation',
    description:
      'Protection des données personnelles et conformité RGPD chez EduTech Formation.',
    url: 'https://edutechformations.com/confidentialite',
  },
};

export default function ConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
