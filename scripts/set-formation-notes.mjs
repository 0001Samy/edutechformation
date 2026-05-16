// Pose une note aléatoire entre 4.5 et 4.9 (pas de 0.1) sur chaque formation
// qui n'en a pas encore. Idempotent : ne touche pas aux notes déjà définies.
//
// Usage : node --env-file=.env.local scripts/set-formation-notes.mjs

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

function randomNote() {
  // 5 valeurs possibles : 4.5, 4.6, 4.7, 4.8, 4.9
  const steps = Math.floor(Math.random() * 5);
  return Math.round((4.5 + steps * 0.1) * 10) / 10;
}

async function run() {
  const formations = await client.fetch(
    `*[_type == "formation"]{ _id, titre, note }`
  );

  const sansNote = formations.filter((f) => f.note == null);
  console.log(
    `📊 ${formations.length} formations au total — ${sansNote.length} sans note\n`
  );

  if (sansNote.length === 0) {
    console.log('✨ Rien à faire, toutes les formations ont déjà une note.');
    return;
  }

  for (const f of sansNote) {
    const note = randomNote();
    try {
      await client.patch(f._id).set({ note }).commit();
      console.log(`✅ ${note} — ${f.titre}`);
    } catch (err) {
      console.error(`❌ ${f.titre} :`, err.message);
    }
  }
  console.log('\n🎉 Terminé.');
}

run();
