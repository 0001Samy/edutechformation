'use client';

import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function CGVPage() {
  const strings = useMemo(
    () => ({
      title: 'Conditions Générales de Vente',
      subtitle:
        "Applicables à l'ensemble des formations proposées par Edutech Formations.",
      a1Title: 'Article 1 — Objet',
      a1Text:
        "Les présentes conditions générales de vente (CGV) s'appliquent à toutes les formations professionnelles proposées par Edutech Formations, SAS au capital de 1 000 €, SIREN 977 619 089, dont le siège social est situé au 52 rue Montesquieu, 92600 Asnières-sur-Seine.",
      a2Title: 'Article 2 — Inscription',
      a2Text:
        "Toute inscription à une formation est conditionnée par l'envoi d'un bulletin d'inscription dûment complété et signé, accompagné du règlement ou de l'accord de prise en charge par un organisme financeur (OPCO, France Travail). L'inscription est définitive à réception de ces éléments.",
      a3Title: 'Article 3 — Tarifs',
      a3Text:
        "Les tarifs des formations sont indiqués en euros hors taxes. TVA non applicable, article 261.4.4 a du Code Général des Impôts. Les prix comprennent les frais pédagogiques et les supports de formation. Les frais de transport, d'hébergement et de restauration restent à la charge du stagiaire ou de son employeur.",
      a4Title: 'Article 4 — Modalités de paiement',
      a4Text:
        "Le paiement est dû à réception de la facture, à 30 jours fin de mois sauf accord particulier. En cas de prise en charge par un OPCO, l'entreprise s'engage à fournir l'accord de financement avant le début de la formation. À défaut, le coût de la formation sera facturé directement au client.",
      a5Title: 'Article 5 — Annulation et report',
      a5SubByClient: 'Par le client',
      a5ClientIntro:
        "Toute annulation doit être signalée par écrit (email ou courrier). En cas d'annulation :",
      a5Item1:
        'Plus de 15 jours ouvrés avant le début de la formation : aucun frais',
      a5Item2: 'Entre 15 et 7 jours ouvrés : 50 % du coût de la formation est dû',
      a5Item3:
        'Moins de 7 jours ouvrés ou absence sans prévenir : 100 % du coût est dû',
      a5ReplaceText:
        "Le remplacement d'un participant par un autre est possible sans frais, sous réserve de nous en informer avant le début de la formation.",
      a5SubByEdutech: 'Par Edutech Formations',
      a5EdutechText:
        "Edutech Formations se réserve le droit d'annuler ou de reporter une session si le nombre minimum de participants n'est pas atteint ou en cas de force majeure. Dans ce cas, les frais d'inscription déjà versés sont intégralement remboursés ou reportés sur une session ultérieure, au choix du client.",
      a6Title: 'Article 6 — Déroulement de la formation',
      a6Text:
        "Edutech Formations s'engage à mettre en œuvre tous les moyens nécessaires au bon déroulement de la formation conformément au programme communiqué. Les formations sont dispensées en présentiel, aux dates, horaires et lieux indiqués dans la convocation.",
      a7Title: 'Article 7 — Attestation et certification',
      a7Text:
        "À l'issue de la formation, une attestation de fin de formation mentionnant les objectifs, la nature, la durée et les résultats de l'évaluation des acquis est remise à chaque stagiaire.",
      a8Title: 'Article 8 — Réclamations',
      a8TextPart1: "Toute réclamation doit être formulée par écrit à l'adresse",
      a8TextPart2:
        'Nous nous engageons à accuser réception sous 48 heures et à apporter une réponse sous 15 jours ouvrés.',
      a9Title: 'Article 9 — Droit applicable',
      a9Text:
        "Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, le tribunal compétent sera celui du ressort du siège social d'Edutech Formations.",
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
            {[
              [tr.a1Title, tr.a1Text],
              [tr.a2Title, tr.a2Text],
              [tr.a3Title, tr.a3Text],
              [tr.a4Title, tr.a4Text],
            ].map(([title, text], i) => (
              <div key={i}>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>{title}</h2>
                <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                  {text}
                </p>
              </div>
            ))}

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.a5Title}
              </h2>
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                {tr.a5SubByClient}
              </h3>
              <p className='text-gray-700 leading-relaxed mb-3'>{tr.a5ClientIntro}</p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3'>
                <li>{tr.a5Item1}</li>
                <li>{tr.a5Item2}</li>
                <li>{tr.a5Item3}</li>
              </ul>
              <p className='text-gray-700 leading-relaxed mb-6 text-justify hyphens-auto'>
                {tr.a5ReplaceText}
              </p>
              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                {tr.a5SubByEdutech}
              </h3>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a5EdutechText}
              </p>
            </div>

            {[
              [tr.a6Title, tr.a6Text],
              [tr.a7Title, tr.a7Text],
            ].map(([title, text], i) => (
              <div key={i}>
                <h2 className='text-2xl font-bold mb-4 text-gray-900'>{title}</h2>
                <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                  {text}
                </p>
              </div>
            ))}

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.a8Title}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a8TextPart1}{' '}
                <a
                  href='mailto:contact@edutechformations.com'
                  className='text-primary hover:underline'
                >
                  contact@edutechformations.com
                </a>
                . {tr.a8TextPart2}
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                {tr.a9Title}
              </h2>
              <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
                {tr.a9Text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
