// Ajoute la formation "Certificat de formation à la médiation (200 heures)"
// Usage : node --env-file=.env.local scripts/add-certificat-mediation.mjs

import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('❌ SANITY_API_TOKEN manquant. Lance avec : node --env-file=.env.local scripts/add-certificat-mediation.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'b60x0124',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-10-01',
  token,
  useCdn: false,
});

const formation = {
  _id: 'formation-mediation-certificat-200h',
  _type: 'formation',
  pole: 'mediation',
  titre: 'Certificat de formation à la médiation (200 heures)',
  slug: {
    _type: 'slug',
    current: 'certificat-formation-mediation-200-heures',
  },
  description:
    "Parcours certifiant de 200 heures pour devenir médiateur professionnel. Savoir-être, savoir-dire et savoir-faire : une formation complète animée par des intervenants aux expertises complémentaires, dans un cadre certifié Qualiopi.",
  publicConcerne:
    "Salariés souhaitant développer des compétences en gestion des conflits — Directeurs des ressources humaines et professionnels RH — Cadres et dirigeants d'entreprise — Entrepreneurs soucieux de sécuriser leurs relations contractuelles — Professionnels du droit (avocats, juristes, collaborateurs) — Enseignants et acteurs du secteur éducatif — Étudiants en filières juridiques, économiques ou sociales — Toute personne intéressée par l'acquisition de compétences structurées en médiation ou en reconversion professionnelle.",
  prerequis: [
    "Aucun prérequis n'est nécessaire pour suivre cette formation",
  ],
  duree: 200,
  horaires: "De 9h30 à 12h30 et de 13h30 à 17h00 — 1 samedi sur 2",
  prixInter: 5700,
  participantsMin: 6,
  participantsMax: 26,
  modalitesAcces:
    "Formation en distanciel via visioconférence ZOOM. Inscription à réaliser 1 mois avant le démarrage de la formation. Prochaine session à partir du 26 septembre 2026. Personnes en situation de handicap : contactez-nous au 07.67.53.52.71 ou par email à contact@edutechformations.com pour échanger sur votre situation et vous proposer un parcours adapté.",
  objectifs: [
    "Identifier les différentes typologies de conflits et analyser leurs causes sous-jacentes (juridiques, relationnelles, émotionnelles)",
    "Évaluer les enjeux, les rapports de force et les intérêts en présence afin de déterminer l'opportunité du recours à la médiation",
    "Structurer et conduire un processus de médiation dans son intégralité, de l'ouverture à la conclusion",
    "Mobiliser les techniques de communication professionnelle : écoute active, reformulation, gestion des émotions et facilitation du dialogue",
    "Maîtriser le cadre juridique de la médiation et sécuriser juridiquement le processus et les accords conclus",
    "Accompagner les parties dans la co-construction d'accords durables et prévenir les risques de réitération du conflit",
    "Adopter une posture d'impartialité, de neutralité et d'indépendance conforme à l'éthique professionnelle du médiateur",
    "Intervenir dans des environnements variés : entreprise, contexte judiciaire, institutions, éducation, contextes interculturels",
  ],
  modules: [
    {
      _key: 'm0',
      _type: 'moduleDetaille',
      titre: 'Introduction — Cadre général et posture du médiateur (14 heures)',
      sousPoints: [
        "Présentation du parcours et des intervenants",
        "Qu'est-ce que la médiation ? Périmètre et enjeux",
        "La posture du médiateur : impartialité, neutralité, indépendance",
        "Les grandes étapes du processus de médiation",
      ],
    },
    {
      _key: 'm1',
      _type: 'moduleDetaille',
      titre: 'Le savoir-dire du médiateur (62 heures)',
      sousPoints: [
        "Concepts & notions fondamentaux de la médiation (2 modules)",
        "Origines & histoire de la médiation (2 modules)",
        "Distinction avec les autres modes amiables de règlement des litiges : conciliation, arbitrage, négociation (2 modules)",
        "La maïeutique & la médiation : faire émerger la solution des parties (2 modules)",
        "Identifier et clarifier les besoins et intérêts des parties (1 module)",
      ],
    },
    {
      _key: 'm2',
      _type: 'moduleDetaille',
      titre: 'Le savoir-être du médiateur (62 heures)',
      sousPoints: [
        "Les méthodes de communication en médiation (2 modules)",
        "La communication non violente — CNV (3 modules)",
        "Les aspects sociologiques et économiques de la médiation (2 modules)",
        "Les aspects psychologiques et pratiques de la posture du médiateur (2 modules)",
      ],
    },
    {
      _key: 'm3',
      _type: 'moduleDetaille',
      titre: 'Le savoir-faire du médiateur (62 heures)',
      sousPoints: [
        "Le droit et la réglementation en médiation (2 modules)",
        "Les écrits en médiation — conventions, protocoles d'accord (2 modules)",
        "La déontologie en médiation (2 modules)",
        "Mise en situation pratique de la médiation — jeux de rôle encadrés (3 modules)",
        "Examen final devant un jury de 3 formateurs",
      ],
    },
  ],
  modalitesEvaluation: [
    "QCM / Quiz à chaque fin de module",
    "Travaux pratiques et mises en situation",
    "Mémento : partage en médiation",
    "Échange avec le formateur par téléphone et mail",
    "Examen final composé d'un jury de 3 formateurs",
  ],
  suiviExecution: [
    "Feuilles de présence signées des participants et du formateur par demi-journée",
    "Attestation de fin de formation mentionnant les objectifs, la nature et la durée de l'action et les résultats de l'évaluation des acquis",
  ],
  appreciationResultats: [
    "Recueil individuel des attentes du stagiaire",
    "Questionnaire d'auto-évaluation des acquis en début et en fin de formation",
    "Remise d'une attestation de fin de formation",
    "Questionnaire d'évaluation de la satisfaction en fin de formation",
  ],
  moyensPedagogiques:
    "Évaluation des besoins et du profil du participant avant le début de la formation — Apport théorique et séquences pédagogiques regroupées en différents modules — Cas pratiques — Questionnaire et exercices — Retours d'expériences — Formation synchrone réalisée en distanciel par visioconférence via ZOOM — Assistance pédagogique et technique du lundi au vendredi de 9h à 18h (tél. 07.67.53.52.71 / mail : contact@edutechformations.com) — Évaluations d'une durée de 15 à 30 minutes à chaque fin de journée — Accompagnement individualisé",
  profilFormateur:
    "Mme Saïda BENOUARI — Référente pédagogique et formatrice. Les intervenants sont issus des milieux juridique, psychologique et institutionnel. Chaque formation est sous la responsabilité du directeur pédagogique de l'organisme de formation.",
};

async function run() {
  try {
    const result = await client.createOrReplace(formation);
    console.log(`✅ Formation créée/mise à jour → ${result._id}`);
  } catch (err) {
    console.error('❌ Erreur :', err.message);
    process.exit(1);
  }
}

run();
