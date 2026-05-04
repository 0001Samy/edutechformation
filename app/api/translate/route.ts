import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

/**
 * Endpoint POST /api/translate
 * Traduit un tableau de chaînes via DeepL avec :
 *  - Cache mémoire serveur
 *  - Protection des termes propres (acronymes, noms, marques)
 *  - Variante anglais britannique (EN-GB) pour un ton plus formel
 *
 * Body: { texts: string[], targetLang: 'EN' | 'FR' }
 * Réponse: { translations: string[] }
 */

const cache = new Map<string, string>();

function cacheKey(target: string, text: string): string {
  return crypto.createHash('sha256').update(`${target}::${text}`).digest('hex');
}

// ─── Termes à NE PAS traduire ───────────────────────────────────────────────
// Acronymes français, noms propres, marques, identifiants légaux
const PROTECTED_TERMS = [
  // Acronymes & dispositifs
  'OPCO', 'OPCOs',
  'France Travail',
  'Pôle emploi',
  'Qualiopi',
  'AIF', 'POEI', 'RGPD', 'DPIA', 'AIPD',
  'CGI', 'SAS', 'SIREN', 'SIRET', 'NAF',
  'RNQ', 'BPF', 'CPF',
  'IA Act',
  'Cap Emploi', 'MDPH', 'Agefiph', 'FIPHFP',
  // Marque & raison sociale
  'Edutech Formations', 'Edutech Formation', 'EduTech Formation', 'EduTech Formations',
  // Personnes
  'Saïda BENOUARI', 'Olivier Gil', 'Mme Saïda BENOUARI',
  // Lieux
  'Asnières-sur-Seine', 'Île-de-France',
  // Outils & marques tech
  'ZOOM', 'DALL·E', 'Midjourney', 'ChatGPT', 'Claude',
  'Make', 'Zapier', 'Notion', 'Notion IA',
  'Google Workspace', 'Microsoft 365',
  'Google Analytics',
  // Référentiels juridiques (gardés en français pour précision)
  'Code du travail', 'Code Général des Impôts',
];

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function unescapeXml(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/**
 * Enveloppe les termes protégés dans des balises <keep>...</keep> que DeepL
 * ne touchera pas (grâce à tag_handling=xml + ignore_tags=keep).
 */
function protectTerms(text: string): string {
  // Tri par longueur décroissante pour matcher les expressions les plus longues d'abord
  const sorted = [...PROTECTED_TERMS].sort((a, b) => b.length - a.length);
  let result = text;
  for (const term of sorted) {
    // (?<!<keep>) évite de re-wrapper un terme déjà protégé
    const regex = new RegExp(`(?<!<keep>)\\b${escapeRegex(term)}\\b`, 'g');
    result = result.replace(regex, (match) => `<keep>${escapeXml(match)}</keep>`);
  }
  return result;
}

function unwrapKeepTags(text: string): string {
  return text.replace(/<keep>([\s\S]*?)<\/keep>/g, (_, inner) => unescapeXml(inner));
}

interface DeepLResponse {
  translations: { detected_source_language: string; text: string }[];
}

async function callDeepL(
  texts: string[],
  targetLang: 'EN' | 'FR',
  apiKey: string
): Promise<string[]> {
  const baseUrl = apiKey.endsWith(':fx')
    ? 'https://api-free.deepl.com'
    : 'https://api.deepl.com';

  // 1. Pré-traitement : protéger les termes
  const protectedTexts = texts.map(protectTerms);

  const params = new URLSearchParams();
  protectedTexts.forEach((t) => params.append('text', t));
  // Variante britannique pour un ton plus formel (organisme français)
  params.append('target_lang', targetLang === 'EN' ? 'EN-GB' : 'FR');
  params.append('source_lang', targetLang === 'EN' ? 'FR' : 'EN');
  params.append('preserve_formatting', '1');
  params.append('tag_handling', 'xml');
  params.append('ignore_tags', 'keep');
  params.append('split_sentences', 'nonewlines');

  const res = await fetch(`${baseUrl}/v2/translate`, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`DeepL API ${res.status} : ${errBody.slice(0, 200)}`);
  }

  const data: DeepLResponse = await res.json();

  // 2. Post-traitement : retirer les balises <keep>
  return data.translations.map((t) => unwrapKeepTags(t.text));
}

export async function POST(request: Request) {
  try {
    const { texts, targetLang } = (await request.json()) as {
      texts: string[];
      targetLang: 'EN' | 'FR';
    };

    if (!Array.isArray(texts) || texts.length === 0) {
      return NextResponse.json({ translations: [] });
    }

    const target = targetLang === 'EN' ? 'EN' : 'FR';

    // 1. Lecture du cache
    const cached: (string | null)[] = texts.map(
      (text) => cache.get(cacheKey(target, text)) ?? null
    );

    // 2. Sélection des textes manquants
    const missingIndexes: number[] = [];
    const missingTexts: string[] = [];
    cached.forEach((c, i) => {
      if (c === null && texts[i].trim().length > 0) {
        missingIndexes.push(i);
        missingTexts.push(texts[i]);
      }
    });

    if (missingTexts.length === 0) {
      return NextResponse.json({
        translations: cached.map((c, i) => c ?? texts[i]),
      });
    }

    const apiKey = process.env.DEEPL_API_KEY;
    if (!apiKey) {
      console.warn('[/api/translate] DEEPL_API_KEY manquant, traduction désactivée');
      return NextResponse.json({
        translations: texts,
        warning: 'DEEPL_API_KEY missing — original text returned',
      });
    }

    const translatedMissing = await callDeepL(missingTexts, target, apiKey);

    // 3. Mise en cache + reconstruction
    const result = [...cached] as (string | null)[];
    missingIndexes.forEach((origIdx, i) => {
      const translation = translatedMissing[i];
      cache.set(cacheKey(target, texts[origIdx]), translation);
      result[origIdx] = translation;
    });

    return NextResponse.json({
      translations: result.map((r, i) => r ?? texts[i]),
    });
  } catch (err) {
    console.error('[/api/translate] error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Translation failed' },
      { status: 500 }
    );
  }
}
