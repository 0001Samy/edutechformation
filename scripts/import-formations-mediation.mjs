// Import des formations médiation dans Sanity
// Usage : node --env-file=.env.local scripts/import-formations-mediation.mjs

import { createClient } from '@sanity/client';
import { readFileSync } from 'node:fs';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('❌ SANITY_API_TOKEN manquant. Lance avec : node --env-file=.env.local scripts/import-formations-mediation.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'b60x0124',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-10-01',
  token,
  useCdn: false,
});

const ndjsonPath = new URL('./import-formations-mediation.ndjson', import.meta.url);
const lines = readFileSync(ndjsonPath, 'utf-8')
  .split('\n')
  .map((l) => l.trim())
  .filter(Boolean);

const docs = lines.map((l) => JSON.parse(l));

async function run() {
  console.log(`📥 Import de ${docs.length} formations…\n`);
  for (const doc of docs) {
    try {
      const result = await client.createOrReplace(doc);
      console.log(`✅ ${doc.titre} → ${result._id}`);
    } catch (err) {
      console.error(`❌ ${doc.titre} :`, err.message);
    }
  }
  console.log('\n🎉 Terminé.');
}

run();
