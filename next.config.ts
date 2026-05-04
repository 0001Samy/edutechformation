import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Compression Brotli/Gzip activée par défaut sur Vercel
  compress: true,
  // Mise en cache agressive des assets statiques
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
    // Formats modernes : Next sert AVIF/WebP automatiquement aux navigateurs compatibles
    formats: ['image/avif', 'image/webp'],
    // Cache long pour les images optimisées (1 an)
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      { source: '/cours', destination: '/formations', permanent: true },
      { source: '/cours/:slug*', destination: '/formations/:slug*', permanent: true },
    ];
  },
};
export default nextConfig;
