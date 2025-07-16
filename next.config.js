/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live https://www.youtube.com https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
  img-src 'self' data: blob: https://images.pexels.com https://www.google-analytics.com https://www.googletagmanager.com https://cdn.jsdelivr.net https://www.youtube.com https://i.ytimg.com https://ugc.production.linktr.ee/DytoegRJSyGYXbB3lVc6_1x3q7X02riP1PZ2s?io=true&size=avatar-v3_0;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://www.google-analytics.com https://vercel.live https://vitals.vercel-insights.com;
  frame-src https://www.youtube.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  manifest-src 'self';
`;

const nextConfig = {
 // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
