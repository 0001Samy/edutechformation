import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }] },
  async redirects() {
    return [
      { source: '/cours', destination: '/formations', permanent: true },
      { source: '/cours/:slug*', destination: '/formations/:slug*', permanent: true },
    ];
  },
};
export default nextConfig;
