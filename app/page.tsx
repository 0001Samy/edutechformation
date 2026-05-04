'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// useLayoutEffect côté client, useEffect côté serveur (évite le warning SSR)
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Sparkles,
  Zap,
  Target,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const t = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect → s'exécute après l'hydratation mais AVANT le browser paint
  // → gsap.set() est appliqué avant que l'utilisateur ne voie le contenu à sa
  //   position finale, donc PAS de yo-yo (CLS = 0)
  useIsoLayoutEffect(() => {
    const sharedProps = {
      force3D: true, // GPU layer → évite les forced reflows
      clearProps: 'transform,willChange', // libère après l'anim
    };

    // Hero animation — gsap.set() AVANT le paint → pas de CLS
    if (heroRef.current) {
      const heroChildren = heroRef.current.children;
      gsap.set(heroChildren, {
        opacity: 0,
        y: 50,
        force3D: true,
        willChange: 'transform, opacity',
      });
      gsap.to(heroChildren, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        ...sharedProps,
      });
    }

    // Features scroll animation — ScrollTrigger.batch + force3D
    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll<HTMLElement>('.feature-card');
      gsap.set(features, {
        opacity: 0,
        y: 50,
        force3D: true,
        willChange: 'transform, opacity',
      });
      ScrollTrigger.batch(features, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            ...sharedProps,
          });
        },
      });
    }

    // Stats scroll animation
    if (statsRef.current) {
      const stats = statsRef.current.children;
      gsap.set(stats, {
        opacity: 0,
        y: 30,
        force3D: true,
        willChange: 'transform, opacity',
      });
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(stats, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            ...sharedProps,
          });
        },
      });
    }
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-32 overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div ref={heroRef} className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-6'>
              <Sparkles size={18} className='text-accent' />
              <span className='text-sm font-medium'>{t.home.heroBadge}</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              {t.home.heroTitle1}{' '}
              <span className='text-accent'>{t.home.heroTitleAccent}</span>{' '}
              {t.home.heroTitle2}
            </h1>
            <p className='text-xl md:text-2xl mb-10 text-teal-50 leading-relaxed'>
              {t.home.heroSubtitle}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/formations'
                className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg hover:shadow-xl'
              >
                {t.home.ctaDiscover}
                <ArrowRight size={20} />
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/40'
              >
                {t.home.ctaTalk}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div ref={statsRef} className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-teal-800 mb-2'>
                {t.home.stat1Value}
              </div>
              <div className='text-gray-600'>{t.home.stat1Label}</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-teal-800 mb-2'>
                {t.home.stat2Value}
              </div>
              <div className='text-gray-600'>{t.home.stat2Label}</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-teal-800 mb-2'>
                {t.home.stat3Value}
              </div>
              <div className='text-gray-600'>{t.home.stat3Label}</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-teal-800 mb-2'>
                {t.home.stat4Value}
              </div>
              <div className='text-gray-600'>{t.home.stat4Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-gradient-to-b from-white to-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              {t.home.featuresTitle}
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              {t.home.featuresSubtitle}
            </p>
          </div>
          <div
            ref={featuresRef}
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
          >
            <div className='feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <BookOpen className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                {t.home.feature1Title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {t.home.feature1Desc}
              </p>
            </div>
            <div className='feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <Users className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                {t.home.feature2Title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {t.home.feature2Desc}
              </p>
            </div>
            <div className='feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <Award className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                {t.home.feature3Title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {t.home.feature3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-6'>
            <Zap size={18} className='text-accent' />
            <span className='text-sm font-medium'>{t.home.finalCtaBadge}</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            {t.home.finalCtaTitle}
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            {t.home.finalCtaSubtitle}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/formations'
              className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
            >
              {t.home.finalCtaButton}
              <ArrowRight size={20} />
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/40'
            >
              {t.home.finalCtaContact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
