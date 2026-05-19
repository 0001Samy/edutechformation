'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function ReglementPage() {
  const strings = useMemo(
    () => ({
      title: "Règlement intérieur",
      subtitle: "Applicable à l'ensemble des stagiaires pour toute la durée de la formation, qu'elle soit réalisée en présentiel sur site client ou à distance en visioconférence.",
      a1Title: "Article 1 — Objet et champ d'application",
      a1Text: "Le présent règlement intérieur est établi conformément aux articles L.6352-3 à L.6352-5 et R.6352-1 à R.6352-15 du Code du travail. Il s'applique à l'ensemble des stagiaires pour toute la durée de la formation, qu'elle soit réalisée en présentiel sur site client ou à distance en visioconférence.",
      a2Title: "Article 2 — Informations remises aux stagiaires",
      a2Intro: "Avant leur entrée en formation, EDUTECH FORMATIONS transmettra à ses stagiaires :",
      a2Item1: "Le programme et les objectifs de la formation",
      a2Item2: "Les horaires et modalités d'organisation",
      a2Item3: "Les modalités d'évaluation",
      a2Item4: "Les coordonnées du référent pédagogique",
      a2Item5: "Le présent règlement intérieur",
      a3Title: "Article 3 — Discipline générale",
      a3Text: "Il est demandé aux stagiaires d'adopter un comportement respectueux envers les intervenants et les autres participants : respecter les consignes du formateur, ne pas perturber le bon déroulement de la formation, respecter les supports pédagogiques et les droits de propriété intellectuelle.",
      a4Title: "Article 4 — Assiduité et participation",
      a4Intro: "Les stagiaires doivent suivre la formation avec assiduité et ponctualité :",
      a4Item1: "Signature des feuilles d'émargement",
      a4Item2: "Participation active aux activités proposées",
      a4Item3: "Information en cas d'absence ou de retard",
      a5Title: "Article 5 — Règles spécifiques au présentiel",
      a5Text: "Lorsque la formation se déroule dans les locaux d'un client, les stagiaires sont soumis au règlement intérieur du site d'accueil, notamment en matière de sécurité. Les consignes de sécurité du site doivent être respectées. Tout comportement dangereux est interdit.",
      a6Title: "Article 6 — Règles spécifiques au distanciel",
      a6Intro: "Les formations à distance nécessitent :",
      a6Item1: "Disposer d'un matériel informatique fonctionnel adapté à la visioconférence (ordinateur avec webcam, micro, etc.)",
      a6Item2: "Se connecter aux horaires prévus",
      a6Item3: "Respecter les règles de communication en visioconférence",
      a6Item4: "Ne pas enregistrer ou diffuser les contenus sans autorisation",
      a7Title: "Article 7 — Hygiène et sécurité",
      a7Text: "Chaque stagiaire doit veiller à sa sécurité et à celle des autres. En présentiel, les règles du site d'accueil s'appliquent. En distanciel, le stagiaire reste responsable de son environnement de travail.",
      a8Title: "Article 8 — Accessibilité et prise en compte du handicap",
      a8Text: "EDUTECH FORMATIONS s'engage à prendre en compte les situations de handicap dans l'organisation et la réalisation de ses formations. Chaque situation est étudiée afin de proposer, dans la mesure du possible, des adaptations pédagogiques, techniques ou organisationnelles.",
      referentName: "M. Olivier Gil",
      referentLabel: "Référent handicap",
      referentEmail: "contact@edutechformations.com",
      a9Title: "Article 9 — Sanctions disciplinaires",
      a9Intro: "Tout manquement au présent règlement pourra faire l'objet d'une sanction. Selon la gravité des faits :",
      a9Item1: "Un avertissement écrit",
      a9Item2: "L'exclusion temporaire de la formation",
      a9Item3: "L'exclusion définitive de la formation",
      a9Outro: "Aucune sanction ne peut être prononcée sans que le stagiaire ait pu présenter ses observations.",
      a10Title: "Article 10 — Propriété intellectuelle",
      a10Text: "Les supports de formation remis aux stagiaires sont la propriété d'EDUTECH FORMATIONS. Ils ne peuvent être reproduits, diffusés ou utilisés à des fins commerciales sans autorisation écrite préalable.",
      a11Title: "Article 11 — Informatique et libertés",
      a11Text: "Les informations personnelles recueillies font l'objet d'un traitement informatique conforme au RGPD. Pour plus d'informations, consultez notre",
      privacyLink: "politique de confidentialité",
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
          <p className="text-xl text-teal-100">{tr.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a1Title}</h2>
              <p className={pClass}>{tr.a1Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a2Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a2Intro}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{tr.a2Item1}</li>
                <li>{tr.a2Item2}</li>
                <li>{tr.a2Item3}</li>
                <li>{tr.a2Item4}</li>
                <li>{tr.a2Item5}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a3Title}</h2>
              <p className={pClass}>{tr.a3Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a4Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a4Intro}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{tr.a4Item1}</li>
                <li>{tr.a4Item2}</li>
                <li>{tr.a4Item3}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a5Title}</h2>
              <p className={pClass}>{tr.a5Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a6Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a6Intro}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>{tr.a6Item1}</li>
                <li>{tr.a6Item2}</li>
                <li>{tr.a6Item3}</li>
                <li>{tr.a6Item4}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a7Title}</h2>
              <p className={pClass}>{tr.a7Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a8Title}</h2>
              <p className={`${pClass} mb-4`}>{tr.a8Text}</p>
              <div className="bg-gray-50 rounded-xl p-5 space-y-1 text-gray-700">
                <p className="font-bold text-gray-900">{tr.referentName}</p>
                <p>{tr.referentLabel}</p>
                <p>
                  Email :{' '}
                  <a href="mailto:contact@edutechformations.com" className="text-primary hover:underline">
                    {tr.referentEmail}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a9Title}</h2>
              <p className="text-gray-700 mb-3">{tr.a9Intro}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3">
                <li>{tr.a9Item1}</li>
                <li>{tr.a9Item2}</li>
                <li>{tr.a9Item3}</li>
              </ul>
              <p className={pClass}>{tr.a9Outro}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a10Title}</h2>
              <p className={pClass}>{tr.a10Text}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{tr.a11Title}</h2>
              <p className="text-gray-700 leading-relaxed text-justify hyphens-auto">
                {tr.a11Text}{' '}
                <Link href="/confidentialite" className="text-primary font-semibold hover:underline">
                  {tr.privacyLink}
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
