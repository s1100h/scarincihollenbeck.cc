/**
 * This file contains lists of links used in the header navigation, sidebar navigation, footer navigation
 * through out the site. This file also contains constant data found throughout the site.
 */

import {
  HawCanIGet,
  HawDoIKnow,
  WhatAreTheFirms,
  WhereIsYheFirmLocated,
} from 'components/atoms/micro-templates/Faq-templates';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

/** List of firm blog category links found in the sidebar */
export const FIRM_BLOG_PAGES = [
  {
    id: 'firm-news',
    label: 'Firm News',
    slug: '/library/category/firm-news',
  },
  {
    id: 'firm-events',
    label: 'Firm Events',
    slug: '/library/category/firm-events',
  },
  {
    id: 'firm-insights',
    label: 'Firm Insights',
    slug: '/library/category/law-firm-insights',
  },
];

/* List of Firm Pages found in the sidebar and in the footer */
export const FIRM_PAGES = [
  {
    id: 'community-involvement',
    label: 'Community Involvement',
    slug: '/community-involvement',
  },
  {
    id: 'diversity',
    label: 'Diversity',
    slug: '/diversity',
  },
  {
    id: 'pro-bono',
    label: 'Pro Bono',
    slug: '/pro-bono',
  },
  {
    id: 'women-lead',
    label: 'Women Lead',
    slug: '/women-lead',
  },
  {
    id: 'subscribe',
    label: 'Subscribe',
    slug: '/subscribe',
  },
];

/** Header navigation links */
export const SITE_NAVIGATION = [
  {
    id: 1,
    label: 'The Firm',
    menuId: 'the-firm',
    slug: '',
    children: [
      {
        id: 11,
        label: 'Administration',
        slug: '/administration',
        menuId: 'administration',
      },
      {
        id: 12,
        label: 'Careers',
        slug: '/careers',
        menuId: 'careers',
      },
      {
        id: 13,
        label: 'Community Involvement',
        slug: '/community-involvement',
        menuId: 'community-involvement',
      },
      {
        id: 14,
        label: 'COVID-19 Crisis Management Unit',
        menuId: 'covid-19-crisis-management-unit',
        slug: '/covid-19-crisis-management-unit',
      },
      {
        id: 15,
        label: 'Diversity',
        menuId: 'diversity',
        slug: '/diversity',
      },
      {
        id: 16,
        label: 'Firm Overview',
        menuId: 'firm-overview',
        slug: '/firm-overview',
      },
      {
        id: 17,
        label: 'Pro Bono',
        menuId: 'pro-bono',
        slug: '/pro-bono',
      },
      {
        id: 18,
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
    children: undefined,
    menuId: 'attorneys',
  },
  {
    id: 3,
    label: 'Practices',
    slug: '/practices',
    menuId: 'practices',
    children: undefined,
  },
  {
    id: 4,
    label: 'Library',
    menuId: 'library',
    slug: '',
    children: [
      {
        id: 101,
        label: 'Client Alerts',
        menuId: 'client-alerts',
        slug: '/library/category/client-alert',
      },
      {
        id: 201,
        label: 'Firm News',
        menuId: 'firm-news',
        slug: '/library/category/firm-news',
      },
      {
        id: 301,
        label: 'Firm Events',
        menuId: 'firm-events',
        slug: '/library/category/firm-events',
      },
      {
        id: 401,
        label: 'Firm Insights',
        menuId: 'firm-insights',
        slug: '/library/category/law-firm-insights',
      },
    ],
  },
  {
    id: 5,
    label: 'Locations',
    slug: '/location/little-falls',
    menuId: 'locations',
    children: undefined,
  },
];

/** The links in the dark gray banner in the footer */
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
    id: 3,
    label: 'COVID-19',
    slug: '/covid-19-crisis-management-unit',
  },

  {
    id: 4,
    slug: '/firm-overview',
    label: 'Firm Overview',
  },
  {
    id: 5,
    slug: '/practices',
    label: 'Legal Practices',
  },
  {
    id: 6,
    slug: '/locations',
    label: 'Locations',
  },
];

