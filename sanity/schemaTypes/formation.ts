import { defineField, defineType } from "sanity";

export default defineType({
  name: "formation",
  title: "Formations",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titre",
        maxLength: 96,
      },
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "duree",
      title: "Durée",
      type: "string",
      description: "Ex: 12 semaines",
    }),

    defineField({
      name: "etudiants",
      title: "Nombre d'étudiants",
      type: "number",
      description: "Ex: 1250",
    }),

    defineField({
      name: "note",
      title: "Note (sur 5)",
      type: "number",
      description: "Ex: 4.8",
      validation: (Rule) => Rule.min(0).max(5),
    }),

    defineField({
      name: "prix",
      title: "Prix",
      type: "number",
    }),

    defineField({
      name: "modules",
      title: "Modules du programme",
      type: "array",
      of: [{ type: "string" }],
      description: "Liste des modules de la formation",
    }),

    defineField({
      name: "objectifs",
      title: "Objectifs de la formation",
      type: "array",
      of: [{ type: "string" }],
      description: "Liste des objectifs pédagogiques",
    }),

    defineField({
      name: "lien",
      title: "Lien d'inscription",
      type: "url",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
