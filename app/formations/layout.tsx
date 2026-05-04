import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos formations professionnelles',
  description:
    "Découvrez le catalogue des formations Edutech Formations : droit, médiation et IA. Toutes nos formations sont certifiées Qualiopi et éligibles OPCO et financements publics.",
  alternates: { canonical: '/formations' },
  openGraph: {
    title: 'Nos formations professionnelles | Edutech Formations',
    description:
      "Catalogue des formations certifiées Qualiopi, éligibles OPCO et financements publics.",
    url: 'https://edutechformations.com/formations',
  },
};

export default function FormationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
