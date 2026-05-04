'use client';

import {
  ShieldCheck,
  CheckCircle,
  Building2,
  Briefcase,
  ArrowRight,
  Sparkles,
  Download,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';
import { useMemo } from 'react';

export default function QualiopiPage() {
  const t = useTranslation();

  // Listes longues — traduites via DeepL pour ne pas saturer le dictionnaire
  const guarantees = useMemo(
    () => [
      'Des objectifs pédagogiques clairs, adaptés à vos besoins et à votre contexte professionnel',
      'Des programmes structurés avec des méthodes pédagogiques éprouvées',
      'Des formateurs qualifiés dont les compétences sont régulièrement mises à jour',
      'Un suivi individuel tout au long de la formation et une évaluation des acquis',
      'Une prise en compte des situations de handicap et des besoins spécifiques',
      "Une démarche d'amélioration continue basée sur les retours des stagiaires",
    ],
    []
  );

  const referentialItems = useMemo(
    () => [
      "L'information du public sur les prestations, les délais d'accès et les résultats obtenus",
      "L'identification précise des objectifs et l'adaptation des prestations",
      "L'adaptation des moyens pédagogiques, techniques et d'encadrement",
      'La qualification et le développement des compétences des formateurs',
      "L'inscription dans l'environnement professionnel et socio-économique",
      'Le recueil et la prise en compte des appréciations et réclamations',
      "La démarche d'amélioration continue",
    ],
    []
  );

  // Concaténation pour un seul appel API
  const allDynamic = useMemo(
    () => [...guarantees, ...referentialItems],
    [guarantees, referentialItems]
  );
  const [translatedDynamic] = useTranslatedContent(allDynamic);

  const tGuarantees = guarantees.map((g, i) => translatedDynamic[i] || g);
  const tReferential = referentialItems.map(
    (r, i) => translatedDynamic[guarantees.length + i] || r
  );

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
            {t.qualiopi.heroTitle}
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            {t.qualiopi.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Badge */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100'>
            <div className='w-20 h-20 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <ShieldCheck className='text-white' size={40} />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 mb-1'>
              {t.qualiopi.badgeCertified}
            </h2>
            <p className='text-primary font-medium mb-4'>
              {t.qualiopi.badgeCategory}
            </p>
            <p className='text-sm text-gray-500 mb-6'>
              {t.qualiopi.badgeYear}
              <br />
              {t.qualiopi.badgeDeclaration}
            </p>
            <a
              href='/certificat-qualiopi.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-primary to-teal-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105'
            >
              <Download size={18} />
              {t.qualiopi.downloadCertificate}
            </a>
          </div>
        </div>
      </section>

      {/* What is Qualiopi */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            {t.qualiopi.whatIsTitle}
          </h2>
          <div className='space-y-4 text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
            <p>{t.qualiopi.whatIs1}</p>
            <p>{t.qualiopi.whatIs2}</p>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t.qualiopi.guaranteesTitle}
          </h2>
          <p className='text-lg text-gray-700 mb-8'>
            {t.qualiopi.guaranteesIntro}
          </p>
          <div className='space-y-4'>
            {tGuarantees.map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                <CheckCircle
                  className='text-primary flex-shrink-0 mt-1'
                  size={22}
                />
                <p className='text-gray-700 text-justify hyphens-auto flex-1'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing access */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t.qualiopi.financingTitle}
          </h2>
          <p className='text-lg text-gray-700 mb-8'>
            {t.qualiopi.financingIntro}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center mb-4'>
                <Building2 className='text-white' size={28} />
              </div>
              <h3 className='text-xl font-bold mb-2'>{t.qualiopi.opcoCardTitle}</h3>
              <p className='text-gray-600'>{t.qualiopi.opcoCardText}</p>
            </div>
            <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center mb-4'>
                <Briefcase className='text-white' size={28} />
              </div>
              <h3 className='text-xl font-bold mb-2'>{t.qualiopi.ftCardTitle}</h3>
              <p className='text-gray-600'>{t.qualiopi.ftCardText}</p>
            </div>
          </div>
          <p className='mt-6 text-gray-700'>
            {t.qualiopi.financingMore}{' '}
            <Link
              href='/financement'
              className='text-primary font-semibold hover:underline'
            >
              {t.qualiopi.financingPage}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Referential */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t.qualiopi.referentialTitle}
          </h2>
          <p className='text-lg text-gray-700 mb-8'>
            {t.qualiopi.referentialIntro}
          </p>
          <div className='space-y-4'>
            {tReferential.map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                <CheckCircle
                  className='text-primary flex-shrink-0 mt-1'
                  size={22}
                />
                <p className='text-gray-700 text-justify hyphens-auto flex-1'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality process */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            {t.qualiopi.processTitle}
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
            {t.qualiopi.processText}
          </p>
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
            <span className='text-sm font-medium'>{t.qualiopi.ctaBadge}</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            {t.qualiopi.ctaTitle}
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            {t.qualiopi.ctaSubtitle}
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
