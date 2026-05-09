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

// Adresse réutilisée par plusieurs schémas
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '52 rue Montesquieu',
  postalCode: '92600',
  addressLocality: 'Asnières-sur-Seine',
  addressRegion: 'Île-de-France',
  addressCountry: 'FR',
} as const;

const SAME_AS = [
  'https://www.linkedin.com/company/edutech-formations',
  'https://www.instagram.com/edutechformations',
] as const;

// Schéma EducationalOrganization (enseignement) + LocalBusiness (Google Maps)
export const organizationSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Edutech Formations',
    legalName: 'Edutech Formations SAS',
    url: SITE_URL,
    logo: `${SITE_URL}/edutech-logo.svg`,
    description:
      'Organisme de formation professionnelle certifié Qualiopi en Île-de-France. Formations droit, médiation et IA en entreprise — éligibles OPCO et financements publics.',
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
    address: ADDRESS,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Qualiopi',
      name: 'Certification Qualiopi — Actions de formation',
      recognizedBy: {
        '@type': 'Organization',
        name: 'République française',
      },
    },
    sameAs: SAME_AS,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Edutech Formations',
    image: `${SITE_URL}/edutech-logo.svg`,
    url: SITE_URL,
    telephone: '+33662091892',
    email: 'contact@edutechformations.com',
    priceRange: '€€',
    address: ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.9089,
      longitude: 2.2854,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: SAME_AS,
  },
];

// FAQ JSON-LD pour la page d'accueil → featured snippets Google
export const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Edutech Formations est-il un organisme de formation certifié ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Edutech Formations est certifié Qualiopi depuis 2024 au titre de la catégorie « Actions de formation ». Cette certification nationale, reconnue par l'État, garantit la qualité de notre processus pédagogique.",
      },
    },
    {
      '@type': 'Question',
      name: 'Vos formations sont-elles éligibles aux financements OPCO et France Travail ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, en tant qu'organisme certifié Qualiopi, toutes nos formations sont éligibles aux dispositifs publics et mutualisés : OPCO, France Travail (AIF, POEI), plan de développement des compétences. Nous vous accompagnons gratuitement dans le montage du dossier.",
      },
    },
    {
      '@type': 'Question',
      name: 'Dans quels domaines proposez-vous des formations ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous proposons des formations professionnelles dans trois pôles d'expertise : Droit (loi Sapin II, responsabilité pénale, harcèlement, secret professionnel), Médiation (initiation, gestion des conflits, médiation en entreprise) et IA en entreprise (utilisation, productivité, IA Act et réglementations).",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les formats de formation proposés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous proposons trois formats : INTER (sessions inter-entreprises en présentiel ou à distance), INTRA (formations dans vos locaux ou à distance pour votre équipe) et SUR-MESURE (programme adapté à vos besoins spécifiques).",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment se déroule une formation Edutech ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nos formations alternent apports théoriques et ateliers pratiques. Chaque session inclut des cas concrets, des mises en situation et un suivi individuel. Une attestation de fin de formation et une évaluation des acquis sont délivrées à chaque participant.",
      },
    },
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
