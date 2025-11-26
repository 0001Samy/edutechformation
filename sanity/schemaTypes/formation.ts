import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'formation',
  title: 'Formations',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'prix',
      title: 'Prix',
      type: 'number',
    }),
    defineField({
      name: 'lien',
      title: 'Lien d\'inscription',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    })
  ],
})
