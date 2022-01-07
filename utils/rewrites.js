const POST_TYPE_REWRITES = [
  {
    source: '/attorneys/:path*',
    destination: '/attorney/:path*',
  },
  {
    source: '/practices/:path*',
    destination: '/practice/:path*',
  },
  {
    source: '/locations/:path*',
    destination: '/location/:path*',
  },
  {
    source: '/careers/:path*',
    destination: '/career/:path*',
  },
];

const POST_CATEGORY_REWRITES = [
  {
    source: '/law-firm-insights/:slug*',
    destination: '/post/:slug*?category=law-firm-insights',
  },
  {
    source: '/firm-news/:slug*',
    destination: '/post/:slug*?category=firm-news',
  },
  {
    source: '/news/:slug*',
    destination: '/post/:slug*?category=firm-news',
  },
  {
    source: '/client-alert/:slug*',
    destination: '/post/:slug*?category=client-alert',
  },
  {
    source: '/covid-19-alerts/:slug*',
    destination: '/post/:slug*?category=covid-19-alerts',
  },
  {
    source: '/covid-19-education-alert/:slug*',
    destination: '/post/:slug*?category=covid-19-education-alert',
  },
  {
    source: '/cyber-security-client-alert/:slug*',
    destination: '/post/:slug*?category=cyber-security-client-alert',
  },
  {
    source: '/featured/:slug*',
    destination: '/post/:slug*?category=featured',
  },
  {
    source: '/federal-payroll-protection-act/:slug*',
    destination: '/post/:slug*?category=federal-payroll-protection-act',
  },
  {
    source: '/firm-events/:slug*',
    destination: '/post/:slug*?category=firm-events',
  },
  {
    source: '/headlines/:slug*',
    destination: '/post/:slug*?category=headlines',
  },
  {
    source: '/just-in/:slug*',
    destination: '/post/:slug*?category=just-in',
  },
  {
    source: '/art-law/:slug*',
    destination: '/post/:slug*?category=art-law',
  },
  {
    source: '/quick-news/:slug*',
    destination: '/post/:slug*?category=quick-news',
  },
  {
    source: '/mandarin/:slug*',
    destination: '/post/:slug*?category=mandarin',
  },
];

const SITE_PAGES_REWRITES = [
  {
    source: '/awards',
    destination: '/basic-page/awards',
  },
  {
    source: '/terms-of-use',
    destination: '/basic-page/terms-of-use',
  },
  {
    source: '/privacy-policy',
    destination: '/basic-page/privacy-policy',
  },
  {
    source: '/disclaimer',
    destination: '/basic-page/disclaimer',
  },
  {
    source: '/passing-attorney-harvey-r-poe',
    destination: '/funeral-announcements/passing-attorney-harvey-r-poe',
  },
  {
    source: '/passing-attorney-david-a-einhorn',
    destination: '/funeral-announcements/passing-attorney-david-a-einhorn',
  },
  {
    source: '/diversity',
    destination: '/firm-page/diversity',
  },
  {
    source: '/community-involvement',
    destination: '/firm-page/community-involvement',
  },
  {
    source: '/pro-bono',
    destination: '/firm-page/pro-bono',
  },
  {
    source: '/women-lead',
    destination: '/firm-page/women-lead',
  },
  {
    source: '/contact',
    destination: '/form-page/contact',
  },
  {
    source: '/subscribe',
    destination: '/form-page/subscribe',
  },
];

module.exports = {
  SITE_PAGES_REWRITES,
  POST_TYPE_REWRITES,
  POST_CATEGORY_REWRITES,
};
