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

export const LETTERS_LIST = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

/** Change the company name, phone, fax, email through out the site */
export const SITE_TITLE = 'Scarinci Hollenbeck';
export const SITE_PHONE = '201-896-4100';
export const SITE_FAX = '201-896-8660';
export const SITE_EMAIL = 'info@sh-law.com';

export const THANKS_MESSAGE = {
  title: 'Thank you!',
  getInTouch: 'Thank you for reaching out! We will get in touch with you soon.',
};

export const SUBSCRIPTION_THANKS = {
  subscription:
    'Thank you for subscribing! You are now part of our newsletter.',
};

export const footerNavList = [
  {
    linkTitle: 'Attorneys',
    link: '/attorneys',
    id: 1,
  },
  {
    linkTitle: 'Careers',
    link: '/careers',
    id: 2,
  },
  {
    linkTitle: 'Firm Overview',
    link: '/firm-overview',
    id: 3,
  },
  {
    linkTitle: 'Legal practices',
    link: '/practices',
    id: 4,
  },
  {
    linkTitle: 'Locations',
    link: '/location/little-falls',
    id: 5,
  },
];
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

export const ScarinciHollenbeckAuthor = [
  {
    uri: '/attorneys',
    title: 'Scarinci Hollenbeck',
    databaseId: 10000000000001,
    attorneyMainInformation: {
      profileImage: {
        sourceUrl: '/images/sh-mini-diamond-PNG.png',
      },
      email: SITE_EMAIL,
      phoneNumber: SITE_PHONE,
      designation: 'The Firm',
    },
    attorneyPrimaryRelatedPracticesLocationsGroups: {
      keyContactByPractice: null,
    },
    attorneyBiography: {
      miniBio: `With a growing practice of more than 60 experienced attorneys,
     Scarinci Hollenbeck is a regional alternative to a National 250 law firm. With offices in New
      Jersey, New York City, and the District of Columbia, we serve the niche practice areas most often
       required by institutions, corporations, entities, and the people who own and control them.`,
    },
  },
];

export const ScarinciHollenbeckKeyContact = {
  databaseId: 10000000000001,
  link: '/attorneys',
  display_name: 'Scarinci Hollenbeck',
  keyContactsByPractice: null,
  profileImage: '/images/sh-mini-diamond-PNG.png',
  designation: 'The Firm',
  phoneNumber: SITE_PHONE,
  email: SITE_EMAIL,
};

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
];

