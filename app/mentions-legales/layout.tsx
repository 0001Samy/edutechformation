import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site edutechformations.com : éditeur, hébergeur, propriété intellectuelle et coordonnées de contact.',
  alternates: { canonical: '/mentions-legales' },
  openGraph: {
    title: 'Mentions légales | Edutech Formations',
    description: 'Mentions légales du site edutechformations.com.',
    url: 'https://edutechformations.com/mentions-legales',
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
