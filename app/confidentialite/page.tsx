'use client';

import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function ConfidentialitePage() {
  const strings = useMemo(
    () => ({
      title: "Politique de confidentialité",
      s1Title: "1. Responsable du traitement",
      s1Text: "La société EDUTECH FORMATIONS (SASU), SIRET 977 619 089 00021, dont le siège est situé 52 Rue Montesquieu – 92600 Asnières-sur-Seine, est responsable du traitement des données personnelles collectées dans le cadre de ses activités. Contact : contact@edutechformation.com – 06 33 24 77 64.",
      s2Title: "2. Données collectées et modalités de collecte",
      s2Sub1: "Données collectées",
      s2Text1: "Les données susceptibles d'être collectées sont : données d'identification (nom, prénom), coordonnées (email, téléphone, adresse postale), données professionnelles (fonction, entreprise, CV, diplômes), données administratives et financières (devis, factures), données liées à la formation (suivi, évaluations, participation).",
      s2Sub2: "Modalités de collecte",
      s2Text2: "Les données sont collectées via le site internet (formulaires, cookies, Google Analytics), lors des échanges avec EDUTECH FORMATIONS (email, téléphone, rendez-vous) et dans le cadre de la relation contractuelle (inscriptions, conventions, suivi pédagogique).",
      s3Title: "3. Finalités du traitement",
      s3Text: "Les données sont collectées pour : gestion et organisation des formations, communication avec les clients et participants, établissement des documents contractuels et administratifs, suivi des formations et amélioration continue, gestion des litiges et obligations légales.",
      s4Title: "4. Base légale",
      s4Text: "Les traitements sont fondés sur l'exécution contractuelle, les obligations légales et l'intérêt légitime de l'organisme de formation.",
      s5Title: "5. Durée de conservation",
      s5Text: "Les données personnelles sont conservées pendant une durée maximale de cinq (5) ans, sauf obligation légale contraire ou demande de suppression par la personne concernée.",
      s6Title: "6. Destinataires des données",
      s6Text: "Les données sont accessibles uniquement aux personnes habilitées au sein d'EDUTECH FORMATIONS et peuvent être transmises à des tiers dans les cas suivants : sous-traitants intervenant dans l'exécution des prestations, obligations légales ou réglementaires, partenaires impliqués dans la réalisation de la formation.",
      s7Title: "7. Sécurité des données",
      s7Text: "EDUTECH FORMATIONS met en œuvre des mesures techniques et organisationnelles afin de garantir la sécurité et la confidentialité des données personnelles.",
      s8Title: "8. Droits des personnes",
      s8Intro: "Conformément au RGPD, vous disposez des droits suivants :",
      s8Right1: "Droit d'accès",
      s8Right1Text: " : obtenir une copie de vos données",
      s8Right2: "Droit de rectification",
      s8Right2Text: " : corriger des données inexactes",
      s8Right3: "Droit à l'effacement",
      s8Right3Text: " : demander la suppression de vos données",
      s8Right4: "Droit d'opposition",
      s8Right4Text: " : vous opposer au traitement de vos données",
      s8Right5: "Droit à la portabilité",
      s8Right5Text: " : récupérer vos données dans un format lisible",
      s8Contact: "Pour exercer ces droits, contactez-nous à",
      s9Title: "9. Cookies",
      s9Text: "Ce site utilise Google Analytics à des fins de mesure d'audience. Les données collectées sont anonymisées. Vous pouvez désactiver ces cookies via les paramètres de votre navigateur.",
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

  const pClass = "text-gray-700 leading-relaxed text-justify hyphens-auto";

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{tr.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s1Title}</h2>
              <p className={pClass}>{tr.s1Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s2Title}</h2>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{tr.s2Sub1}</h3>
              <p className={`${pClass} mb-4`}>{tr.s2Text1}</p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{tr.s2Sub2}</h3>
              <p className={pClass}>{tr.s2Text2}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s3Title}</h2>
              <p className={pClass}>{tr.s3Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s4Title}</h2>
              <p className={pClass}>{tr.s4Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s5Title}</h2>
              <p className={pClass}>{tr.s5Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s6Title}</h2>
              <p className={pClass}>{tr.s6Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s7Title}</h2>
              <p className={pClass}>{tr.s7Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s8Title}</h2>
              <p className="text-gray-700 mb-3">{tr.s8Intro}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>{tr.s8Right1}</strong>{tr.s8Right1Text}</li>
                <li><strong>{tr.s8Right2}</strong>{tr.s8Right2Text}</li>
                <li><strong>{tr.s8Right3}</strong>{tr.s8Right3Text}</li>
                <li><strong>{tr.s8Right4}</strong>{tr.s8Right4Text}</li>
                <li><strong>{tr.s8Right5}</strong>{tr.s8Right5Text}</li>
              </ul>
              <p className="text-gray-700">
                {tr.s8Contact}{' '}
                <a href="mailto:contact@edutechformation.com" className="text-primary hover:underline">
                  contact@edutechformation.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.s9Title}</h2>
              <p className={pClass}>{tr.s9Text}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
