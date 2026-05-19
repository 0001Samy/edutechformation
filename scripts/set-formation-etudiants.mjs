// Met à jour le champ `etudiants` (nombre de personnes formées) sur chaque
// formation, en se basant sur le titre. Idempotent : on peut le relancer.
//
// Usage : node --env-file=.env.local scripts/set-formation-etudiants.mjs

import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('❌ SANITY_API_TOKEN manquant dans .env.local');
  process.exit(1);
}

const client = createClient({
  projectId: 'b60x0124',
  dataset: 'production',
  apiVersion: '2023-10-01',
  token,
  useCdn: false,
});

// Mapping titre exact → nombre de personnes formées (source : message WhatsApp)
const updates = [
  { titre: 'La loi Sapin II, mise en pratique en entreprise', etudiants: 43 },
  {
    titre:
      'La responsabilité pénale et civile des soignants en EHPAD / établissement de santé',
    etudiants: 34,
  },
  {
    titre:
      'Les droits et obligations des assureurs dans le cadre du procès pénal',
    etudiants: 11,
  },
  { titre: 'Le procès pénal et les intérêts civils', etudiants: 8 },
  { titre: 'Le secret professionnel', etudiants: 22 },
  { titre: 'Le harcèlement moral et sexuel en entreprise', etudiants: 11 },
  { titre: 'La gestion des conflits par la médiation', etudiants: 30 },
  { titre: 'Initiation à la médiation', etudiants: 54 },
  { titre: 'La pratique de la médiation en entreprise', etudiants: 16 },
];

async function run() {
  const all = await client.fetch(
    `*[_type == "formation"]{ _id, titre, etudiants }`
  );

  console.log(`📊 ${all.length} formations en base\n`);

  for (const { titre, etudiants } of updates) {
    const match = all.find((f) => f.titre === titre);
    if (!match) {
      console.error(`❌ Titre introuvable : ${titre}`);
      continue;
    }
    if (match.etudiants === etudiants) {
      console.log(`⏭️  ${etudiants} déjà à jour — ${titre}`);
      continue;
    }
    try {
      await client.patch(match._id).set({ etudiants }).commit();
      console.log(`✅ ${etudiants} — ${titre}`);
    } catch (err) {
      console.error(`❌ ${titre} :`, err.message);
    }
  }
  console.log('\n🎉 Terminé.');
}

run();