export const sitemapAddon = [
  'community-involvement',
  'diversity',
  'pro-bono',
  'women-lead',
  'contact',
  'privacy-policy',
  'terms-of-use',
  'awards',
  'covid-19-crisis-management-unit',
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
        id: 101,
        label: 'Administration',
        slug: '/administration',
        menuId: 'administration',
      },
      {
        id: 102,
        label: 'Careers',
        slug: '/careers',
        menuId: 'careers',
      },
      {
        id: 103,
        label: 'Community Involvement',
        slug: '/community-involvement',
        menuId: 'community-involvement',
      },
      {
        id: 104,
        label: 'COVID-19 Crisis Management Unit',
        menuId: 'covid-19-crisis-management-unit',
        slug: '/covid-19-crisis-management-unit',
      },
      {
        id: 105,
        label: 'Diversity',
        menuId: 'diversity',
        slug: '/diversity',
      },
      {
        id: 106,
        label: 'Firm Overview',
        menuId: 'firm-overview',
        slug: '/firm-overview',
      },
      {
        id: 107,
        label: 'Pro Bono',
        menuId: 'pro-bono',
        slug: '/pro-bono',
      },
      {
        id: 108,
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
    slug: '',
    menuId: 'practices',
    children: [
      {
        id: 301,
        label: 'Bankruptcy & Creditors’ Rights',
        menuId: 'bankruptcy',
        slug: '/practices/bankruptcy-and-creditors-rights',
        children: [
          {
            id: 30101,
            label: 'Bankruptcy & Creditors’ Rights overview',
            menuId: 'bankruptcy-overview',
            slug: '/practices/bankruptcy-and-creditors-rights',
          },
          {
            id: 30102,
            label: 'Creditor Collections',
            menuId: 'creditor-collections',
            slug: '/practices/creditor-collections',
          },
          {
            id: 30103,
            label: 'Federal Bankruptcy',
            menuId: 'federal-bankruptcy',
            slug: '/practices/federal-bankruptcy',
          },
          {
            id: 30104,
            label: 'Preference Defense',
            menuId: 'preference-defense',
            slug: '/practices/preference-defense',
          },
          {
            id: 30105,
            label: 'Secured Creditors, Lenders And Landlord Representation',
            menuId: 'secured-creditors',
            slug: '/practices/secured-creditors-lenders-landlord-representation',
          },
          {
            id: 30106,
            label: 'Loan Restructuring & Workouts',
            menuId: 'loan-restructuring',
            slug: '/practices/loan-restructuring-workouts',
          },
          {
            id: 30107,
            label: 'Debtor Representation Practices',
            menuId: 'debtor-representation-practices',
            slug: '/practices/debtor-representation',
          },
        ],
      },
      {
        id: 302,
        label: 'Cannabis Law',
        menuId: 'cannabis-law',
        slug: '/practices/new-jersey-cannabis-law',
        children: [
          {
            id: 30201,
            label: 'Cannabis Law overview',
            menuId: 'new-jersey-cannabis-law',
            slug: '/practices/new-jersey-cannabis-law',
          },
        ],
      },
      {
        id: 303,
        label: 'Corporate Transactions & Business',
        menuId: 'corporate-transactions',
        slug: '/practices/corporate-transactions-business',
        children: [
          {
            id: 30301,
            label: 'Corporate Transactions & Business overview',
            menuId: 'corporate-transactions-overview',
            slug: '/practices/corporate-transactions-business',
          },
          {
            id: 30302,
            label: 'Financing Group',
            menuId: 'financing-group',
            slug: '/practices/financing-group',
          },
          {
            id: 30303,
            label: 'Healthcare & Hospital Law',
            menuId: 'health-and-hospital-law',
            slug: '/practices/health-and-hospital-law',
          },
          {
            id: 30304,
            label: 'Investment Banking',
            menuId: 'investment-banking',
            slug: '/practices/investment-banking',
          },
          {
            id: 30305,
            label: 'Joint Ventures',
            menuId: 'joint-ventures',
            slug: '/practices/joint-ventures',
          },
          {
            id: 30306,
            label: 'Telecommunications',
            menuId: 'telecommunications',
            slug: '/practices/telecommunications',
          },
          {
            id: 30307,
            label: 'Board of Public Utilities',
            menuId: 'board-of-public-utilities',
            slug: '/practices/board-of-public-utilities',
          },
          {
            id: 30308,
            label: 'Business Entity Formations',
            menuId: 'business-entity-formations',
            slug: '/practices/business-entity-formations',
          },
          {
            id: 30309,
            label: 'Cannabis Law',
            menuId: 'new-jersey-cannabis-law2',
            slug: '/practices/new-jersey-cannabis-law',
          },
          {
            id: 30310,
            label: 'Intellectual Property',
            menuId: 'intellectual-property',
            slug: '/practices/intellectual-property',
          },
          {
            id: 30311,
            label: 'Limited Liability Companies',
            menuId: 'limited-liability-companies',
            slug: '/practices/limited-liability-companies',
          },
          {
            id: 30312,
            label: 'Mergers & Acquisitions',
            menuId: 'mergers-acquisitions',
            slug: '/practices/mergers-acquisitions',
          },
          {
            id: 30313,
            label: 'Partnerships',
            menuId: 'partnerships',
            slug: '/practices/partnerships',
          },
          {
            id: 30314,
            label: 'Securities Offerings & Corporate Disclosures',
            menuId: 'securities-offerings-and-corporate-disclosure',
            slug: '/practices/securities-offerings-and-corporate-disclosure',
          },
          {
            id: 30315,
            label: 'Technology Law',
            menuId: 'technology-law',
            slug: '/practices/technology-law',
          },
          {
            id: 30316,
            label: 'Gaming',
            menuId: 'gaming',
            slug: '/practices/gaming',
          },
          {
            id: 30317,
            label: 'Financial Services & Regulatory Practice',
            menuId: 'financial-services-and-regulatory-practice',
            slug: '/practices/financial-services-regulatory-practice',
          },
        ],
      },
      {
        id: 304,
        label: 'Commercial Real Estate',
        menuId: 'commercial-real-estate',
        slug: '/practices/commercial-real-estate',
        children: [
          {
            id: 30401,
            label: 'Commercial Real Estate overview',
            menuId: 'commercial-real-estate-overview',
            slug: '/practices/commercial-real-estate',
          },
          {
            id: 30402,
            label: 'Financing Group',
            menuId: 'financing-group',
            slug: '/practices/financing-group',
          },
          {
            id: 30403,
            label: 'Leasing',
            menuId: 'leasing',
            slug: '/practices/leasing',
          },
          {
            id: 30404,
            label: 'Sale',
            menuId: 'sale',
            slug: '/practices/sale',
          },
          {
            id: 30405,
            label: '1031 Like Kind Exchange Transactions',
            menuId: '1031-like-kind-exchange-transactions',
            slug: '/practices/1031-like-kind-exchange-transactions',
          },
          {
            id: 30406,
            label: 'Commercial Condominiums & Community Associations',
            menuId: 'commercial-condominiums-community-associations',
            slug: '/practices/commercial-condominiums-community-associations',
          },
          {
            id: 30407,
            label: 'Foreclosure',
            menuId: 'foreclosure',
            slug: '/practices/foreclosure',
          },
          {
            id: 30408,
            label: 'Mortgage Lender & Borrower Representation',
            menuId: 'mortgage-lender-borrower-representation',
            slug: '/practices/mortgate-lender-borrower-representation',
          },
          {
            id: 30409,
            label: 'Purchase',
            menuId: 'purchase',
            slug: '/practices/purchase',
          },
          {
            id: 30410,
            label: 'Land Use Practice',
            menuId: 'land-use-practice',
            slug: '/practices/land-use-practice',
          },
          {
            id: 30411,
            label: 'Tax Abatement',
            menuId: 'tax-abatement',
            slug: '/practices/tax-abatements',
          },
          {
            id: 30412,
            label: 'Acquisitions & Dispositions',
            menuId: 'acquisitions-dispositions',
            slug: '/practices/acquisitions-dispositions',
          },
          {
            id: 30413,
            label: 'Commercial Lending',
            menuId: 'commercial-lending',
            slug: '/practices/commercial-lending',
          },
          {
            id: 30414,
            label: 'New York City Real Estate',
            menuId: 'new-york-city-real-estate',
            slug: '/practices/new-york-city-real-estate',
          },
          {
            id: 30415,
            label: 'Real Property Tax Strategies',
            menuId: 'real-property-tax-strategies',
            slug: '/practices/real-property-tax-strategies',
          },
          {
            id: 30416,
            label: 'Development Incentives & Tax Credits',
            menuId: 'development-incentives-tax-credits',
            slug: '/practices/development-incentives-tax-credits',
          },
          {
            id: 30417,
            label: 'Real Estate Development & Land Use',
            menuId: 'real-estate-development-land-use',
            slug: '/practices/real-estate-development-land-use',
          },
          {
            id: 30418,
            label: 'Real Estate Financing',
            menuId: 'real-estate-financing',
            slug: '/practices/real-estate-financing',
          },
          {
            id: 30419,
            label: 'Office, Retail & Industrial Leasing',
            menuId: 'office-retail-industrial-leasing',
            slug: '/practices/office-retail-industrial-leasing',
          },
        ],
      },
      {
        id: 305,
        label: 'Education Law',
        menuId: 'education-law',
        slug: '/practices/education-law',
        children: [
          {
            id: 30501,
            label: 'Education Law overview',
            menuId: 'education-law-overview',
            slug: '/practices/education-law',
          },
          {
            id: 30502,
            label: 'Special Education',
            menuId: 'special-education',
            slug: '/practices/special-education',
          },
        ],
      },
      {
        id: 306,
        label: 'Entertainment & Media',
        menuId: 'entertainment-media',
        slug: '/practices/entertainment-and-media',
        children: [
          {
            id: 30601,
            label: 'Entertainment & Media overview',
            menuId: 'entertainment-media-overview',
            slug: '/practices/entertainment-and-media',
          },
          {
            id: 30602,
            label: 'Gaming',
            menuId: 'gaming2',
            slug: '/practices/gaming',
          },
        ],
      },
      {
        id: 307,
        label: 'Environmental',
        menuId: 'environmental',
        slug: '/practices/environmental',
        children: [
          {
            id: 30701,
            label: 'Environmental overview',
            menuId: 'environmental-overview',
            slug: '/practices/environmental',
          },
          {
            id: 30702,
            label: 'Renewable Energy & Green Initiatives',
            menuId: 'renewable-energy-green-initiatives',
            slug: '/practices/renewable-energy-green-initiatives',
          },
          {
            id: 30703,
            label: 'Environmental Remediation Management',
            menuId: 'environmental-remediation-management',
            slug: '/practices/environmental-remediation-management',
          },
        ],
      },
      {
        id: 308,
        label: 'Intellectual Property',
        menuId: 'intellectual-property',
        slug: '/practices/intellectual-property',
        children: [
          {
            id: 30801,
            label: 'Intellectual Property overview',
            menuId: 'intellectual-property-overview',
            slug: '/practices/intellectual-property',
          },
          {
            id: 30802,
            label: 'Entertainment & Media',
            menuId: 'entertainment-media2',
            slug: '/practices/entertainment-and-media',
          },
          {
            id: 30803,
            label: 'IP Consulting & Transactions',
            menuId: 'ip-consulting-transactions',
            slug: '/practices/ip-consulting-transactions',
          },
          {
            id: 30804,
            label: 'Patents',
            menuId: 'patents',
            slug: '/practices/patents',
          },
          {
            id: 30805,
            label: 'Corporate Transactions & Business',
            menuId: 'corporate-transactions-business',
            slug: '/practices/corporate-transactions-business',
          },
          {
            id: 30806,
            label: 'Unfair Competition',
            menuId: 'unfair-competition',
            slug: '/practices/unfair-competition',
          },
          {
            id: 30807,
            label: 'Copyright',
            menuId: 'copyright',
            slug: '/practices/copyright',
          },
          {
            id: 30808,
            label: 'Domain Name Dispute Resolution',
            menuId: 'domain-name-dispute-resolution',
            slug: '/practices/domain-name-dispute-resolution',
          },
          {
            id: 30809,
            label: 'eDiscovery',
            menuId: 'ediscovery',
            slug: '/practices/ediscovery',
          },
          {
            id: 30810,
            label: 'Technology Law',
            menuId: 'technology-law',
            slug: '/practices/technology-law',
          },
          {
            id: 30811,
            label: 'Trademarks',
            menuId: 'trademarks',
            slug: '/practices/trademark-law',
          },
          {
            id: 30812,
            label: 'IP Litigation',
            menuId: 'ip-litigation',
            slug: '/practices/ip-litigation',
          },
        ],
      },
      {
        id: 309,
        label: 'Government Strategies',
        menuId: 'government-strategies',
        slug: '/practices/government-strategies',
        children: [
          {
            id: 30901,
            label: 'Government Strategies overview',
            menuId: 'government-strategies-overview',
            slug: '/practices/government-strategies',
          },
          {
            id: 30902,
            label: 'Public Law',
            menuId: 'public-law',
            slug: '/practices/public-law',
          },
          {
            id: 30903,
            label: 'Litigation',
            menuId: 'litigation30903',
            slug: '/practices/litigation',
          },
          {
            id: 30904,
            label: 'Corporate Transactions & Business',
            menuId: 'corporate-transactions-business30904',
            slug: '/practices/corporate-transactions-business',
          },
          {
            id: 30905,
            label: 'Environmental',
            menuId: 'environmental30905',
            slug: '/practices/environmental',
          },
        ],
      },
      {
        id: 310,
        label: 'Labor & Employment',
        menuId: 'labor-employment',
        slug: '/practices/labor-employment',
        children: [
          {
            id: 31001,
            label: 'Labor & Employment overview',
            menuId: 'labor-employment-overview31001',
            slug: '/practices/labor-employment',
          },
          {
            id: 31002,
            label: 'Corporate Transactions & Business',
            menuId: 'corporate-transactions-business31002',
            slug: '/practices/corporate-transactions-business',
          },
          {
            id: 31003,
            label: 'Public Law',
            menuId: 'public-law31003',
            slug: '/practices/public-law',
          },
          {
            id: 31004,
            label: 'Public Employment Law',
            menuId: 'public-employment-law31004',
            slug: '/practices/public-employment-law',
          },
        ],
      },
      {
        id: 311,
        label: 'Litigation',
        menuId: 'litigation',
        slug: '/practices/litigation',
        children: [
          {
            id: 31101,
            label: 'Litigation overview',
            menuId: 'litigation-overview31101',
            slug: '/practices/litigation',
          },
          {
            id: 31102,
            label: 'Appellate Practice',
            menuId: 'appellate-practice',
            slug: '/practices/appellate-practice',
          },
          {
            id: 31103,
            label: 'Business Torts & Anti-Trust',
            menuId: 'business-torts-anti-trust31103',
            slug: '/practices/business-torts',
          },
          {
            id: 31104,
            label: 'Corporate Compliance',
            menuId: 'corporate-compliance31104',
            slug: '/practices/corporate-compliance',
          },
          {
            id: 31105,
            label: 'Alternative Dispute Resolution',
            menuId: 'alternative-dispute-resolution31105',
            slug: '/practices/alternative-dispute-resolution-mediation-arbitration',
          },
          {
            id: 31106,
            label: 'Civil Rights',
            menuId: 'civil-rights31106',
            slug: '/practices/civil-rights',
          },
          {
            id: 31107,
            label: 'Commercial Litigation',
            menuId: 'commercial-litigation31107',
            slug: '/practices/commercial-litigation',
          },
          {
            id: 31108,
            label: 'Construction Claims',
            menuId: 'construction-claims31108',
            slug: '/practices/construction-claims',
          },
          {
            id: 31109,
            label: 'Corporate, Partnerships, & LLC Disputes',
            menuId: 'corporate-partnerships-llc-disputes31109',
            slug: '/practices/corporate-partnerships-llc-disputes',
          },
          {
            id: 31110,
            label: 'Criminal Defense',
            menuId: 'criminal-defense31110',
            slug: '/practices/criminal-defense',
          },
          {
            id: 31111,
            label: 'Crisis & Risk Management',
            menuId: 'crisis-risk-management31111',
            slug: '/practices/crisis-risk-management',
          },
          {
            id: 31112,
            label: 'eDiscovery',
            menuId: 'ediscovery31112',
            slug: '/practices/ediscovery',
          },
          {
            id: 31113,
            label: 'Franchise & Distribution Disputes',
            menuId: 'franchise-distribution-disputes31113',
            slug: '/practices/franchise-distribution-disputes',
          },
          {
            id: 31114,
            label: 'Financial Services & Regulatory Practice',
            menuId: 'financial-services-regulatory-practice31114',
            slug: '/practices/financial-services-regulatory-practice',
          },
          {
            id: 31115,
            label: 'Estate & Trust Litigation',
            menuId: 'estate-trust-litigation31115',
            slug: '/practices/estate-trust-litigation',
          },
          {
            id: 31116,
            label: 'Cyber Security & Data Privacy',
            menuId: 'cyber-security-data-privacy31116',
            slug: '/practices/cyber-security-data-privacy',
          },
        ],
      },
      {
        id: 312,
        label: 'Public Law',
        menuId: 'public-law',
        slug: '/practices/public-law',
        children: [
          {
            id: 31201,
            label: 'Public Law overview',
            menuId: 'public-law-overview31201',
            slug: '/practices/public-law',
          },
          {
            id: 31202,
            label: 'Public Contracts',
            menuId: 'public-contracts31202',
            slug: '/practices/public-contracts',
          },
          {
            id: 31203,
            label: 'Public Employment Law',
            menuId: 'public-employment-law31203',
            slug: '/practices/public-employment-law',
          },
          {
            id: 31204,
            label: 'Education Law',
            menuId: 'education-law31204',
            slug: '/practices/education-law',
          },
          {
            id: 31205,
            label: 'Special Education',
            menuId: 'special-education31205',
            slug: '/practices/special-education',
          },
          {
            id: 31206,
            label: 'Independent Authorities',
            menuId: 'independent-authorities31206',
            slug: '/practices/independent-authorities',
          },
          {
            id: 31207,
            label: 'Open Public Records Act',
            menuId: 'open-public-records-act31207',
            slug: '/practices/open-public-records-act',
          },
        ],
      },
      {
        id: 313,
        label: 'Tax, Trusts & Estates',
        menuId: 'tax',
        slug: '/practices/tax-trusts-estates',
        children: [
          {
            id: 31301,
            label: 'Tax, Trusts & Estates overview',
            menuId: 'tax-overview31301',
            slug: '/practices/tax-trusts-estates',
          },
          {
            id: 31302,
            label: 'Corporate Tax Planning',
            menuId: 'corporate-tax-planning31302',
            slug: '/practices/corporate-tax-planning',
          },
          {
            id: 31303,
            label: 'Corporate Transactions & Business',
            menuId: 'corporate-transactions-business31303',
            slug: '/practices/corporate-transactions-business',
          },
          {
            id: 31304,
            label: 'Deal Structure & Guidance',
            menuId: 'deal-structure-guidance31304',
            slug: '/practices/deal-structure-guidance',
          },
          {
            id: 31305,
            label: 'Representation Before Taxing Authorities',
            menuId: 'representation-before-taxing-authorities31305',
            slug: '/practices/representation-before-taxing-authorities',
          },
          {
            id: 31306,
            label: 'Sophisticated Estate Planning & Wealth Preservation',
            menuId: 'sophisticated-estate-planning-wealth-preserve31306',
            slug: '/practices/sophisticated-estate-planning-wealth-preservation',
          },
          {
            id: 31307,
            label: 'Estate & Trust Litigation',
            menuId: 'estate-trust-litigation31307',
            slug: '/practices/estate-trust-litigation',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Library',
    menuId: 'library',
    slug: '',
    children: [
      {
        id: 401,
        label: 'Client Alerts',
        menuId: 'client-alerts',
        slug: '/library/category/client-alert',
      },
      {
        id: 402,
        label: 'Firm News',
        menuId: 'firm-news',
        slug: '/library/category/firm-news',
      },
      {
        id: 403,
        label: 'Firm Events',
        menuId: 'firm-events',
        slug: '/library/category/firm-events',
      },
      {
        id: 404,
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
    children: [
      {
        id: 404,
        label: 'Little Falls, NJ',
        menuId: 'little-falls',
        slug: '/location/little-falls',
      },
      {
        id: 405,
        label: 'New York city',
        menuId: 'new-york',
        slug: '/location/new-york',
      },
      {
        id: 406,
        label: 'Washington, D.C.',
        menuId: 'washington-dc',
        slug: '/location/washington-dc',
      },
      {
        id: 407,
        label: 'Red Bank',
        menuId: 'red-bank',
        slug: '/location/red-bank',
      },
    ],
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
  {
    id: 12,
    slug: '/practices/entertainment-and-media',
    label: 'Entertainment & Media',
  },
  {
    id: 13,
    slug: '/practices/new-jersey-cannabis-law',
    label: 'Cannabis Law',
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

/** the content found on 404 or 500 error pages */
export const ERROR_PAGE_CONTENT = {
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
    title:
      'I am located outside of New Jersey and New York. Can you still help me?',
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

export const inputsCareerForm = [
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
    rules:
      'required|regex:/^(\\+?1[-.\\s]?)?(\\()?\\d{3}(\\))?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/',
    maxLength: 17,
    title: `Please use these formats: 
    (123) 456-7890
    123-456-7890
    123.456.7890
    123 456 7890
    +1 123-456-7890
    +1 (123) 456-7890
    `,
  },
  {
    id: 'coverLetter',
    type: 'file',
    name: 'coverLetter',
    rules: 'required',
    label: 'Upload your cover letter',
    accept: '.txt, .rtf, .doc, .docx, .pdf, .odt, .tex, .md, .csv, .html, .xml',
    htmlFor: 'coverLetter',
  },
  {
    id: 'resume',
    type: 'file',
    name: 'resume',
    rules: 'required',
    label: 'Upload your resume',
    accept: '.txt, .rtf, .doc, .docx, .pdf, .odt, .tex, .md, .csv, .html, .xml',
  },
  {
    id: 'writing',
    type: 'file',
    name: 'writing',
    label: 'Upload a writing sample',
    accept: '.txt, .rtf, .doc, .docx, .pdf, .odt, .tex, .md, .csv, .html, .xml',
  },
  {
    id: 'transcript',
    type: 'file',
    name: 'transcript',
    label: 'Upload a transcript',
    accept: '.txt, .rtf, .doc, .docx, .pdf, .odt, .tex, .md, .csv, .html, .xml',
  },
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
    rules:
      'required|regex:/^(\\+?1[-.\\s]?)?(\\()?\\d{3}(\\))?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/',
    maxLength: 17,
    title: `Please use these formats: 
    (123) 456-7890
    123-456-7890
    123.456.7890
    123 456 7890
    +1 123-456-7890
    +1 (123) 456-7890
    `,
  },
  {
    type: 'text',
    name: 'Subject',
    placeholder: 'Subject',
    rules: 'required|max:1000',
  },
  {
    type: 'textarea',
    name: 'Message',
    placeholder: 'Message',
    rules: 'required|max:1000',
    rows: 8,
    cols: 4,
  },
];

export const CategoriesButtonsStructure = [
  {
    slug: 'client-alert',
    label: 'Client Alert',
    databaseId: 20098,
  },
  {
    slug: 'firm-news',
    label: 'News',
    databaseId: 98,
  },
  {
    slug: 'firm-events',
    label: 'Events',
    databaseId: 99,
  },
  {
    slug: 'law-firm-insights',
    label: 'Insights',
    databaseId: 599,
  },
];

export const Links404NavArr = [
  {
    id: 1,
    title: 'Home Page',
    href: '/',
  },
  {
    id: 2,
    title: 'Contact us',
    href: '/contact',
  },
  {
    id: 3,
    title: 'Locations',
    href: '/location',
  },
  {
    id: 4,
    title: 'Firm News',
    href: '/library/category/firm-news',
  },
  {
    id: 5,
    title: 'Firm Events',
    href: '/library/category/firm-events',
  },
  {
    id: 6,
    title: 'Firm Insights',
    href: '/library/category/law-firm-insights',
  },
];

/**  external blog urls  */
export const MUSIC_ESQ_URL = 'https://musicesq.com';
export const CON_LAW_URL = 'https://constitutionallawreporter.com';
export const GOV_LAW_URL = 'https://scarincilawyer.com';

/** the blog id for covid pages  */
export const COVID_POSTS_ID = 20250;

/** Image CDN URLs */
export const IMAGE_NOT_FOUND_URL = 'https://res.cloudinary.com/scarinci-hollenbeck/images/v1637157143/wp.scarincihollenbeck/no-image-found-diamond_33141f5498/no-image-found-diamond_33141f5498-png?_i=AA';

export const EMAGE_UPLOAD_CLOUDINARY = 'https://res.cloudinary.com/scarinci-hollenbeck/images/v';
export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/scarinci-hollenbeck/wp.scarincihollenbeck/';

/** a helper header data when making requests to WP backend */
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const MAKE_A_PAYMENT = 'https://secure.lawpay.com/pages/scarincihollenbeck/operating';

/** constant data that comes from hidden files for security */
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_BASE_GRAPHQL_API_URL;
export const PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL;
export const ALGOLIA_PUBLIC_API = process.env.NEXT_PUBLIC_ALGOLIA_PUBLIC_API;
export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
export const ALGOLIA_SEARCH_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX;
export const CURRENT_DOMAIN = process.env.NODE_ENV === 'production'
  ? 'https://scarincihollenbeck.com'
  : 'http://localhost:7700';
export const KWES_API = process.env.NEXT_PUBLIC_KWES_API;
export const GET_IN_TOUCH_FORM_API = process.env.NEXT_PUBLIC_GET_IN_TOUCH_FORM_API;
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
// thats url for exceptions for wrong urls
export const HTTP_PRODUCTION_URL = 'http://scarincihollenbeck.com';
export const HTTP_WWW_PRODUCTION_URL = 'http://www.scarincihollenbeck.com';
