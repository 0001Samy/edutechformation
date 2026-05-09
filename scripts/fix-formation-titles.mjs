// Met à jour les titres de formations en sentence case
// (1ère lettre majuscule + reste minuscule, en préservant les acronymes)
//
// Usage : node --env-file=.env.local scripts/fix-formation-titles.mjs

import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('❌ SANITY_API_TOKEN manquant');
  process.exit(1);
}

const client = createClient({
  projectId: 'b60x0124',
  dataset: 'production',
  apiVersion: '2023-10-01',
  token,
  useCdn: false,
});

// Mapping des corrections : ancien titre → nouveau titre
// (acronymes, noms propres et chiffres romains préservés)
const updates = [
  {
    id: '3b10c5b6-a2a5-4bcb-a6b9-79833b755c82',
    titre: 'La loi Sapin II, mise en pratique en entreprise',
  },
  {
    id: '558ce67a-e936-42ff-b105-b74ca2ce9c3a',
    titre:
      'La responsabilité pénale et civile des soignants en EHPAD / établissement de santé',
  },
  {
    id: 'e6a0060f-5a0d-4c0b-83fc-480a3416e9c9',
    titre: 'Le harcèlement moral et sexuel en entreprise',
  },
  {
    id: '86a5c610-e1d9-4d43-8314-5464d298d056',
    titre: 'Le procès pénal et les intérêts civils',
  },
  {
    id: 'c987be91-4450-4e57-9728-42f7c0830eca',
    titre: 'Le secret professionnel',
  },
  {
    id: '5b89f932-1145-43d6-8923-2f0f53426792',
    titre:
      'Les droits et obligations des assureurs dans le cadre du procès pénal',
  },
  {
    id: 'formation-ia-reglementations',
    titre: "Les réglementations applicables à l'IA",
  },
  {
    id: 'formation-ia-entreprise',
    titre: "L'utilisation de l'IA en entreprise",
  },
];

async function run() {
  console.log(`📝 Mise à jour de ${updates.length} titres...\n`);
  for (const { id, titre } of updates) {
    try {
      await client.patch(id).set({ titre }).commit();
      console.log(`✅ ${titre}`);
    } catch (err) {
      console.error(`❌ ${id} :`, err.message);
    }
  }
  console.log('\n🎉 Terminé.');
}

run();