/** List of Client Alert links on the covid pages and category landing pages */
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
    slug: '/location/little-falls',
    label: 'Little Falls, NJ',
    address: '150 Clove Road, 9th Floor, Little Falls, NJ 07424',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5375.6334332077395!2d-74.19960021040134!3d40.87248074962538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fe482a4faf77%3A0x17707b4c60656ad!2s150%20Clove%20Rd%2C%20Little%20Falls%2C%20NJ%2007424!5e0!3m2!1sen!2sus!4v1659974943790!5m2!1sen!2sus',
    tel: '201-896-4100',
    fax: '201-896-8660',
  },
  {
    id: 2,
    slug: '/location/red-bank',
    label: 'Red Bank, NJ',
    address: '331 Newman Springs Road Red Bank, NJ 07701',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.34467374956!2d-74.09794688434188!3d40.33469936854769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c231df5cc8d921%3A0x41ee2239f0384ab0!2s331+Newman+Springs+Rd%2C+Red+Bank%2C+NJ+07701!5e0!3m2!1sen!2sus!4v1537300318797',
    tel: '732-780-5590',
    fax: '732-695-8108',
  },
  {
    id: 3,
    slug: '/location/new-york',
    label: 'New York, NY',
    address: '589 8th Avenue, 16th Floor, New York, NY 10018',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.305278781976!2d-73.99361708459378!3d40.75530987932725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259acdec357a3%3A0x25fd7e9975e1d4d8!2s589%208th%20Ave%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1590683744779!5m2!1sen!2sus',
    tel: '212-286-0747',
    fax: '212-808-4155',
  },
  {
    id: 4,
    slug: '/location/washington-dc',
    label: 'Washington, D.C.',
    address: 'Suite 250 1000 Potomac St., N.W. Washington D.C. 20007',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.895582561126!2d-77.06740448437249!3d38.90350305418882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b64f2644b13d%3A0xb55e5bb3e6365035!2s1000+Potomac+St+NW+%23250%2C+Washington%2C+DC+20007!5e0!3m2!1sen!2sus!4v1537300455274',
    tel: '202-452-1334',
  },
];
/** List the Core Practices in the sidebar of the practice pages and in the footer */
export const CORE_PRACTICES = [
  {
    id: 1,
    slug: '/practices/bankruptcy-and-creditors-rights',
    label: "Bankruptcy & Creditors' Rights",
  },
  {
    id: 2,
    slug: '/practices/commercial-real-estate',
    label: 'Commercial Real Estate',
  },
  {
    id: 3,
    slug: '/practices/corporate-transactions-business',
    label: 'Corporate Transactions & Business',
  },
  {
    id: 4,
    slug: '/practices/education-law',
    label: 'Education Law',
  },
  {
    id: 5,
    slug: '/practices/environmental',
    label: 'Environmental',
  },
  {
    id: 6,
    slug: '/practices/government-strategies',
    label: 'Government Strategies',
  },
  {
    id: 7,
    slug: '/practices/intellectual-property',
    label: 'Intellectual Property',
  },
  {
    id: 8,
    slug: '/practices/labor-employment',
    label: 'Labor & Employment',
  },
  {
    id: 9,
    slug: '/practices/litigation',
    label: 'Litigation',
  },
  {
    id: 10,
    slug: '/practices/public-law',
    label: 'Public Law',
  },
  {
    id: 11,
    slug: '/practices/tax-trusts-estates',
    label: 'Tax, Trusts & Estates',
  },
];

/** Social Media links found in the footer */
export const SOCIAL_MEDIA_LINKS = [
  {
    id: 1,
    url: 'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
    label: 'LinkedIn',
    icon: <BsLinkedin />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com/ScarinciHollenbeck',
    label: 'Facebook',
    icon: <BsFacebook />,
  },
];

/** Make a payment link found in the footer */
export const MAKE_A_PAYMENT_URLS = [
  {
    id: 1,
    url: 'https://secure.lawpay.com/pages/scarincihollenbeck/operating',
    label: 'Make a payment',
  },
];

/** the content found on 404 or 500 error pages */
export const ERROR_PAGE_CONTENT = {
  subTitle: 'Sorry, there was an issue getting your requested page',
  mainMessage:
    "It's possible you entered the address incorrectly, we moved the desired page, or there is an issue on our servers. Try searching our site to find what you are looking for.",
};

/** content for /practices and /attorneys FAQ's component */

