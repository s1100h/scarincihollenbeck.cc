const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NEXT_PUBLIC_PROJECT_MODE === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
});
const {
  SITE_PAGES_REWRITES,
  POST_TYPE_REWRITES,
  POST_CATEGORY_REWRITES,
} = require('./utils/rewrites');
const { PERMANENT_REDIRECTS } = require('./utils/permanent-redirects');

const securityHeaders = [
  {
    key: 'Cache-Control',
    value: 's-maxage=8600, stale-while-revalidate',
  },
];

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'musicesq.com',
      },
      {
        protocol: 'https',
        hostname: 'scarincilawyer.com',
      },
      {
        protocol: 'https',
        hostname: 'conqqqshlskopvv.nyc3.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'wp.scarincihollenbeck.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [576, 768, 992, 1200, 1456],
  },
  experimental: {
    scrollRestoration: true,
    nextScriptWorkers: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ALGOLIA_PUBLIC_API: process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_API,
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX:
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX,
    NEXT_PUBLIC_BASE_GRAPHQL_API_URL:
      process.env.NEXT_PUBLIC_BASE_GRAPHQL_API_URL,
  },
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [...PERMANENT_REDIRECTS];
  },
  async rewrites() {
    return [
      ...POST_TYPE_REWRITES,
      ...POST_CATEGORY_REWRITES,
      ...SITE_PAGES_REWRITES,
    ];
  },
};

// @ts-ignore
module.exports = withPWA(nextConfig);
