// Met à jour le champ profilFormateur sur toutes les formations.
// Idempotent : peut être relancé sans risque.
//
// Usage : node --env-file=.env.local scripts/set-profil-formateur.mjs

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

const PROFIL = "Formateurs experts justifiant de plusieurs années d'expérience professionnelle, intervenant auprès de publics diversifiés. Ils mobilisent des compétences pédagogiques solides et une expertise opérationnelle confirmée afin de concevoir et dispenser des formations adaptées aux besoins des apprenants ainsi qu'aux exigences des contextes professionnels.";

const formations = await client.fetch(`*[_type == "formation"]{ _id, titre }`);
console.log(`\n${formations.length} formation(s) trouvée(s)\n`);

for (const f of formations) {
  await client.patch(f._id).set({ profilFormateur: PROFIL }).commit();
  console.log(`✅ ${f.titre}`);
}

console.log('\n✔ Tous les profils formateur mis à jour.');
