'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ARTICLES, type Category } from './articles';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORY_STYLES: Record<Category, string> = {
  Médiation: 'bg-teal-100 text-teal-700',
  Droit: 'bg-blue-100 text-blue-700',
};

export default function BlogPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.blog-card');
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: (i % 3) * 0.08,
        ease: 'power2.out',
        force3D: true,
      });
    });
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl' />
          <div className='absolute bottom-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl' />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Le blog d'Edutech Formations
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-3xl'>
            Actualités juridiques, bonnes pratiques et éclairages métiers pour les professionnels du droit et de la médiation
          </p>
        </div>
      </section>

      {/* Grille articles */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            ref={gridRef}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className='blog-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group'
              >
                {/* En-tête coloré */}
                <div className='h-2 bg-gradient-to-r from-primary to-teal-400' />

                <div className='p-8 flex flex-col flex-1'>
                  {/* Tag catégorie + temps de lecture */}
                  <div className='flex items-center justify-between mb-4'>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_STYLES[article.category]}`}
                    >
                      {article.category}
                    </span>
                    <span className='flex items-center gap-1 text-xs text-gray-400'>
                      <Clock size={12} />
                      {article.readTime} min
                    </span>
                  </div>

                  {/* Titre */}
                  <h2 className='text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors'>
                    {article.title}
                  </h2>

                  {/* Méta-description */}
                  <p className='text-sm text-gray-600 leading-relaxed flex-1 line-clamp-4'>
                    {article.metaDescription}
                  </p>

                  {/* Footer carte */}
                  <div className='mt-6 flex items-center justify-between pt-4 border-t border-gray-100'>
                    <span className='text-xs text-gray-400'>{article.date}</span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className='inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-teal-700 transition-colors'
                    >
                      Lire l'article
                      <ArrowRight size={14} className='group-hover:translate-x-1 transition-transform' />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
