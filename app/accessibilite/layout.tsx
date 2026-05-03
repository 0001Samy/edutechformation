import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibilité et Handicap',
  description:
    "EduTech Formation s'engage à rendre ses formations accessibles à tous, y compris aux personnes en situation de handicap. Référent handicap : Olivier Gil.",
  alternates: { canonical: '/accessibilite' },
  openGraph: {
    title: 'Accessibilité et Handicap | EduTech Formation',
    description:
      "Notre engagement pour l'accueil des apprenants en situation de handicap.",
    url: 'https://edutechformations.com/accessibilite',
  },
};

export default function AccessibiliteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
