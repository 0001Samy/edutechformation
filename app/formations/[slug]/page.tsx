import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import FormationDetailClient from './FormationDetailClient';
import JsonLd, { buildCourseSchema, buildBreadcrumbList } from '@/components/JsonLd';

// Génération des pages statiques
export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "formation" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

// Métadonnées SEO dynamiques par formation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await client.fetch<{
    titre?: string;
    description?: string;
    imageUrl?: string;
  } | null>(
    groq`*[_type == "formation" && slug.current == $slug][0]{
      titre,
      description,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );

  if (!course) {
    return {
      title: 'Formation introuvable',
      robots: { index: false, follow: false },
    };
  }

  const title = course.titre ?? 'Formation';
  const description =
    course.description?.slice(0, 160) ??
    `Découvrez la formation ${title} proposée par Edutech Formations, organisme certifié Qualiopi.`;
  const url = `https://edutechformations.com/formations/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/formations/${slug}` },
    openGraph: {
      title: `${title} | Edutech Formations`,
      description,
      url,
      type: 'article',
      images: course.imageUrl
        ? [{ url: course.imageUrl, alt: title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Edutech Formations`,
      description,
      images: course.imageUrl ? [course.imageUrl] : undefined,
    },
  };
}

// Page dynamique pour une formation
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = await client.fetch(
    groq`
      *[_type == "formation" && slug.current == $slug][0]{
        _id,
        titre,
        description,
        duree,
        horaires,
        etudiants,
        note,
        prix,
        prixIntra,
        prixInter,
        participantsMin,
        participantsMax,
        modules,
        objectifs,
        contenuFormation,
        publicConcerne,
        prerequis,
        modalitesAcces,
        modalitesEvaluation,
        suiviExecution,
        appreciationResultats,
        moyensPedagogiques,
        profilFormateur,
        lien,
        slug,
        "imageUrl": image.asset->url
      }
    `,
    { slug }
  );

  if (!course) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Formation introuvable
          </h1>
          <Link href='/formations' className='text-primary hover:underline'>
            ← Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  // Données structurées schema.org
  const courseSchema = buildCourseSchema({
    slug: course.slug?.current ?? slug,
    title: course.titre,
    description: course.description,
    durationHours: course.duree,
    imageUrl: course.imageUrl,
    priceInter: course.prixInter,
    priceIntra: course.prixIntra,
  });
  const breadcrumbSchema = buildBreadcrumbList([
    { name: 'Accueil', url: '/' },
    { name: 'Formations', url: '/formations' },
    { name: course.titre, url: `/formations/${course.slug?.current ?? slug}` },
  ]);

  return (
    <>
      <JsonLd id='ld-course' data={courseSchema} />
      <JsonLd id='ld-breadcrumb' data={breadcrumbSchema} />
      <FormationDetailClient course={course} />
    </>
  );
}
