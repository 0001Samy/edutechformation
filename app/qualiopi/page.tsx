'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';
import { useMemo } from 'react';

export default function QualiopiPage() {
  const s1Items = useMemo(() => [
    "L'information claire et accessible des publics",
    "L'identification précise des objectifs de formation",
    "L'adaptation des dispositifs aux besoins des apprenants",
    "La qualité des moyens pédagogiques et techniques",
    "La qualification des formateurs",
    "L'inscription dans une démarche d'amélioration continue",
  ], []);

  const s2Items = useMemo(() => [
    "Nos processus sont structurés et conformes aux exigences réglementaires",
    "Nos formations sont conçues de manière rigoureuse et adaptée aux besoins",
    "Les compétences des formateurs sont évaluées et maintenues",
    "Les retours des participants sont pris en compte dans une logique d'amélioration continue",
  ], []);

  const s3Items = useMemo(() => [
    "L'évaluation des acquis des participants",
    "La mesure de la satisfaction",
    "Le suivi de la mise en application en situation professionnelle",
    "L'analyse des retours et des axes d'amélioration",
  ], []);

  const s4Items = useMemo(() => [
    "Les objectifs et contenus des formations",
    "Les modalités pédagogiques",
    "Les modalités d'évaluation",
    "Les indicateurs de résultats",
  ], []);

  const strings = useMemo(() => ({
    heroTitle: "La certification Qualiopi",
    intro1: "Edutech Formations est certifié Qualiopi au titre des actions de formation.",
    intro2: "La certification Qualiopi est une marque de qualité délivrée par des organismes certificateurs accrédités, sur la base du Référentiel National Qualité.",

    s1Title: "Une certification fondée sur des exigences qualité",
    s1Intro: "La certification Qualiopi repose sur plusieurs critères visant à garantir la qualité des actions de formation, notamment :",
    s1Closing: "Ces exigences encadrent l'ensemble de nos pratiques, de la conception des formations jusqu'à l'évaluation des résultats.",

    s2Title: "Ce que cela garantit pour nos clients",
    s2Intro: "La certification Qualiopi atteste que :",
    s2Note: "Elle constitue un gage de sérieux, de transparence et de qualité dans la réalisation de nos actions de formation.",

    s3Title: "Une démarche d'amélioration continue",
    s3Intro1: "Chez Edutech Formations, la qualité ne se limite pas à l'obtention de la certification.",
    s3Intro2: "Nous mettons en œuvre une démarche d'amélioration continue basée sur :",
    s3Closing: "Cette démarche nous permet d'adapter en permanence nos formations aux évolutions des besoins et des pratiques professionnelles.",

    s4Title: "Une information transparente",
    s4Intro: "Conformément aux exigences du référentiel Qualiopi, nous mettons à disposition des informations claires concernant :",
    s4Note: "Ces éléments sont accessibles sur nos pages de formation ou sur demande.",

    s5Title: "Certification et financements",
    s5Text: "La certification Qualiopi permet l'accès à des financements publics ou mutualisés, sous réserve des conditions définies par les organismes financeurs.",
    s5Link: "En savoir plus sur les financements",
  }), []);

  const arr = useMemo(() => Object.values(strings), [strings]);
  const allDynamic = useMemo(() => [
    ...arr,
    ...s1Items, ...s2Items, ...s3Items, ...s4Items,
  ], [arr, s1Items, s2Items, s3Items, s4Items]);

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
  const l0 = s1Items.length;
  const l1 = s2Items.length;
  const l2 = s3Items.length;

  const tList = (items: string[], offset: number) =>
    items.map((s, i) => translated[sl + offset + i] || s);

  const tS1 = tList(s1Items, 0);
  const tS2 = tList(s2Items, l0);
  const tS3 = tList(s3Items, l0 + l1);
  const tS4 = tList(s4Items, l0 + l1 + l2);

  const pClass = "text-gray-700 leading-relaxed text-justify hyphens-auto";
  const h2Class = "text-2xl font-bold mb-4 text-gray-900";
  const liClass = "flex items-start gap-3";
  const checkClass = "text-primary flex-shrink-0 mt-1";

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{tr.heroTitle}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

            {/* Intro + logo */}
            <div>
              <p className={`${pClass} mb-3`}>{tr.intro1}</p>
              <p className={pClass}>{tr.intro2}</p>
              <div className="flex justify-center mt-8">
                <Image
                  src="/Logo_Qualiopi.png"
                  alt="Certification Qualiopi"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className={h2Class}>{tr.s1Title}</h2>
              <p className="text-gray-700 mb-4">{tr.s1Intro}</p>
              <ul className="space-y-2 ml-2 mb-4">
                {tS1.map((item, i) => (
                  <li key={i} className={liClass}>
                    <CheckCircle className={checkClass} size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className={pClass}>{tr.s1Closing}</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className={h2Class}>{tr.s2Title}</h2>
              <p className="text-gray-700 mb-4">{tr.s2Intro}</p>
              <ul className="space-y-2 ml-2 mb-4">
                {tS2.map((item, i) => (
                  <li key={i} className={liClass}>
                    <CheckCircle className={checkClass} size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 italic">{tr.s2Note}</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className={h2Class}>{tr.s3Title}</h2>
              <p className={`${pClass} mb-3`}>{tr.s3Intro1}</p>
              <p className="text-gray-700 mb-4">{tr.s3Intro2}</p>
              <ul className="space-y-2 ml-2 mb-4">
                {tS3.map((item, i) => (
                  <li key={i} className={liClass}>
                    <CheckCircle className={checkClass} size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className={pClass}>{tr.s3Closing}</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className={h2Class}>{tr.s4Title}</h2>
              <p className="text-gray-700 mb-4">{tr.s4Intro}</p>
              <ul className="space-y-2 ml-2 mb-4">
                {tS4.map((item, i) => (
                  <li key={i} className={liClass}>
                    <CheckCircle className={checkClass} size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 italic">{tr.s4Note}</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className={h2Class}>{tr.s5Title}</h2>
              <p className={`${pClass} mb-6`}>{tr.s5Text}</p>
              <Link
                href="/financement"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                {tr.s5Link}
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
