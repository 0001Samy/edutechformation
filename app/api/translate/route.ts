import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

/**
 * Endpoint POST /api/translate
 * Traduit un tableau de chaînes via DeepL avec cache mémoire serveur.
 *
 * Body: { texts: string[], targetLang: 'EN' | 'FR' }
 * Réponse: { translations: string[] }
 */

// Cache mémoire serveur (vidé au redémarrage)
// clé = sha256(targetLang + text), valeur = traduction
const cache = new Map<string, string>();

function cacheKey(target: string, text: string): string {
  return crypto.createHash('sha256').update(`${target}::${text}`).digest('hex');
}

interface DeepLResponse {
  translations: { detected_source_language: string; text: string }[];
}

async function callDeepL(
  texts: string[],
  targetLang: 'EN' | 'FR',
  apiKey: string
): Promise<string[]> {
  // DeepL API : Free → api-free.deepl.com, Pro → api.deepl.com
  // On détecte automatiquement via le suffixe ":fx" du token gratuit
  const baseUrl = apiKey.endsWith(':fx')
    ? 'https://api-free.deepl.com'
    : 'https://api.deepl.com';

  const params = new URLSearchParams();
  texts.forEach((t) => params.append('text', t));
  params.append('target_lang', targetLang);
  params.append('source_lang', targetLang === 'EN' ? 'FR' : 'EN');
  params.append('preserve_formatting', '1');

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
  return data.translations.map((t) => t.text);
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

    // 1. On regarde dans le cache
    const cached: (string | null)[] = texts.map(
      (text) => cache.get(cacheKey(target, text)) ?? null
    );

    // 2. On extrait les textes manquants
    const missingIndexes: number[] = [];
    const missingTexts: string[] = [];
    cached.forEach((c, i) => {
      if (c === null && texts[i].trim().length > 0) {
        missingIndexes.push(i);
        missingTexts.push(texts[i]);
      }
    });

    // 3. Si tout est en cache, on renvoie directement
    if (missingTexts.length === 0) {
      return NextResponse.json({
        translations: cached.map((c, i) => c ?? texts[i]),
      });
    }

    // 4. Appel DeepL pour les textes manquants
    const apiKey = process.env.DEEPL_API_KEY;
    if (!apiKey) {
      // Pas de clé → on renvoie l'original avec un avertissement (et on log côté serveur)
      console.warn(
        '[/api/translate] DEEPL_API_KEY manquant, traduction désactivée'
      );
      return NextResponse.json({
        translations: texts,
        warning: 'DEEPL_API_KEY missing — original text returned',
      });
    }

    const translatedMissing = await callDeepL(missingTexts, target, apiKey);

    // 5. Mise en cache + reconstruction du tableau final
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
