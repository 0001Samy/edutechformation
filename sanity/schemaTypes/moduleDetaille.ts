import { defineField, defineType } from "sanity";

export default defineType({
  name: "moduleDetaille",
  title: "Module avec sous-points",
  type: "object",
  fields: [
    defineField({
      name: "titre",
      title: "Titre du module",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sousPoints",
      title: "Sous-points",
      type: "array",
      of: [{ type: "string" }],
      description: "Liste des sous-points du module (optionnel)",
    }),
  ],
  preview: {
    select: { title: "titre", sousPoints: "sousPoints" },
    prepare({ title, sousPoints }) {
      const count = Array.isArray(sousPoints) ? sousPoints.length : 0;
      return {
        title: title || "Module sans titre",
        subtitle: count
          ? `${count} sous-point${count > 1 ? "s" : ""}`
          : undefined,
      };
    },
  },
});
