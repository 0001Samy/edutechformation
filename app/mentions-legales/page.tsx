'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function MentionsLegalesPage() {
  // Tous les textes français — traduits via DeepL si EN
  const strings = useMemo(
    () => ({
      title: "Mentions légales",
      sectionEditor: "1. Éditeur du site",
      capital: "EDUTECH FORMATIONS – SASU au capital de 1 000 €",
      siret: "SIRET : 977 619 089 00021",
      siege: "Siège social : 52 Rue Montesquieu – 92600 Asnières-sur-Seine",
      representant: "Représentant légal : Olivier GIL",
      emailLabel: "Email :",
      phoneLabel: "Téléphone :",
      nda: "Déclaration d'activité : 11 94 12031 94",
      sectionHosting: "2. Hébergement",
      hostingText: "Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.",
      sectionIP: "3. Propriété intellectuelle",
      ipText: "L'ensemble du contenu de ce site (textes, images, vidéos, logo, charte graphique, etc.) est la propriété exclusive d'Edutech Formations, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est interdite.",
      sectionData: "5. Données personnelles",
      dataText: "Les informations relatives à la protection des données personnelles sont détaillées dans la politique de confidentialité accessible sur le site.",
      privacyLink: "politique de confidentialité",
      sectionCookies: "6. Cookies",
      cookiesText: "Ce site utilise Google Analytics à des fins de mesure d'audience. Pour en savoir plus, consultez notre",
      sectionResponsability: "4. Responsabilité",
      responsabilityText: "EDUTECH FORMATIONS s'efforce d'assurer l'exactitude des informations diffusées sur le site, sans toutefois garantir leur exhaustivité. L'utilisateur est seul responsable de l'usage qu'il en fait.",
      sectionMediation: "7. Médiation",
      mediationText: "Conformément à l'article L612-1 du Code de la consommation, le client peut recourir gratuitement au service de médiation ANM Conso : https://www.anm-conso.com/ ou par courrier : 62 rue Tiquetonne – 75002 Paris.",
      sectionLaw: "8. Droit applicable",
      lawText: "Le site est soumis au droit français.",
    }),
    []
  );

  const stringsArray = useMemo(() => Object.values(strings), [strings]);
  const [translatedArray] = useTranslatedContent(stringsArray);
  const keys = Object.keys(strings) as (keyof typeof strings)[];
  const tr = useMemo(
    () =>
      Object.fromEntries(
        keys.map((k, i) => [k, translatedArray[i] || strings[k]])
      ) as Record<keyof typeof strings, string>,
    [keys, translatedArray, strings]
  );

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      <section className='bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold mb-4'>{tr.title}</h1>
        </div>
      </section>

      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10'>
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionEditor}
              </h2>
              <div className='bg-gray-50 rounded-xl p-6 space-y-1 text-gray-700'>
                <p className='font-bold text-gray-900'>{tr.capital}</p>
                <p>{tr.siret}</p>
                <p>{tr.siege}</p>
                <p>{tr.representant}</p>
                <p>
                  {tr.emailLabel}{' '}
                  <a href='mailto:contact@edutechformation.com' className='text-primary hover:underline'>
                    contact@edutechformation.com
                  </a>
                </p>
                <p>
                  {tr.phoneLabel}{' '}
                  <a href='tel:+33633247764' className='text-primary hover:underline'>
                    06 33 24 77 64
                  </a>
                </p>
                <p>{tr.nda}</p>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionHosting}
              </h2>
              <p className='text-gray-700'>{tr.hostingText}</p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionIP}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.ipText}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionResponsability}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.responsabilityText}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionData}
              </h2>
              <p className='text-gray-700 leading-relaxed'>{tr.dataText}</p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionCookies}
              </h2>
              <p className='text-gray-700'>
                {tr.cookiesText}{' '}
                <Link
                  href='/confidentialite'
                  className='text-primary font-semibold hover:underline'
                >
                  {tr.privacyLink}
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionMediation}
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                {tr.mediationText}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.sectionLaw}
              </h2>
              <p className='text-gray-700'>{tr.lawText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
