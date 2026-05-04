import Script from 'next/script';

/**
 * Composant générique pour injecter des données structurées schema.org (JSON-LD).
 * Utilisé pour Organization, Course, BreadcrumbList, etc.
 */
export default function JsonLd({
  data,
  id,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
  id: string;
}) {
  return (
    <Script
      id={id}
      type='application/ld+json'
      strategy='beforeInteractive'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Schémas réutilisables ────────────────────────────────────────────────────

const SITE_URL = 'https://edutechformations.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Edutech Formations',
  legalName: 'Edutech Formations SAS',
  url: SITE_URL,
  logo: `${SITE_URL}/edutech-logo.svg`,
  description:
    'Organisme de formation professionnelle certifié Qualiopi. Formations droit, médiation et IA en entreprise — éligibles OPCO et financements publics.',
  email: 'contact@edutechformations.com',
  telephone: '+33662091892',
  taxID: '977 619 089',
  vatID: 'FR00977619089',
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'SIREN', value: '977619089' },
    { '@type': 'PropertyValue', propertyID: 'SIRET', value: '97761908900021' },
    { '@type': 'PropertyValue', propertyID: 'NAF', value: '85.59A' },
    { '@type': 'PropertyValue', propertyID: 'NDA', value: '11941203194' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '52 rue Montesquieu',
    postalCode: '92600',
    addressLocality: 'Asnières-sur-Seine',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Qualiopi',
    name: 'Certification Qualiopi — Actions de formation',
    recognizedBy: {
      '@type': 'Organization',
      name: 'République française',
    },
  },
  sameAs: [
    'https://www.linkedin.com/company/edutech-formations',
    'https://www.instagram.com/edutechformations',
  ],
};

export function buildBreadcrumbList(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

interface CourseSchemaInput {
  slug: string;
  title: string;
  description?: string;
  durationHours?: number;
  imageUrl?: string;
  priceInter?: number;
  priceIntra?: number;
}

export function buildCourseSchema(c: CourseSchemaInput): Record<string, unknown> {
  const url = `${SITE_URL}/formations/${c.slug}`;
  const offers: Record<string, unknown>[] = [];
  if (c.priceInter != null) {
    offers.push({
      '@type': 'Offer',
      name: 'INTER / individuel',
      price: c.priceInter,
      priceCurrency: 'EUR',
      url,
      availability: 'https://schema.org/InStock',
      category: 'INTER',
    });
  }
  if (c.priceIntra != null) {
    offers.push({
      '@type': 'Offer',
      name: 'INTRA',
      price: c.priceIntra,
      priceCurrency: 'EUR',
      url,
      availability: 'https://schema.org/InStock',
      category: 'INTRA',
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.title,
    description: c.description,
    url,
    provider: {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Edutech Formations',
    },
    image: c.imageUrl,
    inLanguage: 'fr-FR',
    educationalLevel: 'Professional',
    hasCourseInstance: c.durationHours
      ? {
          '@type': 'CourseInstance',
          courseMode: ['onsite', 'online'],
          courseWorkload: `PT${c.durationHours}H`,
          inLanguage: 'fr-FR',
        }
      : undefined,
    ...(offers.length > 0 ? { offers } : {}),
  };
}
