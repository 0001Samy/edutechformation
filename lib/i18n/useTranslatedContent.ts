'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const CLIENT_CACHE_KEY = 'edutech-translation-cache-v3';
const CACHE_VERSION = 3;

type ClientCache = {
  version: number;
  entries: Record<string, string>; // sha-style key → translation
};

function loadCache(): ClientCache {
  try {
    const raw = localStorage.getItem(CLIENT_CACHE_KEY);
    if (!raw) return { version: CACHE_VERSION, entries: {} };
    const parsed = JSON.parse(raw) as ClientCache;
    if (parsed.version !== CACHE_VERSION) {
      return { version: CACHE_VERSION, entries: {} };
    }
    return parsed;
  } catch {
    return { version: CACHE_VERSION, entries: {} };
  }
}

function saveCache(cache: ClientCache) {
  try {
    localStorage.setItem(CLIENT_CACHE_KEY, JSON.stringify(cache));
  } catch {
    // localStorage plein → on ignore
  }
}

function cacheKey(targetLang: string, text: string): string {
  // Hash léger côté client (pas crypto-fort, juste pour clé unique)
  let hash = 0;
  const input = `${targetLang}::${text}`;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return `${targetLang}_${hash}`;
}

/**
 * Traduit une liste de chaînes (statiques ou dynamiques Sanity) en respectant
 * la langue actuelle. Cache localStorage pour éviter les appels répétés.
 *
 * Usage :
 *   const [translated, isTranslating] = useTranslatedContent(['Bonjour', 'Au revoir']);
 *   // En FR : translated === ['Bonjour', 'Au revoir']  (instantané)
 *   // En EN : translated === ['Hello', 'Goodbye']      (après ~300ms)
 */
export function useTranslatedContent<T extends readonly string[]>(
  texts: T
): [T, boolean] {
  const { locale } = useLanguage();
  const [translated, setTranslated] = useState<T>(texts);
  const [isTranslating, setIsTranslating] = useState(false);

  // Sérialisation des entrées pour comparer entre renders (sinon useEffect boucle)
  const textsKey = useRef(JSON.stringify(texts));
  const newKey = JSON.stringify(texts);
  if (textsKey.current !== newKey) {
    textsKey.current = newKey;
  }

  useEffect(() => {
    // En FR : on renvoie l'original sans appel
    if (locale === 'fr') {
      setTranslated(texts);
      setIsTranslating(false);
      return;
    }

    if (texts.length === 0) {
      setTranslated(texts);
      return;
    }

    let cancelled = false;
    const targetLang = 'EN';

    // 1. Check cache localStorage
    const cache = loadCache();
    const fromCache: (string | null)[] = texts.map(
      (text) => cache.entries[cacheKey(targetLang, text)] ?? null
    );

    const allCached = fromCache.every((c) => c !== null);
    if (allCached) {
      setTranslated(fromCache as unknown as T);
      setIsTranslating(false);
      return;
    }

    // 2. On a besoin d'appeler l'API pour les manquants
    setIsTranslating(true);

    fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texts, targetLang }),
    })
      .then((res) => res.json())
      .then((data: { translations: string[] }) => {
        if (cancelled) return;
        const result = data.translations ?? texts;

        // Mise en cache
        const next = loadCache();
        result.forEach((t, i) => {
          next.entries[cacheKey(targetLang, texts[i])] = t;
        });
        saveCache(next);

        setTranslated(result as unknown as T);
        setIsTranslating(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Translation failed:', err);
        setTranslated(texts); // fallback : original
        setIsTranslating(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, newKey]);

  return [translated, isTranslating];
}

/** Variante pour une seule chaîne */
export function useTranslatedString(text: string): [string, boolean] {
  const [arr, isLoading] = useTranslatedContent([text] as const);
  return [arr[0] ?? text, isLoading];
}
