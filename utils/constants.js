/** List of links in the sidebar of firm pages(diversity, pro bono, etc.) */
export const FIRM_BLOG_PAGES = [
  {
    id: 'firm-news',
    title: 'Firm News',
    slug: '/library/category/firm-news',
  },
  {
    id: 'firm-events',
    title: 'Firm Events',
    slug: '/library/category/firm-events',
  },
  {
    id: 'firm-insights',
    title: 'Firm Insights',
    slug: '/library/category/law-firm-insights',
  },
];

/* List of firm pages in the sidebar */
export const FIRM_PAGES = [
  {
    id: 'pro-bono',
    title: 'Pro Bono',
    slug: '/pro-bono',
  },
  {
    id: 'women-lead',
    title: 'Women Lead',
    slug: '/women-lead',
  },
  {
    id: 'community-involvement',
    title: 'Community Involvement',
    slug: '/community-involvement',
  },
  {
    id: 'diversity',
    title: 'Diversity',
    slug: '/diversity',
  },
];

/** The navigation in the header section of the site */
export const SITE_NAVIGATION = [
  {
    id: 1,
    label: 'The Firm',
    menuId: 'the-firm',
    slug: null,
    children: [
      {
        id: 1,
        label: 'Administration',
        slug: '/administration',
        menuId: 'administration',
      },
      {
        id: 2,
        label: 'Careers',
        slug: '/careers',
        menuId: 'careers',
      },
      {
        id: 3,
        label: 'Community Involvement',
        slug: '/community-involvement',
        menuId: 'community-involvement',
      },
      {
        id: 4,
        label: 'COVID-19 Crisis Management Unit',
        menuId: 'covid-19-crisis-management-unit',
        slug: '/covid-19-crisis-management-unit',
      },
      {
        id: 5,
        label: 'Diversity',
        menuId: 'diversity',
        slug: '/diversity',
      },
      {
        id: 6,
        label: 'Firm Overview',
        menuId: 'firm-overview',
        slug: '/firm-overview',
      },
      {
        id: 7,
        label: 'Pro Bono',
        menuId: 'pro-bono',
        slug: '/pro-bono',
      },
      {
        id: 8,
        label: 'Women Lead',
        menuId: 'women-lead',
        slug: '/women-lead',
      },
    ],
  },
  {
    id: 2,
    label: 'Attorneys',
    slug: '/attorneys',
    children: null,
    menuId: 'attorneys',
  },
  {
    id: 3,
    label: 'Practices',
    slug: '/practices',
    menuId: 'practices',
    children: null,
  },
  {
    id: 4,
    label: 'Library',
    menuId: 'library',
    slug: null,
    children: [
      {
        id: 1,
        label: 'Client Alerts',
        menuId: 'client-alerts',
        slug: '/library/category/client-alert',
      },
      {
        id: 2,
        label: 'Firm News',
        menuId: 'firm-news',
        slug: '/library/category/firm-news',
      },
      {
        id: 3,
        label: 'Firm Events',
        menuId: 'firm-events',
        slug: '/library/category/firm-events',
      },
      {
        id: 4,
        label: 'Firm Insights',
        menuId: 'firm-insights',
        slug: '/library/category/law-firm-insights',
      },
    ],
  },
  {
    id: 5,
    label: 'Locations',
    slug: '/locations',
    menuId: 'locations',
    children: null,
  },
  {
    id: 6,
    label: 'Contact',
    slug: '/contact',
    menuId: 'contact',
    children: null,
  },
];

/** The links in the dark gray bar in the footer of the site */
export const SITE_FOOTER_NAVIGATION = [
  {
    id: 1,
    slug: '/attorneys',
    label: 'Attorneys',
  },
  {
    id: 2,
    label: 'Careers',
    slug: '/careers',
  },

  {
    id: 2,
    label: 'COVID-19',
    slug: '/covid-19-crisis-management-unit',
  },

  {
    id: 3,
    slug: '/firm-overview',
    label: 'Firm Overview',
  },
  {
    id: 4,
    slug: '/practices',
    label: 'Legal Practices',
  },
  {
    id: 5,
    slug: '/locations',
    label: 'Locations',
  },
];

