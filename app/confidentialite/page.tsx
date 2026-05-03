'use client';

import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function ConfidentialitePage() {
  const strings = useMemo(
    () => ({
      title: 'Politique de confidentialité',
      introTitle: 'Introduction',
      introText:
        "Edutech Formations s'engage à protéger la vie privée des utilisateurs de son site. La présente politique de confidentialité décrit les données personnelles que nous collectons, pourquoi nous les collectons et comment nous les utilisons.",
      controllerTitle: 'Responsable du traitement',
      controllerIntro: 'Le responsable du traitement des données est :',
      controllerOrg: 'EDUTECH FORMATIONS — SAS au capital de 1 000 €',
      contactLabel: 'Contact :',
      collectedTitle: 'Données collectées',
      formsSubTitle: 'Via les formulaires de contact',
      formsText:
        'Lorsque vous nous contactez via le site, nous collectons : nom, adresse email, numéro de téléphone (facultatif) et le contenu de votre message. Ces données sont utilisées uniquement pour répondre à votre demande.',
      analyticsSubTitle: 'Via Google Analytics',
      analyticsText:
        "Nous utilisons Google Analytics pour analyser la fréquentation de notre site. Cet outil collecte des données anonymisées : pages visitées, durée de la visite, type d'appareil, zone géographique approximative. Aucune donnée personnelle identifiable n'est collectée par cet outil.",
      purposeTitle: 'Finalité du traitement',
      purposeIntro: 'Vos données sont collectées pour :',
      purpose1: "Répondre à vos demandes d'information ou d'inscription",
      purpose2: 'Assurer le suivi administratif des formations',
      purpose3:
        'Améliorer notre site et nos services grâce aux statistiques de fréquentation',
      retentionTitle: 'Durée de conservation',
      retentionText:
        'Les données issues des formulaires de contact sont conservées pendant 3 ans à compter de votre dernière interaction. Les données de Google Analytics sont conservées 14 mois.',
      rightsTitle: 'Vos droits',
      rightsIntro:
        'Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :',
      right1Bold: "Droit d'accès :",
      right1Text: 'obtenir une copie de vos données',
      right2Bold: 'Droit de rectification :',
      right2Text: 'corriger des données inexactes',
      right3Bold: "Droit à l'effacement :",
      right3Text: 'demander la suppression de vos données',
      right4Bold: "Droit d'opposition :",
      right4Text: 'vous opposer au traitement de vos données',
      right5Bold: 'Droit à la portabilité :',
      right5Text: 'récupérer vos données dans un format lisible',
      rightsContact: 'Pour exercer ces droits, contactez-nous à',
      cookiesTitle: 'Cookies',
      cookiesText:
        "Ce site utilise uniquement les cookies nécessaires au fonctionnement de Google Analytics. Vous pouvez désactiver ces cookies via les paramètres de votre navigateur ou en utilisant l'extension de navigateur proposée par Google.",
    }),
    []
  );

  const arr = useMemo(() => Object.values(strings), [strings]);
  const [translated] = useTranslatedContent(arr);
  const keys = Object.keys(strings) as (keyof typeof strings)[];
  const tr = useMemo(
    () =>
      Object.fromEntries(
        keys.map((k, i) => [k, translated[i] || strings[k]])
      ) as Record<keyof typeof strings, string>,
    [keys, translated, strings]
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
                {tr.introTitle}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.introText}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.controllerTitle}
              </h2>
              <p className='text-gray-700 mb-3'>{tr.controllerIntro}</p>
              <div className='bg-gray-50 rounded-xl p-6 space-y-2 text-gray-700'>
                <p className='font-bold text-gray-900'>{tr.controllerOrg}</p>
                <p>
                  {tr.contactLabel}{' '}
                  <a
                    href='mailto:contact@edutechformations.com'
                    className='text-primary hover:underline'
                  >
                    contact@edutechformations.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.collectedTitle}
              </h2>
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                {tr.formsSubTitle}
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6 text-justify hyphens-auto'>
                {tr.formsText}
              </p>
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                {tr.analyticsSubTitle}
              </h3>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.analyticsText}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.purposeTitle}
              </h2>
              <p className='text-gray-700 mb-3'>{tr.purposeIntro}</p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>{tr.purpose1}</li>
                <li>{tr.purpose2}</li>
                <li>{tr.purpose3}</li>
              </ul>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.retentionTitle}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.retentionText}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.rightsTitle}
              </h2>
              <p className='text-gray-700 mb-3'>{tr.rightsIntro}</p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>
                  <strong>{tr.right1Bold}</strong> {tr.right1Text}
                </li>
                <li>
                  <strong>{tr.right2Bold}</strong> {tr.right2Text}
                </li>
                <li>
                  <strong>{tr.right3Bold}</strong> {tr.right3Text}
                </li>
                <li>
                  <strong>{tr.right4Bold}</strong> {tr.right4Text}
                </li>
                <li>
                  <strong>{tr.right5Bold}</strong> {tr.right5Text}
                </li>
              </ul>
              <p className='text-gray-700 mt-3'>
                {tr.rightsContact}{' '}
                <a
                  href='mailto:contact@edutechformations.com'
                  className='text-primary hover:underline'
                >
                  contact@edutechformations.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.cookiesTitle}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.cookiesText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
