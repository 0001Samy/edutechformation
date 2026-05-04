import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import JsonLd, { organizationSchema } from '@/components/JsonLd';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://edutechformations.com'),
  title: {
    default: 'Edutech Formations — Organisme de formation certifié Qualiopi',
    template: '%s | Edutech Formations',
  },
  description:
    "Organisme de formation professionnelle certifié Qualiopi. Formations droit, médiation et IA — éligibles OPCO et financements publics.",
  keywords: [
    'formation professionnelle',
    'organisme de formation',
    'Qualiopi',
    'OPCO',
    'formation droit',
    'formation médiation',
    'formation IA',
    'Edutech Formations',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://edutechformations.com',
    siteName: 'Edutech Formations',
    title: 'Edutech Formations — Organisme de formation certifié Qualiopi',
    description:
      "Formations professionnelles certifiées Qualiopi : droit, médiation, IA. Éligibles OPCO et financements publics.",
    images: [{ url: '/edutech-logo.svg', width: 1200, height: 630, alt: 'Edutech Formations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edutech Formations — Organisme de formation certifié Qualiopi',
    description:
      "Formations professionnelles certifiées Qualiopi, éligibles OPCO et financements publics.",
    images: ['/edutech-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr' data-scroll-behavior='smooth'>
      <head>
        <JsonLd id='ld-organization' data={organizationSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
