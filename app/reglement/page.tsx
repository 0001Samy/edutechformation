'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function ReglementPage() {
  const strings = useMemo(
    () => ({
      title: 'Règlement intérieur',
      subtitle:
        "Applicable à l'ensemble des stagiaires des formations dispensées par Edutech Formations.",
      a1Title: "Article 1 — Objet et champ d'application",
      a1Text:
        "Le présent règlement intérieur s'applique à tous les stagiaires inscrits à une formation dispensée par Edutech Formations, et ce pour la durée de la formation suivie. Chaque stagiaire est considéré comme ayant accepté les termes du présent règlement lorsqu'il suit une formation.",
      a2Title: 'Article 2 — Discipline générale',
      a2HoursTitle: 'Horaires',
      a2HoursText:
        "Les horaires de formation sont fixés par le programme de formation et communiqués aux stagiaires avant le début de la session. Les stagiaires sont tenus de respecter ces horaires. En cas d'absence ou de retard, le stagiaire doit en informer le formateur ou le responsable de la formation.",
      a2BehaviorTitle: 'Comportement',
      a2BehaviorIntro:
        'Il est demandé à chaque stagiaire de respecter les règles élémentaires de savoir-vivre et de savoir-être en collectivité. Sont notamment interdits :',
      a2Item1:
        'Les comportements portant atteinte au bon déroulement de la formation',
      a2Item2: 'Les actes de violence, de harcèlement ou de discrimination',
      a2Item3:
        "L'introduction de boissons alcoolisées ou de substances illicites dans les locaux de formation",
      a2Item4:
        "L'utilisation du téléphone portable pendant les sessions (sauf autorisation du formateur)",
      a3Title: 'Article 3 — Hygiène et sécurité',
      a3Text:
        "Les stagiaires sont tenus de respecter les consignes de sécurité en vigueur dans les locaux où se déroule la formation. En cas d'incendie ou d'accident, les stagiaires doivent se conformer aux consignes d'évacuation affichées dans les locaux. Il est interdit de fumer dans les locaux de formation.",
      a4Title: 'Article 4 — Sanctions disciplinaires',
      a4Intro:
        "Tout manquement du stagiaire à l'une des prescriptions du présent règlement pourra faire l'objet d'une sanction. Selon la gravité des faits, la sanction peut être :",
      a4Item1: 'Un avertissement écrit',
      a4Item2: "L'exclusion temporaire de la formation",
      a4Item3: "L'exclusion définitive de la formation",
      a4Outro:
        'Aucune sanction ne peut être prononcée sans que le stagiaire ait été informé des griefs retenus contre lui et ait pu présenter ses observations.',
      a5Title: 'Article 5 — Représentation des stagiaires',
      a5Text:
        "Pour les formations d'une durée supérieure à 500 heures, un délégué titulaire et un délégué suppléant sont élus par les stagiaires, conformément aux dispositions du Code du travail (articles R6352-9 à R6352-14).",
      a6Title: 'Article 6 — Propriété intellectuelle',
      a6Text:
        "Les supports de formation remis aux stagiaires sont la propriété d'Edutech Formations. Ils ne peuvent être reproduits, diffusés ou utilisés à des fins commerciales sans autorisation écrite préalable.",
      a7Title: 'Article 7 — Informatique et libertés',
      a7Text:
        "Les informations personnelles recueillies auprès des stagiaires font l'objet d'un traitement informatique conforme au RGPD. Pour plus d'informations, consultez notre",
      privacyLink: 'politique de confidentialité',
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
          <p className='text-xl text-teal-100'>{tr.subtitle}</p>
        </div>
      </section>

      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10'>
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>{tr.a1Title}</h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a1Text}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>{tr.a2Title}</h2>
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                {tr.a2HoursTitle}
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6 text-justify hyphens-auto'>
                {tr.a2HoursText}
              </p>
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                {tr.a2BehaviorTitle}
              </h3>
              <p className='text-gray-700 leading-relaxed mb-3'>
                {tr.a2BehaviorIntro}
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>{tr.a2Item1}</li>
                <li>{tr.a2Item2}</li>
                <li>{tr.a2Item3}</li>
                <li>{tr.a2Item4}</li>
              </ul>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>{tr.a3Title}</h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a3Text}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>{tr.a4Title}</h2>
              <p className='text-gray-700 leading-relaxed mb-3'>{tr.a4Intro}</p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>{tr.a4Item1}</li>
                <li>{tr.a4Item2}</li>
                <li>{tr.a4Item3}</li>
              </ul>
              <p className='text-gray-700 leading-relaxed mt-3 text-justify hyphens-auto'>
                {tr.a4Outro}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>{tr.a5Title}</h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a5Text}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>{tr.a6Title}</h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a6Text}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>{tr.a7Title}</h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a7Text}{' '}
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
