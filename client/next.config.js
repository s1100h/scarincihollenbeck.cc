module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: [
      'shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com',
      'musicesq.com',
      'scarincilawyer.com',
      'conqqqshlskopvv.nyc3.digitaloceanspaces.com',
    ],
  },
  async rewrites() {
    return [
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
      {
        source: '/law-firm-insights/:slug*',
        destination: '/post/:slug*?category=law-firm-insights',
      },
      {
        source: '/firm-news/:slug*',
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
        source: '/quick-news/:slug*',
        destination: '/post/:slug*?category=quick-news',
      },
      {
        source: '/mandarin/:slug*',
        destination: '/post/:slug*?category=mandarin',
      },
    ];
  },
};
