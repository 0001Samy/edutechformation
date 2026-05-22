'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import JsonLd, { homepageFaqSchema } from '@/components/JsonLd';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const t = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef(0);
  const TOTAL_SLIDES = 5;

  const goToSlide = (index: number) => {
    if (slidesContainerRef.current) {
      gsap.to(slidesContainerRef.current, {
        x: `-${index * 100}%`,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
    activeSlideRef.current = index;
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeSlideRef.current + 1) % TOTAL_SLIDES;
      goToSlide(next);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useIsoLayoutEffect(() => {
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
        force3D: true,
        clearProps: 'transform,willChange',
      });
    }
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-32 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div ref={heroRef} className='text-center max-w-4xl mx-auto'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              {t.home.heroTitle1}{' '}
              <span className='text-accent'>{t.home.heroTitleAccent}</span>
            </h1>
            <p className='text-xl md:text-2xl mb-6 text-teal-50 leading-relaxed'>
              {t.home.heroSubtitle}
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center mb-8 text-teal-100'>
              <span className='flex items-center gap-2'>
                <ArrowRight size={16} className='text-accent flex-shrink-0' />
                {t.home.heroBullet1}
              </span>
              <span className='flex items-center gap-2'>
                <ArrowRight size={16} className='text-accent flex-shrink-0' />
                {t.home.heroBullet2}
              </span>
            </div>
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

      {/* NOS DOMAINES D'EXPERTISE */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <p className='text-sm font-semibold tracking-widest text-primary uppercase mb-2'>
              {t.home.domainesTitle}
            </p>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
              {t.home.domainesSub}
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
            {[
              { title: t.home.droitTitle, desc: t.home.droitDesc },
              { title: t.home.mediationTitle, desc: t.home.mediationDesc },
              { title: t.home.iaTitle, desc: t.home.iaDesc },
            ].map((pole, i) => (
              <div
                key={i}
                className='bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>{pole.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{pole.desc}</p>
              </div>
            ))}
          </div>
          <div className='text-center'>
            <Link
              href='/formations'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-primary to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105'
            >
              {t.home.ctaDiscover}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Slider — 5 sections condensées */}
      <section className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <div ref={slidesContainerRef} className='flex will-change-transform'>

              {/* Slide 1 — Performance */}
              <div className='w-full flex-shrink-0 min-h-[340px]'>
                <h2 className='text-3xl md:text-4xl font-bold mb-5 text-gray-900'>{t.home.perfTitle}</h2>
                <p className='text-lg text-gray-700 mb-5 leading-relaxed'>{t.home.perfIntro}</p>
                <ul className='space-y-3 mb-6'>
                  {[t.home.perfItem1, t.home.perfItem2, t.home.perfItem3].map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle className='text-primary flex-shrink-0 mt-0.5' size={18} />
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-gray-600 font-medium'>{t.home.perfNote}</p>
              </div>

              {/* Slide 2 — Pédagogie */}
              <div className='w-full flex-shrink-0 min-h-[340px]'>
                <h2 className='text-3xl md:text-4xl font-bold mb-5 text-gray-900'>{t.home.pedaTitle}</h2>
                <p className='text-gray-700 mb-5'>{t.home.pedaIntro}</p>
                <ul className='space-y-3 mb-6'>
                  {[t.home.pedaItem1, t.home.pedaItem2, t.home.pedaItem3, t.home.pedaItem4].map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle className='text-primary flex-shrink-0 mt-0.5' size={18} />
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-gray-600 italic'>{t.home.pedaNote}</p>
              </div>

              {/* Slide 3 — Formations adaptées */}
              <div className='w-full flex-shrink-0 min-h-[340px]'>
                <h2 className='text-3xl md:text-4xl font-bold mb-5 text-gray-900'>{t.home.adaptTitle}</h2>
                <p className='text-gray-700 mb-3'>{t.home.adaptIntro}</p>
                <ul className='space-y-1 ml-4 mb-4'>
                  {[t.home.adaptType1, t.home.adaptType2, t.home.adaptType3, t.home.adaptType4].map((item, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span className='text-primary mt-1 flex-shrink-0'>•</span>
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-gray-700 mb-3'>{t.home.adaptLead}</p>
                <ul className='space-y-1 ml-4 mb-4'>
                  {[t.home.adaptItem1, t.home.adaptItem2, t.home.adaptItem3].map((item, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span className='text-primary mt-1 flex-shrink-0'>•</span>
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-gray-600 text-sm'>{t.home.adaptNote}</p>
              </div>

              {/* Slide 4 — Pourquoi nous */}
              <div className='w-full flex-shrink-0 min-h-[340px]'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>{t.home.whyTitle}</h2>
                <ul className='space-y-3 mb-6'>
                  {[t.home.whyItem1, t.home.whyItem2, t.home.whyItem3, t.home.whyItem4, t.home.whyItem5].map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle className='text-primary flex-shrink-0 mt-0.5' size={18} />
                      <span className='text-gray-700 font-medium'>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-gray-600 italic'>{t.home.whyNote1}</p>
              </div>

              {/* Slide 5 — Partenaire */}
              <div className='w-full flex-shrink-0 min-h-[340px]'>
                <h2 className='text-3xl md:text-4xl font-bold mb-5 text-gray-900'>{t.home.partnerTitle}</h2>
                <p className='text-lg text-gray-700 mb-4'>{t.home.partnerIntro}</p>
                <p className='text-gray-700 mb-4'>{t.home.partnerLead}</p>
                <ul className='space-y-3 mb-6'>
                  {[t.home.partnerItem1, t.home.partnerItem2, t.home.partnerItem3].map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle className='text-primary flex-shrink-0 mt-0.5' size={18} />
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-gray-600 italic'>{t.home.partnerNote}</p>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className='flex items-center justify-between mt-10'>
            <button
              onClick={() => goToSlide((activeSlide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)}
              className='p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors'
              aria-label='Précédent'
            >
              <ChevronLeft size={20} />
            </button>

            <div className='flex items-center gap-2'>
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeSlide ? 'bg-primary w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goToSlide((activeSlide + 1) % TOTAL_SLIDES)}
              className='p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors'
              aria-label='Suivant'
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className='py-20 md:py-24 bg-gradient-to-b from-white via-teal-50/30 to-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
              {t.home.approachTitle}
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
              {t.home.approachSubtitle}
            </p>
          </div>
          <div className='relative w-full aspect-[3/2] max-w-4xl mx-auto'>
            <Image
              src='/approach-tree.jpg'
              alt={t.home.approachTitle}
              fill
              sizes='(max-width: 1024px) 100vw, 1024px'
              className='object-contain'
            />
          </div>
        </div>
      </section>

      {/* Une qualité certifiée : Qualiopi */}
      <section className='py-20 bg-gradient-to-br from-teal-50 to-white border-t border-teal-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='flex-shrink-0'>
              <Image
                src='/Logo_Qualiopi.png'
                alt='Certification Qualiopi'
                width={200}
                height={100}
                className='object-contain'
              />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
                {t.home.qualiopiSectionTitle}
              </h2>
              <p className='text-gray-700 mb-2'>{t.home.qualiopiSectionText1}</p>
              <p className='text-gray-700 mb-4'>{t.home.qualiopiSectionText2}</p>
              <ul className='space-y-2 mb-6'>
                {[t.home.qualiopiItem1, t.home.qualiopiItem2, t.home.qualiopiItem3].map((item, i) => (
                  <li key={i} className='flex items-center gap-2 text-gray-700'>
                    <span className='w-2 h-2 rounded-full bg-primary flex-shrink-0'></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href='/qualiopi'
                className='inline-flex items-center gap-2 text-primary font-semibold hover:underline'
              >
                {t.home.qualiopiSectionLink}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd id='ld-faq-home' data={homepageFaqSchema} />

      {/* CTA — Parlons de votre projet */}
      <section className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            {t.home.ctaTitle2}
          </h2>
          <p className='text-xl text-gray-300 mb-3 leading-relaxed'>{t.home.ctaText1}</p>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>{t.home.ctaText2}</p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            {t.home.ctaButton2}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
