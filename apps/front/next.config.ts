import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  images: {
    domains: ['127.0.0.1', 'localhost', 'strapi.ai-foundry.litebox.dev'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.ai-foundry.litebox.dev',
        pathname: '/uploads/**',
      }
    ]
  },
  compress: true,
  experimental: {
    scrollRestoration: true,
    cssChunking: true,
    optimizeCss: true,
    optimizePackageImports: [
      '@dotlottie/react-player',
      '@gsap/react',
      'motion',
      'swiper',
    ],
  },
  webpack: (config) => {
    config.parallelism = 4;
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=60'
          },
        ],
      },
      {
        source: '/service-worker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      }
    ];
  },
};

export default process.env.ANALYZE ? withBundleAnalyzer({ enabled: true })(nextConfig) : nextConfig;