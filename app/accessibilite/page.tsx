'use client';

import {
  Heart,
  User,
  CheckCircle,
  Handshake,
  Clock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Target,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';
import { useMemo } from 'react';

export default function AccessibilitePage() {
  const adaptations = useMemo(
    () => [
      'Adaptation des supports pédagogiques',
      "Aménagement des modalités d'animation",
      'Rythme de formation ajusté',
      'Modalités spécifiques en distanciel',
      'Organisation adaptée en présentiel lorsque cela est possible',
    ],
    []
  );

  const referentRoles = useMemo(
    () => [
      'Analyser les besoins spécifiques',
      'Proposer des adaptations adaptées',
      'Faciliter les échanges entre les parties prenantes',
      'Orienter vers des solutions externes si nécessaire',
    ],
    []
  );

  const partners = useMemo(
    () => [
      "Les organismes spécialisés dans l'accompagnement du handicap",
      "Les acteurs de l'insertion professionnelle",
      "Les structures locales d'accompagnement",
      "Les référents handicap des entreprises ou des organismes publics",
    ],
    []
  );

  const staticStrings = useMemo(
    () => [
      'Notre engagement en matière d\'accessibilité',
      "Edutech Formations s'engage à prendre en compte les situations de handicap dans l'organisation et la réalisation de ses formations. Nous veillons à proposer, dans la mesure du possible, des conditions d'accueil et d'apprentissage adaptées, afin de faciliter l'accès à la formation pour tous les publics.",
      "Nos formations étant réalisées en présentiel sur site client ou à distance en visioconférence, les modalités d'adaptation sont définies en fonction du contexte, des contraintes techniques et des besoins identifiés.",
      'Anticiper vos besoins',
      "Afin de garantir les meilleures conditions d'apprentissage, nous vous invitons à nous signaler en amont toute situation nécessitant une adaptation particulière. Chaque situation est étudiée individuellement afin d'identifier les solutions les plus adaptées, qu'elles soient pédagogiques, organisationnelles ou techniques.",
      'Nous contacter pour échanger sur vos besoins spécifiques',
      'Les adaptations possibles',
      "Selon les situations, différentes mesures peuvent être envisagées :",
      "Limites d'intervention",
      "Certaines situations peuvent nécessiter des aménagements spécifiques ne relevant pas directement de notre champ d'intervention ou dépendant de contraintes externes, notamment dans le cadre de formations réalisées sur site client. Dans ce cas, nous nous engageons à orienter les personnes concernées vers des solutions ou structures plus adaptées à leurs besoins.",
      'Un référent accessibilité à votre écoute',
      "Un référent accessibilité est désigné au sein d'Edutech Formations afin d'accompagner les apprenants et les structures dans la prise en compte des situations de handicap. Il intervient pour :",
      'Partenaires et ressources',
      "Dans une démarche d'amélioration continue, Edutech Formations s'appuie sur des ressources et partenaires spécialisés afin d'orienter au mieux les personnes en situation de handicap. Selon les besoins, nous pouvons recommander de se rapprocher de :",
      'Notre objectif',
      "Nous voulons favoriser l'accès à la formation dans des conditions adaptées et réalistes, en tenant compte des contraintes et des besoins de chacun. Nous inscrivons cette démarche dans une logique d'amélioration continue, afin d'adapter en permanence nos pratiques.",
    ],
    []
  );

  const allDynamic = useMemo(
    () => [...staticStrings, ...adaptations, ...referentRoles, ...partners],
    [staticStrings, adaptations, referentRoles, partners]
  );
  const [translated] = useTranslatedContent(allDynamic);

  const sl = staticStrings.length;
  const al = adaptations.length;
  const rl = referentRoles.length;

  const ts = (i: number) => translated[i] || staticStrings[i];
  const tAdaptations = adaptations.map((s, i) => translated[sl + i] || s);
  const tReferentRoles = referentRoles.map((s, i) => translated[sl + al + i] || s);
  const tPartners = partners.map((s, i) => translated[sl + al + rl + i] || s);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold'>
            Accessibilité et Handicap
          </h1>
        </div>
      </section>

      {/* Notre engagement */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Heart className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{ts(0)}</h2>
              <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto mb-3'>
                {ts(1)}
              </p>
              <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {ts(2)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anticiper vos besoins */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Clock className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{ts(3)}</h2>
              <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto mb-5'>
                {ts(4)}
              </p>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 text-primary font-semibold hover:underline'
              >
                <ArrowRight size={18} />
                {ts(5)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Les adaptations possibles */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-3'>{ts(6)}</h2>
          <p className='text-lg text-gray-600 mb-6'>{ts(7)}</p>
          <div className='space-y-3'>
            {tAdaptations.map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                <CheckCircle className='text-primary flex-shrink-0 mt-1' size={22} />
                <p className='text-gray-700 text-lg'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limites d'intervention */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <AlertCircle className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{ts(8)}</h2>
              <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {ts(9)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Référent accessibilité */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <User className='text-white' size={32} />
            </div>
            <div className='flex-1'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{ts(10)}</h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>{ts(11)}</p>
              <div className='space-y-2 mb-6'>
                {tReferentRoles.map((item, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <CheckCircle className='text-primary flex-shrink-0 mt-1' size={18} />
                    <p className='text-gray-700'>{item}</p>
                  </div>
                ))}
              </div>
              <div className='bg-gray-50 rounded-xl p-6 space-y-2'>
                <p className='font-bold text-lg text-gray-900'>Olivier Gil</p>
                <p className='text-gray-700'>Référent accessibilité</p>
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
                  <a href='tel:+33662091892' className='text-primary hover:underline'>
                    06 62 09 18 92
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires et ressources */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Handshake className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{ts(12)}</h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>{ts(13)}</p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                {tPartners.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notre objectif */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Target className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>{ts(14)}</h2>
              <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {ts(15)}
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
            <span className='text-sm font-medium'>Accessibilité</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Vous avez un besoin spécifique ?
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            Contactez notre référent accessibilité pour étudier ensemble les adaptations possibles.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            Contacter le référent
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
