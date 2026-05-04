'use client';

import {
  Heart,
  User,
  CheckCircle,
  Handshake,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';
import { useMemo } from 'react';

export default function AccessibilitePage() {
  const t = useTranslation();

  const adaptations = useMemo(
    () => [
      'Adaptation des supports pédagogiques (format, taille de police, contrastes)',
      'Aménagement des conditions de passation des évaluations (temps supplémentaire, modalités alternatives)',
      'Choix de salles de formation accessibles aux personnes à mobilité réduite',
      'Pauses adaptées en fonction des besoins',
      'Orientation vers des organismes spécialisés et des dispositifs de compensation si nécessaire',
    ],
    []
  );
  const partners = useMemo(
    () => [
      "L'Agefiph (Association de Gestion du Fonds pour l'Insertion Professionnelle des Personnes Handicapées)",
      "Le FIPHFP (Fonds pour l'Insertion des Personnes Handicapées dans la Fonction Publique)",
      'Les Cap Emploi et les Maisons Départementales des Personnes Handicapées (MDPH)',
    ],
    []
  );

  const allDynamic = useMemo(() => [...adaptations, ...partners], [adaptations, partners]);
  const [translatedDynamic] = useTranslatedContent(allDynamic);

  const tAdaptations = adaptations.map((s, i) => translatedDynamic[i] || s);
  const tPartners = partners.map((s, i) => translatedDynamic[adaptations.length + i] || s);

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
            {t.accessibility.heroTitle}
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            {t.accessibility.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Engagement */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Heart className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {t.accessibility.commitTitle}
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {t.accessibility.commitText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Référent */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <User className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {t.accessibility.referentTitle}
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                {t.accessibility.referentIntro}
              </p>
              <div className='bg-gray-50 rounded-xl p-6 space-y-2'>
                <p className='font-bold text-lg text-gray-900'>
                  {t.accessibility.referentName}
                </p>
                <p className='text-gray-700'>{t.accessibility.referentRole}</p>
                <p className='text-gray-700'>
                  Email :{' '}
                  <a
                    href='mailto:contact@edutechformations.com'
                    className='text-primary hover:underline'
                  >
                    contact@edutechformations.com
                  </a>
                </p>
                <p className='text-gray-700'>
                  Téléphone :{' '}
                  <a
                    href='tel:+33662091892'
                    className='text-primary hover:underline'
                  >
                    06 62 09 18 92
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptations */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'>
            {t.accessibility.adaptationsTitle}
          </h2>
          <div className='space-y-4'>
            {tAdaptations.map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                <CheckCircle
                  className='text-primary flex-shrink-0 mt-1'
                  size={22}
                />
                <p className='text-gray-700 text-lg text-justify hyphens-auto flex-1'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Handshake className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {t.accessibility.partnersTitle}
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                {t.accessibility.partnersIntro}
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                {tPartners.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anticipate */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Clock className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                {t.accessibility.anticipateTitle}
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {t.accessibility.anticipateText}
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
          <div className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-6'>
            <Sparkles size={18} className='text-accent' />
            <span className='text-sm font-medium'>{t.accessibility.ctaBadge}</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {t.accessibility.ctaTitle}
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            {t.accessibility.ctaSubtitle}
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            {t.accessibility.ctaButton}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