export const ATTORNEYS_FAQ = [
  {
    id: 1,
    title: 'How can I get in touch with an attorney?',
    body: <HawCanIGet />,
  },
  {
    id: 2,
    title: 'How do I know which attorney to contact?',
    body: <HawDoIKnow />,
  },
  {
    id: 3,
    title: 'What are the firm`s main practice areas?',
    body: <WhatAreTheFirms />,
  },
  {
    id: 4,
    title: 'Where is the firm located?',
    body: <WhereIsYheFirmLocated />,
  },
  {
    id: 5,
    title: 'I am located outside of New Jersey and New York. Can you still help me?',
    body: `
    It depends on the nature of the matter. <strong>Scarinci Hollenbeck</strong> represents clients around the world.
    We service our clients in a large variety of matters. In areas such as Intellectual Property,
    including trademark, copyright, or patent-related matters, we can service these requests regardless
    of where our clients are based. However, we predominantly handle legal matters whose jurisdiction
    is New Jersey, New York, the tri-state metropolitan area, and Washington, D.C. We also have <strong>attorneys
    who are licensed</strong> to practice in Connecticut, Florida, Massachusetts, Pennsylvania, and other states.
    We recommend calling one of our dedicated staff members who can help identify if we have an attorney at
    the firm that can assist you. Feel free to reach out to us at <a href="tel:201-806-3364"> 201-806-3364</a>.
    `,
  },
  {
    id: 6,
    title: 'What kind of clients does your firm service?',
    body: `Scarinci Hollenbeck routinely serves business owners, corporate entities, leaders, and operators
     of small businesses and Fortune 500 companies alike.`,
  },
  {
    id: 7,
    title: 'I am not a business owner. Could your firm still help me?',
    body: `We are a general practice law firm that services businesses, corporations, and entities.
    We typically only represent people who own and operate these organizations. However, you are free to call 
    our business development group at <a href="tel:201-806-3364"> 201-806-3364</a> or email us at 
    <a href="mailto:info@sh-law.com">info@sh-law.com</a> A member of our group can direct you to an 
    attorney in our firm that may be able to assist.
    `,
  },
  {
    id: 8,
    title: 'How do you pronounce "Scarinci Hollenbeck"?',
    body: 'SCUH-RIN-SEE HALL-EN-BEK',
  },
];

export const firmOverViewTitles = [
  { name: 'Firm management', order: 1 },
  // this was committed(2.02.2022). it need for /firm-overview.
  // { name: 'Practice Leaders', order: 2 },
  { name: 'Directors', order: 3 },
];

export const administrationTitles = [
  { name: 'Firm management', order: 2 },
  { name: 'Administrative Management', order: 3 },
];

export const inputsGetInTouchAttributes = [
  {
    type: 'text',
    name: 'FirstName',
    placeholder: 'First name',
    rules: 'required|max:255',
  },
  {
    type: 'text',
    name: 'LastName',
    placeholder: 'Last name',
    rules: 'required|max:255',
  },
  {
    type: 'email',
    name: 'Email',
    placeholder: 'Email address',
    rules: 'required|max:255',
  },
  {
    type: 'tel',
    name: 'Phone',
    placeholder: 'Phone number',
    rules: 'required|max:255',
    pattern: '[0-9]{3} [0-9]{3} [0-9]{4}',
  },
  {
    type: 'text',
    name: 'Subject',
    placeholder: 'Subject',
    rules: 'required|max:1000',
  },
];

/** Change the company name, phone, fax, email through out the site */
export const SITE_TITLE = 'Scarinci Hollenbeck';
export const SITE_PHONE = '201-896-4100';
export const SITE_FAX = '201-896-8660';
export const SITE_EMAIL = 'info@sh-law.com';

/**  external blog urls  */
export const MUSIC_ESQ_URL = 'https://musicesq.com';
export const CON_LAW_URL = 'https://constitutionallawreporter.com';
export const GOV_LAW_URL = 'https://scarincilawyer.com';

/** the blog id for covid pages  */
export const COVID_POSTS_ID = 20250;

/** Image CDN URLs */
export const IMAGE_NOT_FOUND_URL = 'https://res.cloudinary.com/scarinci-hollenbeck/images/v1637157143/wp.scarincihollenbeck/no-image-found-diamond_33141f5498/no-image-found-diamond_33141f5498-png?_i=AA';
export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/scarinci-hollenbeck/wp.scarincihollenbeck/';

/** a helper header data when making requests to WP backend */
export const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

/** constant data that comes from hidden files for security */
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_BASE_GRAPHQL_API_URL;
export const PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL;
export const ALGOLIA_PUBLIC_API = process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_API;
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
export const ALGOLIA_SEARCH_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX;
export const CURRENT_DOMAIN = process.env.NODE_ENV === 'production' ? 'https://scarincihollenbeck.com' : 'http://localhost:7700';
export const KWES_API = process.env.NEXT_PUBLIC_KWES_API;
export const GET_IN_TOUCH_FORM_API = process.env.NEXT_PUBLIC_GET_IN_TOUCH_FORM_API;
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
