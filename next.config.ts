import type { NextConfig } from 'next';

// ─── Headers de sécurité ──────────────────────────────────────────────────────
// Content Security Policy pour le site public (sans /studio)
// Permissive pour fonctionner avec Next.js + Vercel + Sanity images + DeepL
const SITE_CSP = [
  "default-src 'self'",
  // 'unsafe-inline' nécessaire pour les scripts d'hydratation Next.js
  // 'unsafe-eval' nécessaire pour certaines libs (Sanity dataLoader)
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  // 'unsafe-inline' nécessaire pour Tailwind v4 et styled-components
  "style-src 'self' 'unsafe-inline'",
  // Images : self + data URIs + Sanity CDN + Vercel Analytics
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.vercel-insights.com",
  "font-src 'self' data:",
  // API : self (Resend, contact) + DeepL + Sanity + Vercel
  "connect-src 'self' https://api-free.deepl.com https://api.deepl.com https://*.api.sanity.io https://*.apicdn.sanity.io https://b60x0124.api.sanity.io https://*.vercel-insights.com https://va.vercel-scripts.com",
  // Empêche l'embed du site dans une iframe (protection clickjacking)
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  // Bloque Flash, Java, etc.
  "object-src 'none'",
  // Force HTTPS pour toutes les sous-requêtes
  'upgrade-insecure-requests',
].join('; ');

// CSP plus permissive pour le Studio Sanity (qui utilise eval, blob URLs, etc.)
const STUDIO_CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https:",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https: wss:",
  "frame-src 'self' https:",
  "worker-src 'self' blob:",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ');

const SECURITY_HEADERS = [
  // Force HTTPS pendant 2 ans, inclut sous-domaines, preload list
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Empêche le navigateur de "deviner" le MIME type → bloque les attaques type confusion
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Empêche l'embed du site dans une iframe externe (clickjacking)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Limite les infos du Referer envoyées aux sites tiers
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Désactive les API browser sensibles non utilisées
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()',
      'interest-cohort=()',
    ].join(', '),
  },
  // Isolation des contextes de navigation (protection contre Spectre/cross-origin attacks)
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  // Légère restriction des ressources externes (sans casser les images Sanity)
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      // Studio Sanity : CSP permissive (use eval, blob URLs, etc.)
      {
        source: '/studio/:path*',
        headers: [
          ...SECURITY_HEADERS,
          { key: 'Content-Security-Policy', value: STUDIO_CSP },
        ],
      },
      // Reste du site : CSP stricte
      {
        source: '/((?!studio).*)',
        headers: [
          ...SECURITY_HEADERS,
          { key: 'Content-Security-Policy', value: SITE_CSP },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/cours', destination: '/formations', permanent: true },
      { source: '/cours/:slug*', destination: '/formations/:slug*', permanent: true },
    ];
  },
};

export default nextConfig;
