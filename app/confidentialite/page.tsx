'use client';

import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function ConfidentialitePage() {
  const s2DataItems = useMemo(() => [
    "Données d'identification : nom, prénom",
    "Coordonnées : adresse email, numéro de téléphone, adresse postale",
    "Données professionnelles : fonction, entreprise, CV, diplômes",
    "Données administratives et financières : devis, factures, coordonnées bancaires",
    "Données liées à la formation : suivi, évaluations, participation",
  ], []);

  const s2ViaWebItems = useMemo(() => [
    "Formulaires de contact ou de demande de devis",
    "Navigation sur le site (cookies, outils de mesure d'audience)",
    "Outils d'analyse tels que Google Analytics",
  ], []);

  const s2ViaEchangeItems = useMemo(() => [
    "Par email",
    "Par téléphone",
    "Lors de rendez-vous (présentiel ou visioconférence)",
    "Lors de la transmission de documents (devis, conventions, CV, etc.)",
  ], []);

  const s2ViaContratItems = useMemo(() => [
    "Inscription à une formation",
    "Signature de devis ou conventions",
    "Suivi administratif et pédagogique",
  ], []);

  const s3Items = useMemo(() => [
    "Gestion et organisation des formations",
    "Communication avec les clients et participants",
    "Établissement des documents contractuels et administratifs",
    "Suivi des formations et amélioration continue",
    "Gestion des litiges et obligations légales",
  ], []);

  const s6Items = useMemo(() => [
    "Sous-traitants intervenant dans l'exécution des prestations",
    "Obligations légales ou réglementaires",
    "Partenaires impliqués dans la réalisation de la formation",
  ], []);

  const strings = useMemo(() => ({
    title: "Politique de confidentialité",

    s1Title: "1. Responsable du traitement",
    s1Text: "La société EDUTECH FORMATIONS (SASU), SIRET 977 619 089 00021, dont le siège est situé 52 Rue Montesquieu – 92600 Asnières-sur-Seine, est responsable du traitement des données personnelles collectées dans le cadre de ses activités. Contact : contact@edutechformation.com – 06 33 24 77 64.",

    s2Title: "2. Données collectées et modalités de collecte",
    s2Intro: "Dans le cadre de ses activités, EDUTECH FORMATIONS est amené à collecter des données à caractère personnel par différents moyens.",
    s2DataTitle: "🔸 Données collectées",
    s2DataIntro: "Les données susceptibles d'être collectées sont notamment :",
    s2CollectTitle: "🔸 Modalités de collecte",
    s2CollectIntro: "Les données personnelles peuvent être collectées :",
    s2Web: "✔ Via le site internet",
    s2Echange: "✔ Lors des échanges avec EDUTECH FORMATIONS",
    s2Contrat: "✔ Dans le cadre de la relation contractuelle",
    s2Note: "👉 Important : Les données sont collectées directement auprès des personnes concernées ou transmises par leur employeur dans le cadre de l'inscription à une formation.",

    s3Title: "3. Finalités du traitement",
    s3Intro: "Les données sont collectées pour les finalités suivantes :",

    s4Title: "4. Base légale",
    s4Text: "Les traitements sont fondés sur l'exécution contractuelle, les obligations légales et l'intérêt légitime de l'organisme de formation.",

    s5Title: "5. Durée de conservation",
    s5Text: "Les données personnelles sont conservées pendant une durée maximale de cinq (5) ans, sauf obligation légale contraire ou demande de suppression par la personne concernée.",

    s6Title: "6. Destinataires des données",
    s6Intro: "Les données sont accessibles uniquement aux personnes habilitées au sein d'EDUTECH FORMATIONS et peuvent être transmises à des tiers dans les cas suivants :",

    s7Title: "7. Sécurité des données",
    s7Text: "EDUTECH FORMATIONS met en œuvre des mesures techniques et organisationnelles afin de garantir la sécurité et la confidentialité des données personnelles.",

    s8Title: "8. Droits des personnes",
    s8Text1: "Conformément à la réglementation en vigueur (RGPD), vous disposez des droits suivants : accès, rectification, effacement, limitation, opposition et portabilité.",
    s8Text2: "Vous pouvez exercer vos droits en contactant : contact@edutechformation.com",
    s8Text3: "Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",

    s9Title: "9. Cookies",
    s9Text: "Ce site utilise uniquement les cookies nécessaires au fonctionnement de Google Analytics. Vous pouvez désactiver ces cookies via les paramètres de votre navigateur ou en utilisant l'extension de navigateur proposée par Google.",

    s10Title: "10. Modification de la politique",
    s10Text: "EDUTECH FORMATIONS se réserve le droit de modifier la présente politique à tout moment. Les modifications entrent en vigueur dès leur publication.",
  }), []);

  const arr = useMemo(() => Object.values(strings), [strings]);
  const allDynamic = useMemo(() => [
    ...arr,
    ...s2DataItems, ...s2ViaWebItems, ...s2ViaEchangeItems, ...s2ViaContratItems,
    ...s3Items, ...s6Items,
  ], [arr, s2DataItems, s2ViaWebItems, s2ViaEchangeItems, s2ViaContratItems, s3Items, s6Items]);

  const [translated] = useTranslatedContent(allDynamic);
  const keys = Object.keys(strings) as (keyof typeof strings)[];

  const tr = useMemo(
    () =>
      Object.fromEntries(
        keys.map((k, i) => [k, translated[i] || strings[k]])
      ) as Record<keyof typeof strings, string>,
    [keys, translated, strings]
  );

  const sl = arr.length;
  const l0 = s2DataItems.length;
  const l1 = s2ViaWebItems.length;
  const l2 = s2ViaEchangeItems.length;
  const l3 = s2ViaContratItems.length;
  const l4 = s3Items.length;

  const tList = (items: string[], offset: number) =>
    items.map((s, i) => translated[sl + offset + i] || s);

  const tData     = tList(s2DataItems,      0);
  const tWeb      = tList(s2ViaWebItems,    l0);
  const tEchange  = tList(s2ViaEchangeItems,l0+l1);
  const tContrat  = tList(s2ViaContratItems,l0+l1+l2);
  const tS3       = tList(s3Items,          l0+l1+l2+l3);
  const tS6       = tList(s6Items,          l0+l1+l2+l3+l4);

  const pClass = "text-gray-700 leading-relaxed text-justify hyphens-auto";
  const h2Class = "text-2xl font-bold mb-3 text-gray-900";
  const liClass = "flex items-start gap-2";
  const dot = "text-primary mt-1 flex-shrink-0";

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

            {/* 1 */}
            <div>
              <h2 className={h2Class}>{tr.s1Title}</h2>
              <p className={pClass}>{tr.s1Text}</p>
            </div>

            {/* 2 */}
            <div>
              <h2 className={h2Class}>{tr.s2Title}</h2>
              <p className="text-gray-700 mb-4">{tr.s2Intro}</p>

              <p className="font-semibold text-gray-800 mb-2">{tr.s2DataTitle}</p>
              <p className="text-gray-700 mb-2">{tr.s2DataIntro}</p>
              <ul className="space-y-1 mb-5 ml-4">
                {tData.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold text-gray-800 mb-2">{tr.s2CollectTitle}</p>
              <p className="text-gray-700 mb-3">{tr.s2CollectIntro}</p>

              <div className="ml-4 space-y-3 mb-4">
                <div>
                  <p className="font-medium text-gray-700 mb-1">{tr.s2Web}</p>
                  <ul className="space-y-1 ml-4">
                    {tWeb.map((item, i) => (
                      <li key={i} className={liClass}>
                        <span className={dot}>•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">{tr.s2Echange}</p>
                  <ul className="space-y-1 ml-4">
                    {tEchange.map((item, i) => (
                      <li key={i} className={liClass}>
                        <span className={dot}>•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">{tr.s2Contrat}</p>
                  <ul className="space-y-1 ml-4">
                    {tContrat.map((item, i) => (
                      <li key={i} className={liClass}>
                        <span className={dot}>•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 italic text-sm">{tr.s2Note}</p>
            </div>

            {/* 3 */}
            <div>
              <h2 className={h2Class}>{tr.s3Title}</h2>
              <p className="text-gray-700 mb-3">{tr.s3Intro}</p>
              <ul className="space-y-2 ml-4">
                {tS3.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className={h2Class}>{tr.s4Title}</h2>
              <p className={pClass}>{tr.s4Text}</p>
            </div>

            {/* 5 */}
            <div>
              <h2 className={h2Class}>{tr.s5Title}</h2>
              <p className={pClass}>{tr.s5Text}</p>
            </div>

            {/* 6 */}
            <div>
              <h2 className={h2Class}>{tr.s6Title}</h2>
              <p className="text-gray-700 mb-3">{tr.s6Intro}</p>
              <ul className="space-y-2 ml-4">
                {tS6.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className={h2Class}>{tr.s7Title}</h2>
              <p className={pClass}>{tr.s7Text}</p>
            </div>

            {/* 8 */}
            <div>
              <h2 className={h2Class}>{tr.s8Title}</h2>
              <p className="text-gray-700 mb-2">{tr.s8Text1}</p>
              <p className="text-gray-700 mb-2">
                {tr.s8Text2}{' '}
                <a href="mailto:contact@edutechformation.com" className="text-primary hover:underline">
                  contact@edutechformation.com
                </a>
              </p>
              <p className="text-gray-700">{tr.s8Text3}</p>
            </div>

            {/* 9 */}
            <div>
              <h2 className={h2Class}>{tr.s9Title}</h2>
              <p className={pClass}>{tr.s9Text}</p>
            </div>

            {/* 10 */}
            <div>
              <h2 className={h2Class}>{tr.s10Title}</h2>
              <p className={pClass}>{tr.s10Text}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
