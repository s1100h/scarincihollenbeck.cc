const {
  HOLIDAY_REWRITES,
  FUNERAL_REWRITES,
  POST_TYPE_REWRITES,
  POST_CATEOGRY_REWRITES,
  FIRM_PAGES_REWRITES,
} = require('./utils/rewrites');

module.exports = {
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ALGOLIA_PUBLIC_API: process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_API,
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX,
    NEXT_PUBLIC_BASE_GRAPHQL_API_URL: process.env.NEXT_PUBLIC_BASE_GRAPHQL_API_URL,
  },
  images: {
    domains: [
      'shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com',
      'musicesq.com',
      'scarincilawyer.com',
      'conqqqshlskopvv.nyc3.digitaloceanspaces.com',
      'wp.scarincihollenbeck.com',
      'res.cloudinary.com',
    ],
    minimumCacheTTL: 60,
    deviceSizes: [576, 768, 992, 1200, 1456],
    staticPageGenerationTimeout: 120,
    swcMinify: true,
  },
  async rewrites() {
    return [
      ...POST_TYPE_REWRITES,
      ...POST_CATEOGRY_REWRITES,
      ...FIRM_PAGES_REWRITES,
      ...FUNERAL_REWRITES,
      ...HOLIDAY_REWRITES,
    ];
  },
};
