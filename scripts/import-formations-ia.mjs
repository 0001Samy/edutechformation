// Script d'import des 3 formations IA dans Sanity
// Usage: node scripts/import-formations-ia.mjs

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'b60x0124',
  dataset: 'production',
  apiVersion: '2023-10-01',
  token: 'skXIcpTzethtRN9NuvzH4EMW0lTNGUMaEREwZV4CXOd1YNMRzlVtY4RFU2Hp74T4HNFeuzCaBxwnLv2hpwCyztMKKe82QE1kAUn6tTfwKltSLhbn1ArFSG3Sz7lJ1opOHZ1PBCHai1cFn1gneHax8RbSN2BvhFfuuBA9hI2ZbtBeu951Eh1Z',
  useCdn: false,
});

// ─── Helpers ──────────────────────────────────────────────────────────────────
function makeSlug(str) {
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function module(titre, sousPoints = []) {
  return { _type: 'moduleDetaille', titre, sousPoints };
}

// ─── Formation 1 — L'utilisation de l'IA en Entreprise ───────────────────────
const formationIA = {
  _type: 'formation',
  pole: 'ia',
  titre: "L'utilisation de l'IA en Entreprise",
  slug: { _type: 'slug', current: 'utilisation-ia-entreprise' },
  description:
    "Maîtrisez les fondamentaux de l'intelligence artificielle et intégrez ses outils dans vos pratiques professionnelles. Une formation 100 % pratique, sans prérequis technique.",
  publicConcerne:
    "Toute personne active en entreprise souhaitant comprendre et utiliser l'IA dans son activité professionnelle : managers, responsables de service, assistants, chargés de mission, dirigeants de PME/TPE. Aucun prérequis technique.",
  prerequis: ["Aucun prérequis — formation accessible à tous les niveaux"],
  duree: 14,
  horaires: 'De 9h00 à 17h30 (avec pause déjeuner)',
  objectifs: [
    "Comprendre les concepts fondamentaux de l'intelligence artificielle et ses applications professionnelles",
    "Identifier les opportunités d'utilisation de l'IA dans son activité ou son service",
    "Utiliser des outils d'IA accessibles (ChatGPT, assistants IA, IA d'analyse de données…)",
    'Produire des contenus, optimiser des processus et automatiser certaines tâches simples avec l\'IA',
    "Encadrer l'usage éthique, sécurisé et responsable de l'IA en entreprise",
  ],
  modules: [
    module("Jour 1 — Comprendre et commencer à utiliser l'IA", []),
    module("Introduction à l'IA (théorie accessible)", [
      "Qu'est-ce que l'IA ? Les différentes catégories",
      'IA générative, machine learning, deep learning : explications vulgarisées',
      "Les grands usages actuels en entreprise (marketing, administratif, data, RH, relation client…)",
      'Limites et risques : hallucinations, biais, confidentialité, RGPD',
    ]),
    module("Prise en main d'un assistant IA (ChatGPT & autres outils)", [
      'Interface, prompts (instructions), modes et exemples',
      'Rédiger ses premières instructions efficaces',
      'Bonnes pratiques : structure de prompt, contraintes, rôles, reformulation',
    ]),
    module('Cas pratiques de productivité — Ateliers guidés', [
      'Rédaction de contenus : email, synthèse, article, fiche produit, script vidéo',
      'Aide à la prise de décision : analyse de texte, analyse SWOT, brainstorming',
      'Organisation : planification, tableaux, automatisation légère',
    ]),
    module('IA et gestion documentaire', [
      "Résumer un document, transformer un texte, extraire des données",
      'Générer des modèles de documents (contrats, procédures, fiches…)',
    ]),
    module("Jour 2 — Applications métiers et automatisation", []),
    module('IA dans le marketing et la communication', [
      "Génération de visuels (ex : DALL·E, Midjourney)",
      'Création de contenus marketing cohérents',
      'Génération de plans éditoriaux, publications réseaux sociaux, publicités',
    ]),
    module("IA pour la gestion et l'administratif", [
      'Création d\'outils : checklists, tableaux financiers, fiches de poste',
      'Automatisation simple avec IA + outils no-code (Zapier, Make, Notion)',
      'Exemple : répondre automatiquement à une demande client type',
    ]),
    module("IA dans la prise de décision et la stratégie", [
      'Analyse avancée : segmentation clients, analyse de concurrence',
      'Interpréter des données (descriptives ou export Excel)',
      'Simulation de scénarios décisionnels',
    ]),
    module("Encadrement de l'usage de l'IA en entreprise", [
      'Règles d\'utilisation, confidentialité, sécurité, RGPD',
      "Définir une charte interne d'usage de l'IA",
      'Bonnes pratiques pour éviter erreurs, biais et dépendance',
    ]),
    module('Mise en situation finale (travail individuel ou en groupe)', [
      "Construction d'un mini-projet IA adapté à l'entreprise : automatisation, amélioration de processus, contenu marketing ou outil interne",
      'Présentation & feedback collectif',
    ]),
  ],
  contenuFormation:
    "La formation alterne théorie accessible et ateliers pratiques intensifs. Les participants travaillent sur leurs propres cas métier dès le premier jour. Chaque module est illustré par des démonstrations en direct d'outils IA réels (ChatGPT, Claude, DALL·E, Zapier, Make, Notion IA…). La deuxième journée est consacrée aux applications métiers concrètes et à la construction d'un mini-projet IA personnel.",
  moyensPedagogiques:
    "Démonstrations en direct sur outils réels — Ateliers pratiques individuels et en groupe — Exercices guidés progressifs — Supports numériques complets fournis — Mise en situation professionnelle sur cas réels",
  modalitesEvaluation: [
    'Exercices pratiques tout au long de la formation',
    'Mini-projet final : création d\'un outil ou process IA adapté à son activité',
    'Questionnaire de fin de formation (QCM + questions ouvertes)',
  ],
  suiviExecution: [
    "Feuille d'émargement numérique signée par demi-journée",
    'Attestation individuelle de fin de formation délivrée à chaque participant',
  ],
  appreciationResultats: [
    'Questionnaire de satisfaction à chaud en fin de session',
    "Enquête d'impact à froid (30 jours après la formation)",
  ],
  modalitesAcces:
    "Inscription possible jusqu'à 7 jours ouvrés avant le début de la session. Pour toute demande de financement (OPCO, France Travail), nous vous accompagnons dans le montage du dossier. Délai d'accès adapté aux personnes en situation de handicap sur demande.",
  profilFormateur:
    "Formateur expert en intelligence artificielle et transformation numérique, avec une expérience terrain en conseil et déploiement d'outils IA en entreprise.",
};

// ─── Formation 2 — L'IA, efficacité et productivité en entreprise ─────────────
const formationProductivite = {
  _type: 'formation',
  pole: 'ia',
  titre: "L'IA, efficacité et productivité en entreprise",
  slug: { _type: 'slug', current: 'ia-efficacite-productivite-entreprise' },
  description:
    "Gagnez du temps, automatisez vos tâches répétitives et boostez votre productivité grâce à l'IA. Une formation axée sur l'opérationnel immédiat, avec des outils utilisables dès le lendemain.",
  publicConcerne:
    "Collaborateurs, managers et dirigeants souhaitant gagner en efficacité au quotidien grâce à l'IA. Particulièrement adapté aux fonctions administratives, commerciales, RH, communication et gestion de projet. Aucun prérequis technique.",
  prerequis: ["Aucun prérequis — formation accessible à tous"],
  duree: 14,
  horaires: 'De 9h00 à 17h30 (avec pause déjeuner)',
  objectifs: [
    "Comprendre comment l'IA peut augmenter la productivité et optimiser les processus internes",
    "Utiliser des outils d'IA simples et accessibles pour gagner du temps au quotidien",
    'Automatiser certaines tâches répétitives (emails, documents, tableaux, organisation)',
    "Développer une méthode d'utilisation de l'IA fiable et sécurisée",
    "Identifier les outils et usages pertinents pour sa propre organisation",
  ],
  modules: [
    module("Jour 1 — Comprendre l'IA et adopter les bons réflexes", []),
    module("Introduction : l'IA au service de l'efficacité", [
      "Qu'est-ce que l'IA (version accessible et vulgarisée)",
      "Les familles d'IA : générative, analyse, automatisation",
      "Les bénéfices pour les entreprises : productivité, rapidité, cohérence, réduction des erreurs",
      'Limites et risques (hallucinations, confidentialité, RGPD)',
    ]),
    module("Augmenter sa productivité avec les outils d'IA", [
      'Écrire mieux et plus vite : emails, messages, rapports, synthèses',
      'Résumer des documents longs',
      'Transformer un contenu (ton, forme, format)',
      'Générer des idées et résoudre un problème',
      'Ateliers : réécriture / résumé / email pro — Amélioration de documents internes',
    ]),
    module("Utiliser l'IA pour automatiser des tâches simples", [
      'Générer des checklists, modèles, tableaux, procédures',
      'Créer des modèles réutilisables',
      "Automatiser des tâches bureautiques : tri d'informations, extraction de données, reformulation automatique",
      'Ateliers : construire un template IA pour une tâche répétitive — Automatiser un mini-process (ex : réponse client type)',
    ]),
    module('Méthode "Prompt Design" pour gagner en efficacité', [
      'Comment écrire une instruction efficace',
      'Méthode R.O.L.E.S (Rôle, Objectif, Limites, Exemples, Structure)',
      'Erreurs fréquentes et comment les éviter',
      'Ateliers : amélioration d\'un prompt médiocre — Création de prompts réutilisables',
    ]),
    module('Jour 2 — Automatisation, outils et application métier', []),
    module('IA et organisation professionnelle', [
      'Générer un planning automatique',
      'Organiser un projet et créer un plan d\'action',
      'Synthèse de réunions / comptes rendus améliorés',
      'Ateliers : élaboration d\'un plan projet / planning — CR de réunion instantané',
    ]),
    module('IA et gestion de données', [
      "Analyse d'un tableau ou d'un fichier",
      'Identifier tendances, erreurs, incohérences',
      'Générer des graphiques et rapports',
      'Nettoyage / formatage de données',
      'Ateliers : analyse d\'un tableau fourni — Création d\'un mini-reporting IA',
    ]),
    module('Automatisation avec IA + outils no-code', [
      'Mise en situation : IA + Notion, IA + Make/Zapier, IA + Google Workspace / Microsoft 365',
      'Exemples d\'automatisations : réponses automatisées, organisation de documents, mise à jour de tableaux de suivi',
    ]),
    module('Définir une stratégie IA pour gagner du temps', [
      'Identifier les tâches automatisables dans son entreprise',
      'Construire un plan de déploiement',
      'Bonnes pratiques de sécurité et confidentialité',
      'Rédiger une mini-charte IA de productivité',
    ]),
    module('Atelier final : construire son propre système IA', [
      'Chaque participant crée un outil IA (template, automatisation ou process) adapté à son activité',
      'Un plan d\'utilisation concret à mettre en place dès le lendemain',
    ]),
  ],
  contenuFormation:
    "Formation orientée efficacité immédiate : chaque notion théorique est immédiatement suivie d'un atelier pratique. Les participants repartent avec des prompts réutilisables, des automatisations opérationnelles et un plan d'action IA personnalisé pour leur activité. Accent particulier sur la méthode Prompt Design (R.O.L.E.S) et les outils no-code (Make, Zapier, Notion IA, Google Workspace).",
  moyensPedagogiques:
    "Alternance théorie / démonstrations / ateliers — Exercices individuels et travaux en groupe — Supports numériques fournis — Mise en situation réelle sur les cas des participants",
  modalitesEvaluation: [
    'Exercices pratiques à chaque module',
    'Mini-projet final : création d\'un outil IA opérationnel adapté à son activité',
    'Questionnaire de validation des acquis',
  ],
  suiviExecution: [
    "Feuille d'émargement numérique signée par demi-journée",
    'Attestation individuelle de fin de formation',
  ],
  appreciationResultats: [
    'Questionnaire de satisfaction à chaud en fin de session',
    "Enquête d'impact à froid (30 jours après la formation)",
  ],
  modalitesAcces:
    "Inscription possible jusqu'à 7 jours ouvrés avant le début de la session. Accompagnement dans le montage du dossier de financement (OPCO, France Travail, CPF). Adaptations possibles pour les personnes en situation de handicap.",
  profilFormateur:
    "Expert en IA appliquée et automatisation des processus métier, avec une expérience opérationnelle auprès de PME et grandes entreprises.",
};

// ─── Formation 3 — Les réglementations applicables à l'IA ────────────────────
const formationReglementations = {
  _type: 'formation',
  pole: 'ia',
  titre: "Les réglementations applicables à l'IA",
  slug: { _type: 'slug', current: 'reglementations-ia' },
  description:
    "Maîtrisez le cadre légal de l'IA en Europe : IA Act, RGPD, responsabilité juridique et gouvernance interne. Indispensable pour toute entreprise qui utilise ou déploie des systèmes d'IA.",
  publicConcerne:
    "Dirigeants, responsables juridiques, DPO, compliance officers, responsables informatiques et tout professionnel en charge de la gouvernance ou de la conformité liée à l'IA en entreprise. Aucun prérequis juridique ou technique nécessaire.",
  prerequis: ["Aucun prérequis — formation accessible à tous les niveaux"],
  duree: 14,
  horaires: 'De 9h00 à 17h30 (avec pause déjeuner)',
  objectifs: [
    "Comprendre le cadre légal entourant l'IA en Europe et en France",
    "Identifier les risques juridiques liés à l'usage de l'IA en entreprise",
    "Appliquer les obligations issues de l'IA Act (règlement européen)",
    'Maîtriser les règles de protection des données personnelles (RGPD) appliquées à l\'IA',
    "Mettre en place des pratiques conformes et sécurisées pour l'utilisation de l'IA",
    "Construire une démarche interne de gouvernance et de contrôle des systèmes IA",
  ],
  modules: [
    module("Jour 1 — Comprendre le cadre légal de l'IA", []),
    module("Introduction : pourquoi réglementer l'IA ?", [
      'Évolution rapide des technologies et enjeux sociétaux',
      'Risques : biais, sécurité, confidentialité, discrimination, transparence',
      'Développer une IA "de confiance"',
      'Présentation synthétique des cadres internationaux (UE, USA, OCDE, ONU)',
    ]),
    module("Le règlement européen : l'IA Act (2024–2025)", [
      'Objectifs et portée du règlement',
      "Définition officielle d'un système d'intelligence artificielle",
      "Classification des systèmes IA : risque inacceptable, haut risque, risque limité, risque minimal",
      'Interdictions (ex : manipulation cognitive, notation sociale…)',
    ]),
    module("Obligations des systèmes d'IA selon leur niveau de risque", [
      "Systèmes à haut risque : gestion des données d'entraînement, documentation technique, transparence, supervision humaine, gestion des risques, conformité et contrôles",
      "Systèmes à risque limité : exigences d'information",
      'Systèmes sans risque significatif : usages libres sous conditions',
      'Atelier : classifier différents outils d\'IA selon le niveau de risque de l\'IA Act',
    ]),
    module("Transparence et obligations d'information", [
      "Mention obligatoire lors de l'utilisation d'IA générative",
      'Traçabilité et explicabilité',
      'Encadrement des deepfakes et contenus générés',
      'Atelier : rédiger une clause de transparence IA',
    ]),
    module("Les exigences en matière de données", [
      'Lien entre IA Act et RGPD',
      'Qualité et gouvernance des données',
      'Minimisation des données, conservation et sécurité',
      "Gestion des données d'entraînement (datasets, biais, représentativité)",
      "Étude de cas : analyser une utilisation IA et identifier les données à risque",
    ]),
    module("Jour 2 — RGPD, sécurité, gouvernance et conformité IA", []),
    module("L'impact du RGPD sur l'utilisation de l'IA", [
      'Traitement de données personnelles par IA',
      'Base légale : consentement, intérêt légitime, contrat',
      "Analyse d'impact (AIPD / DPIA) obligatoire dans le cadre de l'IA",
      "Droits des personnes : accès, opposition, effacement, explication",
      'Risques de non-conformité et sanctions',
      "Atelier : identifier les traitements IA devant faire l'objet d'une AIPD",
    ]),
    module("Sécurité et protection contre les risques IA", [
      'Fuites de données (prompt leakage)',
      'Utilisation de modèles externes vs. solutions internes',
      'Mesures de cybersécurité adaptées',
      'Gestion des biais, erreurs et décisions non fiables',
    ]),
    module("Les responsabilités juridiques en cas de dommages", [
      "Responsabilité de l'utilisateur",
      'Responsabilité du fournisseur de solution IA',
      'Responsabilité du développeur',
      'Nouveaux textes européens sur la responsabilité civile liée à l\'IA',
    ]),
    module("Construire une gouvernance interne de l'IA", [
      "Politique interne d'usage de l'IA",
      "Charte éthique et règles d'utilisation",
      'Documentation et traçabilité',
      'Processus de veille réglementaire',
      'Mise en place d\'un comité de pilotage IA',
      'Atelier : élaborer une mini-charte IA interne pour une entreprise',
    ]),
    module("Étude de cas finale (travail en groupe)", [
      "Analyse d'un scénario réel d'utilisation de l'IA",
      'Identification des risques légaux',
      'Mesures de conformité à mettre en place',
      'Présentation et feedback collectif',
    ]),
  ],
  contenuFormation:
    "La formation couvre l'ensemble du cadre réglementaire applicable à l'IA en Europe, depuis l'IA Act jusqu'au RGPD. Elle adopte une approche progressive : compréhension du cadre, analyse des risques, mise en conformité et gouvernance interne. Les ateliers pratiques permettent aux participants d'appliquer immédiatement les notions théoriques sur des cas concrets issus de leur activité.",
  moyensPedagogiques:
    "Alternance théorie / cas pratiques — Études de cas réels — Exercices individuels et en groupe — Supports numériques fournis (slides, fiches synthèse, modèles de charte) — Mise en application immédiate",
  modalitesEvaluation: [
    'Quiz réglementaires par module',
    'Études de cas corrigées en groupe',
    'Mini-projet final : élaboration d\'une mini-charte IA interne',
    'Questionnaire de validation des acquis',
  ],
  suiviExecution: [
    "Feuille d'émargement numérique signée par demi-journée",
    'Attestation individuelle de fin de formation',
  ],
  appreciationResultats: [
    'Questionnaire de satisfaction à chaud en fin de session',
    "Enquête d'impact à froid (30 jours après la formation)",
  ],
  modalitesAcces:
    "Inscription possible jusqu'à 7 jours ouvrés avant le début de la session. Accompagnement dans le montage du dossier de financement (OPCO, France Travail). Adaptations disponibles pour les personnes en situation de handicap sur demande.",
  profilFormateur:
    "Juriste spécialisé en droit du numérique et protection des données, avec une expertise sur l'IA Act et la conformité RGPD appliquée aux entreprises. Formateur certifié.",
};

// ─── Import ───────────────────────────────────────────────────────────────────
async function importFormations() {
  const formations = [formationIA, formationProductivite, formationReglementations];

  for (const formation of formations) {
    // Ajouter _key aux modules
    formation.modules = formation.modules.map((m, i) => ({
      ...m,
      _key: `module-${i}-${Date.now()}`,
    }));

    try {
      const result = await client.create(formation);
      console.log(`✅ Créée : "${formation.titre}" → ID: ${result._id}`);
    } catch (err) {
      console.error(`❌ Erreur pour "${formation.titre}":`, err.message);
    }
  }

  console.log('\n🎉 Import terminé ! Vérifiez dans le Studio Sanity.');
}

importFormations();
