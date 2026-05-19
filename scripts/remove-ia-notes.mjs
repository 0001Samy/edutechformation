// Supprime le champ `note` sur toutes les formations du pôle IA.
// Idempotent : ne touche pas aux formations sans note.
//
// Usage : node --env-file=.env.local scripts/remove-ia-notes.mjs

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

async function run() {
  const formations = await client.fetch(
    `*[_type == "formation" && pole == "ia"]{ _id, titre, note }`
  );

  const avecNote = formations.filter((f) => f.note != null);
  console.log(
    `📊 ${formations.length} formations IA au total — ${avecNote.length} avec note\n`
  );

  if (avecNote.length === 0) {
    console.log('✨ Rien à faire, aucune formation IA n\'a de note.');
    return;
  }

  for (const f of avecNote) {
    try {
      await client.patch(f._id).unset(['note']).commit();
      console.log(`✅ Note supprimée — ${f.titre}`);
    } catch (err) {
      console.error(`❌ ${f.titre} :`, err.message);
    }
  }
  console.log('\n🎉 Terminé.');
}

run();