/** URLS for funeral pages -- after publishing a new funeral page add the link plus /funeral-announcements/ infront of it
 * To point it to the funeral-announcements template
 */
export const FUNERAL_SLUGS = [
  '/funeral-announcements/passing-attorney-harvey-r-poe',
  '/funeral-announcements/passing-attorney-david-a-einhorn',
];

/** Site Forms URLS  */
export const SITE_FORM_SLUGS = ['/site-forms/new-attorney', '/site-forms/current-attorney'];

/** Holiday URLS */
export const HOLIDAY_SLUGS = [
  '/holiday/2019-happy-holidays',
  '/holiday/2020-happy-holidays',
  '/holiday/2021-happy-holidays',
  '/holiday/2022-happy-holidays',
  '/holiday/2023-happy-holidays',
];

/** List of Client Alert links on the covid page and category landing pages */
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

/* List of locations in the footer of the website * */
export const OFFICE_LOCATIONS = [
  {
    id: 1,
    slug: '/location/lyndhurst',
    label: 'Lyndhurst, NJ',
  },
  {
    id: 2,
    slug: '/location/red-bank',
    label: 'Red Bank, NJ',
  },
  {
    id: 3,
    slug: '/location/new-york',
    label: 'New York, NY',
  },
  {
    id: 4,
    slug: '/location/washington-dc',
    label: 'Washington, D.C.',
  },
];

/** List the Core Practices in the sidebar and home page */
export const CORE_PRACTICES = [
  {
    id: 1,
    slug: '/practices/bankruptcy-and-creditors-rights',
    title: "Bankruptcy & Creditors' Rights",
  },
  {
    id: 2,
    slug: '/practices/commercial-real-estate',
    title: 'Commercial Real Estate',
  },
  {
    id: 3,
    slug: '/practices/corporate-transactions-business',
    title: 'Corporate Transactions & Business',
  },
  {
    id: 4,
    slug: '/practices/education-law',
    title: 'Education Law',
  },
  {
    id: 5,
    slug: '/practices/environmental',
    title: 'Environmental',
  },
  {
    id: 6,
    slug: '/practices/government-strategies',
    title: 'Government Strategies',
  },
  {
    id: 7,
    slug: '/practices/intellectual-property',
    title: 'Intellectual Property',
  },
  {
    id: 8,
    slug: '/practices/labor-employment',
    title: 'Labor & Employment',
  },
  {
    id: 9,
    slug: '/practices/litigation',
    title: 'Litigation',
  },
  {
    id: 10,
    slug: '/practices/public-law',
    title: 'Public Law',
  },
  {
    id: 11,
    slug: '/practices/tax-trusts-estates',
    title: 'Tax, Trusts & Estates',
  },
];

export const ERROR_PAGE_CONTENT = {
  subTitle: 'Sorry, there was an issue getting your requested page',
  mainMessage:
    "It's possible you entered the address incorrectly, we moved the desired page, or there is an issue on our servers. Try searching our site to find what you are looking for.",
};

/** Changing this variable will remove Scarinci Hollenbeck everywhere on the site */
export const SITE_TITLE = 'Scarinci Hollenbeck';
export const SITE_PHONE = '201-896-4100';
export const SITE_FAX = '201-896-8660';
export const MUSIC_ESQ_URL = 'https://musicesq.com';
export const CON_LAW_URL = 'https://constitutionallawreporter.com';
export const GOV_LAW_URL = 'https://scarincilawyer.com';
export const CURRENT_DOMAIN = process.env.NODE_ENV === 'production' ? 'https://scarincihollenbeck.com' : 'http://localhost:7700';
export const COVID_POSTS_ID = 20250;
export const IMAGE_NOT_FOUND_URL = 'https://res.cloudinary.com/scarinci-hollenbeck/images/v1637157143/wp.scarincihollenbeck/no-image-found-diamond_33141f5498/no-image-found-diamond_33141f5498-png?_i=AA';
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_BASE_GRAPHQL_API_URL;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const ALGOLIA_PUBLIC_API = process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_API;
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
export const ALGOLIA_SEARCH_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX;
export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/scarinci-hollenbeck/wp.scarincihollenbeck/';
