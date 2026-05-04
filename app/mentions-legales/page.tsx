'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function MentionsLegalesPage() {
  // Tous les textes français — traduits via DeepL si EN
  const strings = useMemo(
    () => ({
      title: 'Mentions légales',
      sectionEditor: 'Éditeur du site',
      editorIntro: 'Le site edutechformations.com est édité par :',
      capital: 'SAS au capital de 1 000 €',
      siren: 'SIREN : 977 619 089',
      siret: 'SIRET (siège) : 977 619 089 00021',
      naf: "Code NAF : 85.59A — Formation continue d'adultes",
      publisher: 'Responsable de publication : Olivier Gil',
      contactLabel: 'Contact :',
      phoneLabel: 'Téléphone :',
      sectionHosting: 'Hébergement',
      hostingText:
        "Le site est hébergé par : [Nom de l'hébergeur, adresse, téléphone — à compléter]",
      sectionIP: 'Propriété intellectuelle',
      ipText:
        "L'ensemble du contenu de ce site (textes, images, vidéos, logo, charte graphique) est la propriété exclusive d'Edutech Formations, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est interdite.",
      sectionData: 'Données personnelles',
      dataText1:
        "Les informations recueillies via les formulaires du site font l'objet d'un traitement informatique destiné à répondre à vos demandes. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à",
      dataText2: "Pour plus d'informations, consultez notre",
      privacyLink: 'politique de confidentialité',
      sectionCookies: 'Cookies',
      cookiesText:
        "Ce site utilise Google Analytics à des fins de mesure d'audience. Pour en savoir plus, consultez notre",
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
              <p className='text-gray-700 mb-3'>{tr.editorIntro}</p>
              <div className='bg-gray-50 rounded-xl p-6 space-y-2 text-gray-700'>
                <p className='font-bold text-lg text-gray-900'>EDUTECH FORMATIONS</p>
                <p>{tr.capital}</p>
                <p>{tr.siren}</p>
                <p>{tr.siret}</p>
                <p>{tr.naf}</p>
                <p>{tr.publisher}</p>
                <p>
                  {tr.contactLabel}{' '}
                  <a
                    href='mailto:contact@edutechformations.com'
                    className='text-primary hover:underline'
                  >
                    contact@edutechformations.com
                  </a>
                </p>
                <p>
                  {tr.phoneLabel}{' '}
                  <a
                    href='tel:+33662091892'
                    className='text-primary hover:underline'
                  >
                    06 62 09 18 92
                  </a>
                </p>
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
                {tr.sectionData}
              </h2>
              <p className='text-gray-700 leading-relaxed mb-3 text-justify hyphens-auto'>
                {tr.dataText1}{' '}
                <a
                  href='mailto:contact@edutechformations.com'
                  className='text-primary hover:underline'
                >
                  contact@edutechformations.com
                </a>
                .
              </p>
              <p className='text-gray-700'>
                {tr.dataText2}{' '}
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
          </div>
        </div>
      </section>
    </div>
  );
}
