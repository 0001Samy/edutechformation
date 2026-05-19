'use client';

import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function CGVPage() {
  const strings = useMemo(
    () => ({
      title: "Conditions Générales de Vente",
      subtitle: "Conditions Générales de Vente de Prestations de Services – applicables à compter du 01/04/2026",

      a1Title: "1 — Identification du prestataire",
      a1Text: "La SASU EDUTECH FORMATIONS, représentée par M. Olivier GIL, SIRET n° 977 619 089 00021, dont le siège social est sis 52 Rue Montesquieu – 92600 ASNIÈRES-SUR-SEINE, ci-après désignée EDUTECH FORMATIONS. Déclaration d'activité enregistrée sous le numéro 11 94 12031 94 auprès du préfet de région d'Île-de-France. Contact : M. Olivier GIL – Tél : 06 33 24 77 64 – Mail : contact@edutechformation.com – Horaires : du lundi au vendredi de 9h à 18h.",

      a2Title: "2 — Généralités",
      a2Text: "Les présentes CGV ont pour objet de définir les droits et obligations d'EDUTECH FORMATIONS et de son client dans le cadre de toute commande de prestations de service ou de formation. Toute conclusion de contrat implique l'adhésion et l'acceptation expresse des présentes CGV, qui prévalent sur tous autres documents du client. EDUTECH FORMATIONS se réserve le droit de modifier ou de rectifier les présentes CGV à tout moment. Les nouvelles CGV s'appliquent à tout nouveau contrat conclu avec le client.",

      a3Title: "3 — Informations précontractuelles et commande",
      a3Sub1: "3.1 Informations précontractuelles",
      a3Text1: "Préalablement à la conclusion du contrat, ces CGV sont communiquées au client. Toute commande fera l'objet d'un devis précisant la description de la prestation, son contenu, ses modalités, son prix et les livrables attendus.",
      a3Sub2: "3.2 Formation du contrat",
      a3Text2: "Les obligations des parties naissent à compter de la signature et du retour du devis émis par EDUTECH FORMATIONS. Le devis est valable un (1) mois à compter de sa date d'émission.",
      a3Sub3: "3.3 Prérequis",
      a3Text3: "Il appartient au client de s'assurer que tout participant inscrit satisfait les prérequis spécifiés pour la formation. EDUTECH FORMATIONS ne peut être tenu responsable d'une inadéquation entre la formation et le niveau initial du participant.",
      a3Sub4: "3.4 Convention et contrat de formation",
      a3Text4: "Conformément aux articles L6353-1 et L6353-2 du Code du travail, toute commande de formation donnera lieu à convention de formation ou contrat de formation. Les devis et factures peuvent faire office de convention simplifiée. Une convention standard peut être adressée sur demande.",

      a4Title: "4 — Obligations générales des parties",
      a4Sub1: "4.1 Obligations d'EDUTECH FORMATIONS",
      a4Text1: "EDUTECH FORMATIONS s'engage à mettre tout son savoir-faire au profit du client, à conseiller, à accomplir les prestations avec zèle et diligence, à respecter la confidentialité et à rendre compte des diligences effectuées.",
      a4Sub2: "4.2 Obligations du client",
      a4Text2: "Le client s'engage à fournir tous documents et informations nécessaires, à collaborer activement, à régler à échéance les sommes dues, et à s'abstenir de toute ingérence dans la conduite des prestations.",

      a5Title: "5 — Conditions d'exécution des prestations",
      a5Text: "Le délai d'exécution dépend de la nature de la prestation. EDUTECH FORMATIONS ne saurait être tenu responsable en cas de retard occasionné par le client suite à une transmission insuffisante ou tardive d'informations ou au non-respect de son obligation de paiement.",

      a6Title: "6 — Délai de rétractation",
      a6Sub1: "6.1 Contrats consommateurs",
      a6Text1: "En cas de contrat hors établissement ou à distance, le consommateur dispose d'un délai de 14 jours pour se rétracter (art. L.221-18 du Code de la Consommation). Pour les formations financées à titre individuel, le délai est de 10 jours (art. L6453-5 du Code du travail).",
      a6Sub2: "6.2 Contrats professionnels",
      a6Text2: "Le droit de rétractation de 14 jours s'applique aux professionnels si : le contrat est conclu hors établissement, l'objet ne relève pas de leur activité principale, et l'entreprise compte 5 salariés ou moins.",

      a7Title: "7 — Prix et modalités de règlement",
      a7Sub1: "7.1 Le prix",
      a7Text1: "La rémunération est déterminée contractuellement sur la base d'un devis. Les prix sont établis hors taxes (TVA non applicable, art. 293 B du CGI). En cas de prise en charge par un OPCO, le client doit en faire la demande avant le début de la formation.",
      a7Sub2: "7.2 Le règlement",
      a7Text2: "Les factures sont payables sans délai à échéance, par virement.",
      a7Sub3: "7.3 Formations financées à titre individuel",
      a7Text3: "Un acompte de 30 % est requis pour valider la prestation (art. L6353-6 du Code du travail). Aucun encaissement avant l'expiration d'un délai de 10 jours à compter de la signature du contrat.",
      a7Sub4: "7.4 Retards de paiement",
      a7Text4: "Tout retard entraîne : le droit de suspendre les prestations, des pénalités de retard au taux légal × 3, une indemnité forfaitaire de 40 €, et l'application de la clause pénale de l'article 7.5.",
      a7Sub5: "7.5 Clause pénale",
      a7Text5: "En cas de manquement persistant après mise en demeure restée sans effet cinq jours, une indemnité de 15 % des sommes dues sera exigible, outre les intérêts légaux et frais judiciaires.",

      a8Title: "8 — Formation : règlement intérieur, convocation, report, annulation",
      a8Text: "Toute inscription implique le respect du règlement intérieur. EDUTECH FORMATIONS adresse une convocation par email. Le remplacement d'un participant est possible sans frais avant la formation. Toute annulation moins de 14 jours avant la formation donne lieu à la facturation de la totalité. EDUTECH FORMATIONS peut annuler une session en cas de manque de participants, avec remboursement intégral.",

      a9Title: "9 — Propriété intellectuelle",
      a9Text: "Tous les éléments remis lors des formations (supports, outils, contenus) restent la propriété intellectuelle exclusive d'EDUTECH FORMATIONS. Toute reproduction ou diffusion sans autorisation est interdite.",

      a10Title: "10 — Résiliation de l'engagement",
      a10Text: "EDUTECH FORMATIONS peut résilier le contrat 15 jours après une mise en demeure restée infructueuse en cas d'inobservation des CGV, de non-paiement ou de désaccord majeur. La résiliation à l'initiative du client sans manquement donne lieu à facturation des sommes dues et à la clause pénale.",

      a11Title: "11 — Force majeure",
      a11Text: "Les parties ne peuvent être tenues responsables en cas de force majeure (grève, incendie, inondation, épidémie, etc.). La partie affectée doit en notifier l'autre sans délai. L'exécution des obligations peut être suspendue.",

      a12Title: "12 — Responsabilités",
      a12Text: "L'obligation d'EDUTECH FORMATIONS est une obligation de moyen. Les informations données ne constituent pas des conseils juridiques. La responsabilité d'EDUTECH FORMATIONS est limitée aux obligations contractuelles et, en cas de faute prouvée, au montant de sa rémunération prévue au contrat.",

      a13Title: "13 — Protection des données à caractère personnel",
      a13Text: "Les données personnelles collectées (nom, email, coordonnées, CV, etc.) sont utilisées pour l'organisation et l'exécution des prestations, la communication et l'établissement de documents contractuels. Elles sont conservées pendant 5 ans maximum. Conformément au RGPD, le client dispose de droits d'accès, rectification, portabilité et effacement en contactant : contact@edutechformation.com.",

      a14Title: "14 — Intégrité du contrat",
      a14Text: "Les présentes CGV et le devis accepté forment l'intégralité des relations contractuelles entre les parties.",

      a15Title: "15 — Litige, juridiction compétente, médiation",
      a15Sub1: "15.1 Litige – Loi applicable",
      a15Text1: "Le présent contrat est soumis au droit français. En cas de litige avec des professionnels, les juridictions d'ASNIÈRES-SUR-SEINE seront compétentes.",
      a15Sub2: "15.2 Médiation",
      a15Text2: "Conformément à l'article L612-1 du Code de la Consommation, le client peut recourir au service de médiation ANM Conso : anm-conso.com ou ANM Conso – 62, rue Tiquetonne – 75002 Paris.",

      annexeTitle: "Annexe 1 — Modèle de formulaire de rétractation",
      annexeText: "À l'attention d'EDUTECH FORMATIONS – 52 Rue Montesquieu – 92600 ASNIÈRES-SUR-SEINE. Indiquez les prestations concernées, la date de commande, votre nom, adresse et signature, puis renvoyez par lettre recommandée avec accusé de réception. Pour tout renseignement : contact@edutechformation.com – 06 33 24 77 64.",
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

  const sectionClass = 'mb-8';
  const h2Class = 'text-2xl font-bold mb-3 text-gray-900';
  const h3Class = 'text-lg font-semibold mb-2 text-gray-800';
  const pClass = 'text-gray-700 leading-relaxed text-justify hyphens-auto';

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
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a1Title}</h2>
              <p className={pClass}>{tr.a1Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a2Title}</h2>
              <p className={pClass}>{tr.a2Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a3Title}</h2>
              <h3 className={h3Class}>{tr.a3Sub1}</h3>
              <p className={`${pClass} mb-4`}>{tr.a3Text1}</p>
              <h3 className={h3Class}>{tr.a3Sub2}</h3>
              <p className={`${pClass} mb-4`}>{tr.a3Text2}</p>
              <h3 className={h3Class}>{tr.a3Sub3}</h3>
              <p className={`${pClass} mb-4`}>{tr.a3Text3}</p>
              <h3 className={h3Class}>{tr.a3Sub4}</h3>
              <p className={pClass}>{tr.a3Text4}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a4Title}</h2>
              <h3 className={h3Class}>{tr.a4Sub1}</h3>
              <p className={`${pClass} mb-4`}>{tr.a4Text1}</p>
              <h3 className={h3Class}>{tr.a4Sub2}</h3>
              <p className={pClass}>{tr.a4Text2}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a5Title}</h2>
              <p className={pClass}>{tr.a5Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a6Title}</h2>
              <h3 className={h3Class}>{tr.a6Sub1}</h3>
              <p className={`${pClass} mb-4`}>{tr.a6Text1}</p>
              <h3 className={h3Class}>{tr.a6Sub2}</h3>
              <p className={pClass}>{tr.a6Text2}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a7Title}</h2>
              <h3 className={h3Class}>{tr.a7Sub1}</h3>
              <p className={`${pClass} mb-4`}>{tr.a7Text1}</p>
              <h3 className={h3Class}>{tr.a7Sub2}</h3>
              <p className={`${pClass} mb-4`}>{tr.a7Text2}</p>
              <h3 className={h3Class}>{tr.a7Sub3}</h3>
              <p className={`${pClass} mb-4`}>{tr.a7Text3}</p>
              <h3 className={h3Class}>{tr.a7Sub4}</h3>
              <p className={`${pClass} mb-4`}>{tr.a7Text4}</p>
              <h3 className={h3Class}>{tr.a7Sub5}</h3>
              <p className={pClass}>{tr.a7Text5}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a8Title}</h2>
              <p className={pClass}>{tr.a8Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a9Title}</h2>
              <p className={pClass}>{tr.a9Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a10Title}</h2>
              <p className={pClass}>{tr.a10Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a11Title}</h2>
              <p className={pClass}>{tr.a11Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a12Title}</h2>
              <p className={pClass}>{tr.a12Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a13Title}</h2>
              <p className={pClass}>{tr.a13Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a14Title}</h2>
              <p className={pClass}>{tr.a14Text}</p>
            </div>

            <div className={sectionClass}>
              <h2 className={h2Class}>{tr.a15Title}</h2>
              <h3 className={h3Class}>{tr.a15Sub1}</h3>
              <p className={`${pClass} mb-4`}>{tr.a15Text1}</p>
              <h3 className={h3Class}>{tr.a15Sub2}</h3>
              <p className={pClass}>{tr.a15Text2}</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className={h2Class}>{tr.annexeTitle}</h2>
              <p className={pClass}>{tr.annexeText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
