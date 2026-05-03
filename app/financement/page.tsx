'use client';

import {
  Building2,
  Briefcase,
  Landmark,
  Wallet,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';
import { useMemo } from 'react';

export default function FinancementPage() {
  const t = useTranslation();

  // Listes à traduire dynamiquement (DeepL)
  const opcoItems = useMemo(
    () => [
      'Identifiez votre OPCO auprès de votre employeur ou service RH',
      'Nous préparons le dossier administratif complet pour vous',
      'Le financement peut couvrir les frais pédagogiques, les salaires et les frais annexes',
    ],
    []
  );
  const ftItems = useMemo(
    () => [
      'Parlez de votre projet de formation à votre conseiller France Travail',
      'Nous fournissons le devis et le programme détaillé nécessaires au dossier',
      "Le financement peut couvrir l'intégralité des frais pédagogiques",
    ],
    []
  );
  const allDynamic = useMemo(() => [...opcoItems, ...ftItems], [opcoItems, ftItems]);
  const [translatedDynamic] = useTranslatedContent(allDynamic);

  const tOpco = opcoItems.map((s, i) => translatedDynamic[i] || s);
  const tFt = ftItems.map((s, i) => translatedDynamic[opcoItems.length + i] || s);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            {t.financement.heroTitle}
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-3xl'>
            {t.financement.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-lg text-gray-700 leading-relaxed'>
            {t.financement.intro}{' '}
            <Link
              href='/qualiopi'
              className='text-primary font-semibold hover:underline'
            >
              {t.financement.introQualiopiLink}
            </Link>
            {t.financement.introEnd}
          </p>
        </div>
      </section>

      {/* OPCO */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Building2 className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                {t.financement.opcoTitle}
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed text-justify hyphens-auto'>
                {t.financement.opcoText}
              </p>
              <div className='space-y-3'>
                {tOpco.map((item, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <CheckCircle
                      className='text-primary flex-shrink-0 mt-0.5'
                      size={20}
                    />
                    <p className='text-gray-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* France Travail */}
      <section className='py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Briefcase className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                {t.financement.ftTitle}
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed text-justify hyphens-auto'>
                {t.financement.ftText}
              </p>
              <div className='space-y-3'>
                {tFt.map((item, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <CheckCircle
                      className='text-primary flex-shrink-0 mt-0.5'
                      size={20}
                    />
                    <p className='text-gray-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employeur */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Landmark className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                {t.financement.employerTitle}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {t.financement.employerText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto */}
      <section className='py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Wallet className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                {t.financement.selfTitle}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {t.financement.selfText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
            <Sparkles size={18} className='text-accent' />
            <span className='text-sm font-medium'>{t.financement.ctaBadge}</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {t.financement.ctaTitle}
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            {t.financement.ctaSubtitle}
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            {t.financement.ctaButton}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
