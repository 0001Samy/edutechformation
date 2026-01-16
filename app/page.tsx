'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }

    // Features scroll animation
    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll('.feature-card');
      features.forEach((feature) => {
        gsap.from(feature, {
          scrollTrigger: {
            trigger: feature,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }

    // Stats scroll animation
    if (statsRef.current) {
      gsap.from(statsRef.current.children, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary via-purple-600 to-purple-800 text-white py-32 overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div ref={heroRef} className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
              <Sparkles size={18} className='text-accent' />
              <span className='text-sm font-medium'>
                Formations certifiantes 2025
              </span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              Transformez votre <span className='text-accent'>carrière</span>{' '}
              avec nos formations
            </h1>
            <p className='text-xl md:text-2xl mb-10 text-purple-50 leading-relaxed'>
              Rejoignez plus de 10,000 professionnels qui ont accéléré leur
              carrière grâce à nos formations expertes
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/cours'
                className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-orange-400 transition-all hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Découvrir nos formations
                <ArrowRight size={20} />
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20'
              >
                Parler à un conseiller
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
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                10K+
              </div>
              <div className='text-gray-600'>Étudiants formés</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                95%
              </div>
              <div className='text-gray-600'>Taux de satisfaction</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                50+
              </div>
              <div className='text-gray-600'>Formations</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                100+
              </div>
              <div className='text-gray-600'>Experts formateurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-gradient-to-b from-white to-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Pourquoi nous choisir ?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Une approche complète pour votre réussite professionnelle
            </p>
          </div>
          <div
            ref={featuresRef}
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
          >
            <div className='feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <BookOpen className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                Formations complètes
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Des cours structurés et complets pour maîtriser chaque sujet en
                profondeur, avec des projets pratiques.
              </p>
            </div>
            <div className='feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <Users className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                Formateurs experts
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Apprenez auprès de professionnels passionnés avec des années
                d'expérience terrain.
              </p>
            </div>
            <div className='feature-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform'>
                <Award className='text-white' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900'>
                Certification reconnue
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Obtenez des certifications valorisées par les entreprises pour
                booster votre carrière.
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
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
            <Zap size={18} className='text-accent' />
            <span className='text-sm font-medium'>Démarrez maintenant</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            Prêt à transformer votre carrière ?
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            Rejoignez des milliers de professionnels qui ont donné un nouvel
            élan à leur parcours
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/cours'
              className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-orange-400 transition-all hover:scale-105 shadow-lg'
            >
              Voir les formations
              <ArrowRight size={20} />
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20'
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
