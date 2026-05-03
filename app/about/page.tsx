'use client';

import Image from 'next/image';
import { ShieldCheck, Users, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function AboutPage() {
  const t = useTranslation();

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            {t.about.heroTitle}
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-3xl'>
            {t.about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Notre mission */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-6'>{t.about.missionTitle}</h2>
              <p className='text-lg text-gray-700 mb-4 leading-relaxed'>
                {t.about.missionText1}
              </p>
              <p className='text-lg text-gray-700 leading-relaxed'>
                {t.about.missionText2}
              </p>
            </div>
            <div className='bg-gradient-to-br from-primary/30 to-teal-900/30 h-96 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg border border-teal-100'>
              <Image
                src='/about-team.jpg'
                alt='Groupe de personnes en formation'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              {t.about.valuesTitle}
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              {t.about.valuesSubtitle}
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <ShieldCheck className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                {t.about.qualityTitle}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {t.about.qualityText}
              </p>
            </div>
            <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <Users className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                {t.about.proximityTitle}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {t.about.proximityText}
              </p>
            </div>
            <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-foreground to-gray-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <TrendingUp className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                {t.about.impactTitle}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {t.about.impactText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Qualiopi */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-br from-primary/5 to-teal-50 rounded-2xl p-8 md:p-12 border border-teal-100'>
            <div className='flex items-start gap-5'>
              <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
                <ShieldCheck className='text-white' size={32} />
              </div>
              <div>
                <h2 className='text-3xl font-bold mb-4'>{t.about.qualiopiTitle}</h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                  {t.about.qualiopiText}
                </p>
                <Link
                  href='/qualiopi'
                  className='text-primary font-semibold hover:underline inline-flex items-center gap-1'
                >
                  {t.about.qualiopiLink}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations légales */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-6'>{t.about.legalTitle}</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            {t.about.legalText}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
            <Sparkles size={18} className='text-accent' />
            <span className='text-sm font-medium'>{t.about.finalCtaBadge}</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {t.about.finalCtaTitle}
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            {t.about.finalCtaSubtitle}
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            {t.common.contactUs}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
