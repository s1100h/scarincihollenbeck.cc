import { render, screen, within } from '@testing-library/react';
import { useRouter } from 'next/router';
import decodeResponse from 'utils/decodeResponse';
import { formatDate } from 'utils/helpers';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  pathname: '/post/[...slug]',
  route: '/post/[...slug]',
  query: {
    category: 'firm-news',
    slug: 'scarinci-hollenbeck-attorneys-2025-best-lawyers',
  },
  asPath: '/firm-news/scarinci-hollenbeck-attorneys-2025-best-lawyers',
});

jest.mock('utils/decodeResponse', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockCategoriesData = [
  { id: 608, name: 'Business Law' },
  { id: 98, name: 'Firm News' },
  { id: 5734, name: 'Technology' },
  { id: 2124, name: 'Tax' },
  { id: 99, name: 'Firm Events' },
];

beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve());
  decodeResponse.mockResolvedValue({ data: mockCategoriesData });
});

afterAll(() => {
  jest.resetAllMocks();
});

jest.mock('next/image', () => ({
  __esModule: true,

  default: ({
    blurDataURL, priority, fill, ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

jest.mock('next/legacy/image', () => ({
  __esModule: true,

  default: ({
    blurDataURL, priority, fill, ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

describe('Post', () => {
  const subHeaderProps = {
    title: 'Post title',
    authors: [
      {
        uri: '/attorneys/scarinci-hollenbeck',
        display_name: 'Scarinci Hollenbeck, LLC',
        databaseId: 156871,
        authorDescription:
          'With a growing practice of more than 60 experienced attorneys, Scarinci Hollenbeck, LLC is a regional alternative to a National 250 law firm. With offices in New Jersey, New York City, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.',
        profileImage:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1676448213/wp.scarincihollenbeck/sh-mini-diamond-500x500-1/sh-mini-diamond-500x500-1.png?_i=AA',
        email: 'info@sh-law.com',
        phoneNumber: '201-896-4100',
        designation: 'The Firm',
      },
    ],
    isBlog: true,
  };

  const sideBarProps = {
    keyContacts: [
      {
        uri: '/attorneys/scott-h-novak',
        display_name: 'Scott H. Novak',
        databaseId: 164793,
        authorDescription:
          'Partner Scott H. Novak concentrates his practice on tax law, with a focus on tax controversy, trusts and estates, planning and transactional tax matters.',
        profileImage:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1694631297/wp.scarincihollenbeck/SNovak-TEmp-image/SNovak-TEmp-image.png?_i=AA',
        email: 'snovak@sh-law.com',
        phoneNumber: '201-896-7240',
        designation: 'Partner',
      },
    ],
    corePractices: [
      {
        title: 'Bankruptcy & Creditors’ Rights',
        uri: '/practices/bankruptcy-and-creditors-rights',
        databaseId: 28345,
        practicePortalPageContent: {
          practicePortalCategories: ['Core Practices'],
        },
      },
    ],
  };

  const relatedPosts = [
    {
      title:
        'NJ and NYC Law Firms Unite to Establish Powerhouse Midtown Manhattan Office',
      uri: 'https://scarincihollenbeck.com/firm-news/nj-and-nyc-law-firms-unite',
      featuredImage:
        'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1703883743/wp.scarincihollenbeck/Image20231229111452/Image20231229111452.png?_i=AA',
      databaseId: 165947,
    },
    {
      title: 'Bill Sullivan Named to 2023 ROI Influencers: Environment List',
      uri: 'https://scarincihollenbeck.com/firm-news/bill-sullivan-named-to-2023-roi-influencers-environment-list',
      featuredImage:
        'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1703694631/wp.scarincihollenbeck/Bill-Sullivan-Named-to-2023-ROI-Influencers-Environment-List2/Bill-Sullivan-Named-to-2023-ROI-Influencers-Environment-List2.png?_i=AA',
      databaseId: 165928,
    },
  ];

  const recommendedPostsProps = {
    titleGeneralBlock: 'Recommended Posts',
    attorneyFooterNewsArticles: [
      {
        databaseId: 168500,
        uri: '/firm-news/2024-new-jersey-legal-award-finalists',
        title: 'NJ Law Journal Announces 2024 New Jersey Legal Award Finalists',
        date: '2024-09-26T16:14:27',
        featuredImage:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1727381546/wp.scarincihollenbeck/Firm-News-wHeadshot-2/Firm-News-wHeadshot-2.jpg?_i=AA',
        author: 'Scarinci Hollenbeck, LLC',
      },
      {
        databaseId: 168392,
        uri: '/firm-news/bloomberg-law-podcast-discusses-significant-ip-victory',
        title:
          'Bloomberg Law Podcast Discusses Significant IP Victory with Ron Bienstock',
        date: '2024-08-29T11:57:30',
        featuredImage:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1724946678/wp.scarincihollenbeck/Firm-News-wHeadshot-6/Firm-News-wHeadshot-6.jpg?_i=AA',
        author: 'Ronald S. Bienstock',
      },
      {
        databaseId: 168315,
        uri: '/firm-news/scarinci-hollenbeck-attorneys-2025-best-lawyers',
        title:
          'Scarinci Hollenbeck Attorneys Recognized as 2025 Best Lawyers in America®',
        date: '2024-08-15T10:42:32',
        featuredImage:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1723748301/wp.scarincihollenbeck/best-lawyers-in-america-scarinci-hollenbeck/best-lawyers-in-america-scarinci-hollenbeck.jpg?_i=AA',
        author: 'Scarinci Hollenbeck, LLC',
      },
    ],
  };
});
