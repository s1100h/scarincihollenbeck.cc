export const FIRM_BLOG_PAGES = [
  {
    id: 'YFtFOuJeUHBy2WL',
    title: 'Firm News',
    slug: '/library/category/firm-news',
  },
  {
    id: 'pmSgjQiss0Mbz6p',
    title: 'Firm Events',
    slug: '/library/category/firm-events',
  },
  {
    id: '2oTGonRQMAwEDZL',
    title: 'Firm Insights',
    slug: '/library/category/law-firm-insights',
  },
];

export const FIRM_PAGES = [
  {
    id: 'WF7jMpVJP3PTnuP',
    title: 'Pro Bono',
    slug: '/pro-bono',
  },
  {
    id: 'vehm0rQb7cpMH92',
    title: 'Women Lead',
    slug: '/women-lead',
  },
  {
    id: 'SjveurE3BK1R1l2',
    title: 'Community Involvement',
    slug: '/community-involvement',
  },
  {
    id: 'p4mdVc653adf98fbn',
    title: 'Diversity',
    slug: '/diversity',
  },
];

export const SITE_NAVIGATION = [
  {
    id: 1,
    label: 'The Firm',
    slug: null,
    children: [
      {
        id: 1,
        label: 'Administration',
        slug: '/administration',
      },
      {
        id: 2,
        label: 'Careers',
        slug: '/careers',
      },
      {
        id: 3,
        label: 'Community Involvement',
        slug: '/community-involvement',
      },
      {
        id: 4,
        label: 'Diversity',
        slug: '/diversity',
      },
      {
        id: 5,
        label: 'Firm Overview',
        slug: '/firm-overview',
      },
      {
        id: 6,
        label: 'Pro Bono',
        slug: '/pro-bono',
      },
      {
        id: 7,
        label: 'Women Lead',
        slug: '/women-lead',
      },
    ],
  },
  {
    id: 2,
    label: 'Attorneys',
    slug: '/attorneys',
    children: null,
  },
  {
    id: 3,
    label: 'Practices',
    slug: '/practices',
    children: null,
  },
  {
    id: 4,
    label: 'Library',
    slug: null,
    children: [
      {
        id: 1,
        label: 'Firm News',
        slug: '/firm-news',
      },
      {
        id: 2,
        label: 'Firm Events',
        slug: '/firm-events',
      },
      {
        id: 3,
        label: 'Firm Insights',
        slug: '/firm-insights',
      },
    ],
  },
  {
    id: 5,
    label: 'Locations',
    slug: '/locations',
    children: null,
  },
  {
    id: 6,
    label: 'Contact',
    slug: '/contact',
    children: null,
  },
];

export const SITE_FOOTER_NAVIGATION = [
  {
    id: 1,
    slug: '/attorneys',
    label: 'Attorneys',
  },
  {
    id: 2,
    slug: '/careers',
    label: 'Careers',
  },
  {
    id: 3,
    slug: '/contact',
    label: 'Contact',
  },
  {
    id: 4,
    slug: '/firm-overview',
    label: 'Firm Overview',
  },
  {
    id: 5,
    slug: '/practices',
    label: 'Practices',
  },
  {
    id: 6,
    slug: '/library/category/firm-news',
    label: 'Library',
  },
];

export const ERROR_PAGE_CONTENT = {
  subTitle: 'Sorry, there was an issue getting your requested page',
  mainMessage:
    "It's possible you entered the address incorrectly, we moved the desired page, or there is an issue on our servers. Try searching our site to find what you are looking for.",
};

export const FUNERAL_SLUGS = [
  '/funeral-announcements/passing-attorney-harvey-r-poe',
  '/funeral-announcements/passing-attorney-david-a-einhorn',
];

export const SITE_FORM_SLUGS = ['/site-forms/new-attorney', '/site-forms/current-attorney'];

export const HOLIDAY_SLUGS = ['/holiday/2019-happy-holidays', '/holiday/2020-happy-holidays'];

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const CLIENT_ALERTS = [
  {
    id: 20098,
    slug: 'client-alert',
    name: 'Client Alert',
  },
  {
    id: 20250,
    slug: 'covid-19-alerts',
    name: 'COVID-19 Alerts',
  },
  {
    id: 22896,
    slug: 'covid-19-education-alert',
    name: 'COVID-19 Education Alerts',
  },
  {
    id: 18675,
    slug: 'cyber-security-client-alert',
    name: 'Cyber Security Client Alert',
  },
];
