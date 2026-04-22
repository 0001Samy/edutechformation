import type { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

const BASE_URL = 'https://edutechformations.com';

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/formations', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/financement', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/temoignages', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/qualiopi', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/reglement', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/accessibilite', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/confidentialite', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cgv', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let formationEntries: MetadataRoute.Sitemap = [];
  try {
    const slugs = await client.fetch<{ slug: string }[]>(
      groq`*[_type == "formation" && defined(slug.current)]{ "slug": slug.current }`
    );
    formationEntries = slugs.map((s) => ({
      url: `${BASE_URL}/formations/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error('Sitemap: failed to fetch formations from Sanity', err);
  }

  return [...staticEntries, ...formationEntries];
}
