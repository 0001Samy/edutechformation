import { defineField, defineType } from "sanity";

export default defineType({
  name: "formation",
  title: "Formations",
  type: "document",
  groups: [
    { name: "general", title: "Informations générales", default: true },
    { name: "modalites", title: "Modalités pratiques" },
    { name: "pedagogie", title: "Contenu pédagogique" },
    { name: "evaluation", title: "Évaluation & suivi" },
    { name: "encadrement", title: "Encadrement" },
    { name: "autre", title: "Autre" },
  ],
  fields: [
    // ━━━ INFORMATIONS GÉNÉRALES ━━━
    defineField({
      name: "titre",
      title: "Intitulé de la formation",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "general",
      options: {
        source: "titre",
        maxLength: 96,
      },
    }),

    defineField({
      name: "pole",
      title: "Pôle",
      type: "string",
      group: "general",
      description: "Pôle thématique de la formation",
      options: {
        list: [
          { title: "Droit", value: "droit" },
          { title: "Médiation", value: "mediation" },
          { title: "IA", value: "ia" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "general",
      description: "Description courte affichée sur la carte de la formation",
    }),

    defineField({
      name: "publicConcerne",
      title: "Public concerné",
      type: "text",
      group: "general",
      description: "Décrivez le public visé par cette formation",
    }),

    defineField({
      name: "prerequis",
      title: "Prérequis",
      type: "array",
      of: [{ type: "string" }],
      group: "general",
      description: "Liste des prérequis pour cette formation (saisie libre)",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "general",
      options: { hotspot: true },
    }),

    // ━━━ MODALITÉS PRATIQUES ━━━
    defineField({
      name: "modalitesAcces",
      title: "Modalités et délais d'accès",
      type: "text",
      group: "modalites",
      description: "Décrivez les modalités et délais d'accès à la formation",
    }),

    defineField({
      name: "duree",
      title: "Durée (en heures)",
      type: "number",
      group: "modalites",
      description: "Nombre d'heures de la formation",
      validation: (Rule) => Rule.min(1).positive(),
    }),

    defineField({
      name: "horaires",
      title: "Horaires",
      type: "string",
      group: "modalites",
      description: 'Ex: "De 9h00 à 12h30 et de 13h30 à 17h00"',
    }),

    defineField({
      name: "prixInter",
      title: "Tarif INTER / individuel (exonéré de TVA)",
      type: "number",
      group: "modalites",
      description:
        "Montant en euros pour une formation inter-entreprises ou individuelle — mis en avant",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "prixIntra",
      title: "Tarif INTRA (exonéré de TVA)",
      type: "number",
      group: "modalites",
      description:
        "Montant en euros pour une formation intra-entreprise",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "prix",
      title: "Tarif (legacy — utiliser INTER/INTRA)",
      type: "number",
      group: "modalites",
      description:
        "Champ historique. Utilisez désormais « Tarif INTER / individuel » et « Tarif INTRA ».",
      hidden: ({ document }) =>
        document?.prixIntra != null || document?.prixInter != null,
    }),

    defineField({
      name: "participantsMin",
      title: "Nombre minimum de participants",
      type: "number",
      group: "modalites",
      description: "Nombre minimum de participants requis",
      validation: (Rule) => Rule.min(1).positive(),
    }),

    defineField({
      name: "participantsMax",
      title: "Nombre maximum de participants",
      type: "number",
      group: "modalites",
      description: "Nombre maximum de participants autorisés",
      validation: (Rule) => Rule.min(1).positive(),
    }),

    // ━━━ CONTENU PÉDAGOGIQUE ━━━
    defineField({
      name: "objectifs",
      title: "Objectifs de la formation et compétences visées",
      type: "array",
      of: [{ type: "string" }],
      group: "pedagogie",
      description: "Liste des objectifs pédagogiques et compétences visées",
    }),

    defineField({
      name: "modules",
      title: "Modules du programme",
      type: "array",
      group: "pedagogie",
      description:
        "Liste des modules. Chaque module peut avoir des sous-points optionnels.",
      of: [{ type: "moduleDetaille" }],
    }),

    // ━━━ ÉVALUATION & SUIVI ━━━
    defineField({
      name: "modalitesEvaluation",
      title: "Modalités d'évaluation",
      type: "array",
      of: [{ type: "string" }],
      group: "evaluation",
      description: "Liste des modalités d'évaluation (saisie libre)",
    }),

    defineField({
      name: "suiviExecution",
      title: "Suivi de l'exécution",
      type: "array",
      of: [{ type: "string" }],
      group: "evaluation",
      description: "Liste des éléments de suivi de l'exécution (saisie libre)",
    }),

    defineField({
      name: "appreciationResultats",
      title: "Appréciation des résultats",
      type: "array",
      of: [{ type: "string" }],
      group: "evaluation",
      description: "Liste des éléments d'appréciation des résultats (saisie libre)",
    }),

    // ━━━ ENCADREMENT ━━━
    defineField({
      name: "moyensPedagogiques",
      title: "Moyens pédagogiques et techniques d'encadrement des formations",
      type: "text",
      group: "encadrement",
      description: "Décrivez les moyens pédagogiques et techniques mis en œuvre",
    }),

    defineField({
      name: "profilFormateur",
      title: "Profil du formateur",
      type: "text",
      group: "encadrement",
      description: "Décrivez le profil et les qualifications du formateur",
    }),

    // ━━━ AUTRE ━━━
    defineField({
      name: "lien",
      title: "Lien d'inscription",
      type: "url",
      group: "autre",
    }),

    defineField({
      name: "etudiants",
      title: "Nombre d'étudiants (affichage)",
      type: "number",
      group: "autre",
      description: "Nombre d'étudiants ayant suivi la formation (pour affichage)",
    }),

    defineField({
      name: "note",
      title: "Note (sur 5)",
      type: "number",
      group: "autre",
      description: "Ex: 4.8",
      validation: (Rule) => Rule.min(0).max(5),
    }),

    defineField({
      name: "programmePdf",
      title: "Programme PDF",
      type: "file",
      group: "autre",
      description: "Fichier PDF du programme de la formation (téléchargeable par les visiteurs)",
      options: {
        accept: ".pdf,application/pdf",
      },
    }),
  ],

  preview: {
    select: {
      title: "titre",
      subtitle: "description",
      media: "image",
    },
  },
});
