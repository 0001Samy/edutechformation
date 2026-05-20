'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function ReglementPage() {
  const a2Items = useMemo(() => [
    "Avant leur entrée en formation, EDUTECH FORMATIONS transmettra à ses stagiaires :",
    "Le programme et les objectifs de la formation",
    "Les horaires et modalités d'organisation",
    "Les modalités d'évaluation",
    "Les coordonnées du référent pédagogique",
    "Le présent règlement intérieur",
  ], []);

  const a3Items = useMemo(() => [
    "Respecter les consignes du formateur",
    "Ne pas perturber le bon déroulement de la formation",
    "Respecter les supports pédagogiques et les droits de propriété intellectuelle",
  ], []);

  const a4Items = useMemo(() => [
    "Signature des feuilles d'émargement",
    "Participation active aux activités proposées",
    "Information en cas d'absence ou de retard",
  ], []);

  const a5Items = useMemo(() => [
    "Respect des consignes de sécurité du site",
    "Respect des équipements mis à disposition",
    "Interdiction de tout comportement dangereux",
  ], []);

  const a6Items = useMemo(() => [
    "Disposer d'un matériel informatique fonctionnel adapté à la visioconférence (ordinateur avec webcam, micro, etc.)",
    "Se connecter aux horaires prévus",
    "Respecter les règles de communication en visioconférence",
    "Ne pas enregistrer ou diffuser les contenus sans autorisation",
  ], []);

  const a9Items = useMemo(() => [
    "Se présenter en état d'ébriété",
    "Introduire des substances illicites",
    "Diffuser les supports de formation sans autorisation",
  ], []);

  const a10Items = useMemo(() => [
    "Avertissement",
    "Exclusion temporaire ou définitive de la formation",
  ], []);

  const strings = useMemo(() => ({
    title: "Règlement intérieur",
    subtitle: "Applicable à l'ensemble des stagiaires pour toute la durée de la formation, qu'elle soit réalisée en présentiel sur site client ou à distance en visioconférence.",

    a1Title: "1. Objet et champ d'application",
    a1Text1: "Le présent règlement intérieur est établi conformément aux articles L.6352-3 à L.6352-5 et R.6352-1 à R.6352-15 du Code du travail.",
    a1Text2: "Il s'applique à l'ensemble des stagiaires pour toute la durée de la formation, qu'elle soit réalisée en présentiel sur site client ou à distance en visioconférence.",

    a2Title: "2. Informations remises aux stagiaires",

    a3Title: "3. Discipline générale",
    a3Intro: "Il est demandé aux stagiaires d'adopter un comportement respectueux envers les intervenants et les autres participants.",

    a4Title: "4. Assiduité et participation",
    a4Intro: "Les stagiaires doivent suivre la formation avec assiduité et ponctualité.",

    a5Title: "5. Règles spécifiques au présentiel",
    a5Intro: "Lorsque la formation se déroule dans les locaux d'un client, les stagiaires sont soumis au règlement intérieur du site d'accueil, notamment en matière de sécurité.",

    a6Title: "6. Règles spécifiques au distanciel",
    a6Intro: "Les formations à distance nécessitent un environnement adapté.",

    a7Title: "7. Hygiène et sécurité",
    a7Text1: "Chaque stagiaire doit veiller à sa sécurité et à celle des autres.",
    a7Text2: "En présentiel, les règles du site d'accueil s'appliquent. En distanciel, le stagiaire reste responsable de son environnement de travail.",

    a8Title: "8. Accessibilité et prise en compte du handicap",
    a8Text1: "EDUTECH FORMATIONS s'engage à prendre en compte les situations de handicap dans l'organisation et la réalisation de ses formations.",
    a8Text2: "Chaque situation est étudiée afin de proposer, dans la mesure du possible, des adaptations pédagogiques, techniques ou organisationnelles.",
    a8Text3: "Les formations pouvant se dérouler en présentiel sur site client ou à distance, les modalités d'adaptation dépendent du contexte et des contraintes associées.",
    a8Text4: "Lorsque certaines situations nécessitent des aménagements spécifiques ne pouvant être mis en œuvre, le stagiaire pourra être orienté vers des solutions adaptées.",
    a8Text5: "Un référent handicap est désigné au sein de l'organisme. Il peut être contacté pour étudier les besoins spécifiques et proposer des solutions adaptées.",
    referentName: "M. Olivier Gil",
    referentLabel: "Référent handicap",
    referentEmail: "contact@edutechformations.com",
    referentPhone: "06 33 24 77 64",

    a9Title: "9. Interdictions",

    a10Title: "10. Sanctions disciplinaires",
    a10Intro: "Tout manquement peut faire l'objet de sanctions proportionnées :",
    a10Outro: "Aucune sanction pécuniaire n'est autorisée.",

    a11Title: "11. Procédure disciplinaire",
    a11Text: "Aucune sanction ne peut être prise sans que le stagiaire ait été informé des faits reprochés et ait pu s'exprimer.",

    a12Title: "12. Entrée en vigueur",
    a12Text: "Le présent règlement est remis à chaque stagiaire avant le démarrage de la formation et entre en application dès son entrée en formation.",
  }), []);

  const arr = useMemo(() => Object.values(strings), [strings]);
  const allDynamic = useMemo(() => [
    ...arr,
    ...a2Items, ...a3Items, ...a4Items, ...a5Items, ...a6Items, ...a9Items, ...a10Items,
  ], [arr, a2Items, a3Items, a4Items, a5Items, a6Items, a9Items, a10Items]);

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
  const l0 = a2Items.length;
  const l1 = a3Items.length;
  const l2 = a4Items.length;
  const l3 = a5Items.length;
  const l4 = a6Items.length;
  const l5 = a9Items.length;

  const tList = (items: string[], offset: number) =>
    items.map((s, i) => translated[sl + offset + i] || s);

  const tA2  = tList(a2Items, 0);
  const tA3  = tList(a3Items, l0);
  const tA4  = tList(a4Items, l0+l1);
  const tA5  = tList(a5Items, l0+l1+l2);
  const tA6  = tList(a6Items, l0+l1+l2+l3);
  const tA9  = tList(a9Items, l0+l1+l2+l3+l4);
  const tA10 = tList(a10Items,l0+l1+l2+l3+l4+l5);

  const pClass = "text-gray-700 leading-relaxed text-justify hyphens-auto";
  const h2Class = "text-2xl font-bold mb-3 text-gray-900";
  const liClass = "flex items-start gap-2";
  const dot = "text-primary mt-1 flex-shrink-0";

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{tr.title}</h1>
          <p className="text-xl text-teal-100">{tr.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            {/* Art 1 */}
            <div>
              <h2 className={h2Class}>{tr.a1Title}</h2>
              <p className={`${pClass} mb-2`}>{tr.a1Text1}</p>
              <p className={pClass}>{tr.a1Text2}</p>
            </div>

            {/* Art 2 */}
            <div>
              <h2 className={h2Class}>{tr.a2Title}</h2>
              <p className="text-gray-700 mb-3">{tA2[0]}</p>
              <ul className="space-y-2 ml-4">
                {tA2.slice(1).map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Art 3 */}
            <div>
              <h2 className={h2Class}>{tr.a3Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a3Intro}</p>
              <ul className="space-y-2 ml-4">
                {tA3.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Art 4 */}
            <div>
              <h2 className={h2Class}>{tr.a4Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a4Intro}</p>
              <ul className="space-y-2 ml-4">
                {tA4.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Art 5 */}
            <div>
              <h2 className={h2Class}>{tr.a5Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a5Intro}</p>
              <ul className="space-y-2 ml-4">
                {tA5.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Art 6 */}
            <div>
              <h2 className={h2Class}>{tr.a6Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a6Intro}</p>
              <ul className="space-y-2 ml-4">
                {tA6.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Art 7 */}
            <div>
              <h2 className={h2Class}>{tr.a7Title}</h2>
              <p className={`${pClass} mb-2`}>{tr.a7Text1}</p>
              <p className={pClass}>{tr.a7Text2}</p>
            </div>

            {/* Art 8 */}
            <div>
              <h2 className={h2Class}>{tr.a8Title}</h2>
              <p className={`${pClass} mb-2`}>{tr.a8Text1}</p>
              <p className={`${pClass} mb-2`}>{tr.a8Text2}</p>
              <p className={`${pClass} mb-2`}>{tr.a8Text3}</p>
              <p className={`${pClass} mb-2`}>{tr.a8Text4}</p>
              <p className={`${pClass} mb-4`}>{tr.a8Text5}</p>
              <div className="bg-gray-50 rounded-xl p-5 space-y-1 text-gray-700">
                <p className="font-bold text-gray-900">{tr.referentName}</p>
                <p>{tr.referentLabel}</p>
                <p>
                  Email :{' '}
                  <a href="mailto:contact@edutechformations.com" className="text-primary hover:underline">
                    {tr.referentEmail}
                  </a>
                </p>
                <p>
                  Téléphone :{' '}
                  <a href="tel:+33633247764" className="text-primary hover:underline">
                    {tr.referentPhone}
                  </a>
                </p>
              </div>
            </div>

            {/* Art 9 */}
            <div>
              <h2 className={h2Class}>{tr.a9Title}</h2>
              <ul className="space-y-2 ml-4">
                {tA9.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Art 10 */}
            <div>
              <h2 className={h2Class}>{tr.a10Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a10Intro}</p>
              <ul className="space-y-2 ml-4 mb-3">
                {tA10.map((item, i) => (
                  <li key={i} className={liClass}>
                    <span className={dot}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className={pClass}>{tr.a10Outro}</p>
            </div>

            {/* Art 11 */}
            <div>
              <h2 className={h2Class}>{tr.a11Title}</h2>
              <p className={pClass}>{tr.a11Text}</p>
            </div>

            {/* Art 12 */}
            <div>
              <h2 className={h2Class}>{tr.a12Title}</h2>
              <p className={pClass}>{tr.a12Text}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
