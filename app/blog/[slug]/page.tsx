import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { ARTICLES, type Article, type ContentBlock, type Section } from '../articles';

const CATEGORY_STYLES: Record<Article['category'], string> = {
  Médiation: 'bg-teal-100 text-teal-700',
  Droit: 'bg-blue-100 text-blue-700',
};

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article introuvable', robots: { index: false, follow: false } };

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${article.title} | Edutech Formations`,
      description: article.metaDescription,
      url: `https://edutechformations.com/blog/${slug}`,
      type: 'article',
    },
  };
}

function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === 'para') {
    return (
      <p key={idx} className='text-gray-700 leading-relaxed mb-4'>
        {block.text}
      </p>
    );
  }
  return (
    <ul key={idx} className='mb-4 space-y-3 pl-1'>
      {block.items.map((item, i) => (
        <li key={i} className='flex gap-3 text-gray-700 leading-relaxed'>
          <span className='mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function renderSection(section: Section, idx: number) {
  return (
    <div key={idx} className='mb-8'>
      {section.heading && (
        <h2 className='text-xl font-bold text-gray-900 mb-4 mt-8'>
          {section.heading}
        </h2>
      )}
      {section.blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-20 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl' />
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-teal-200 hover:text-white text-sm mb-8 transition-colors'
          >
            <ArrowLeft size={14} />
            Retour au blog
          </Link>

          <div className='flex items-center gap-3 mb-5'>
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_STYLES[article.category]}`}
            >
              <Tag size={11} />
              {article.category}
            </span>
            <span className='flex items-center gap-1 text-xs text-teal-200'>
              <Clock size={12} />
              {article.readTime} min de lecture
            </span>
            <span className='text-xs text-teal-200'>{article.date}</span>
          </div>

          <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Corps de l'article */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Chapeau */}
          <p className='text-lg text-gray-600 leading-relaxed mb-10 pb-10 border-b border-gray-200 font-medium'>
            {article.metaDescription}
          </p>

          {/* Contenu */}
          <div className='prose-custom'>
            {article.sections.map((section, i) => renderSection(section, i))}
          </div>

          {/* CTA section */}
          <div className='mt-14 bg-gradient-to-br from-primary/5 to-teal-50 border border-primary/15 rounded-2xl p-8'>
            <h2 className='text-xl font-bold text-gray-900 mb-3'>
              {article.ctaSection.heading}
            </h2>
            <p className='text-gray-600 leading-relaxed mb-2'>
              {article.ctaSection.body}
            </p>
            {article.ctaSection.contact && (
              <p className='text-sm text-gray-500 mb-6'>
                {article.ctaSection.contact}
              </p>
            )}
            {!article.ctaSection.contact && <div className='mb-6' />}
            <Link
              href={article.ctaSection.buttonHref}
              className='inline-flex items-center gap-2 bg-primary hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors'
            >
              {article.ctaSection.buttonText}
              <ArrowLeft size={16} className='rotate-180' />
            </Link>
          </div>

          {/* Retour blog */}
          <div className='mt-10 text-center'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 text-primary hover:text-teal-700 font-medium transition-colors'
            >
              <ArrowLeft size={16} />
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
