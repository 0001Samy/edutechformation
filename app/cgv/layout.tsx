import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description:
    "Conditions générales de vente applicables aux formations EduTech : modalités d'inscription, paiement, annulation et réclamations.",
  alternates: { canonical: '/cgv' },
  openGraph: {
    title: 'CGV | EduTech Formation',
    description: 'Conditions générales de vente des formations EduTech Formation.',
    url: 'https://edutechformations.com/cgv',
  },
};

export default function CGVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
