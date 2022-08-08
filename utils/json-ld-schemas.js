import { CURRENT_DOMAIN, SITE_TITLE, SITE_EMAIL } from 'utils/constants';

const siteDescription = `${SITE_TITLE} is an alternative to a National 250 law firm. With offices in New Jersey, New York City, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.`;

export const articleSchema = (body) => ({
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'LegalService',
        name: SITE_TITLE,
        description: siteDescription,
        url: CURRENT_DOMAIN,
        image: `${CURRENT_DOMAIN}/images/no-image-found-diamond-750x350.png`,
        priceRange: '$$$$',
        telephone: '201-896-4100',
        email: SITE_EMAIL,
        hasMap:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.030148184838!2d-74.1972675845902!3d40.87121257931485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fe482a4faf77%3A0x45efdc59ca4a127a!2zMTUwIENsb3ZlIFJkICM5dGgsIExpdHRsZSBGYWxscywgTkogMDc0MjQsINCh0KjQkA!5e0!3m2!1sen!2sus!4v1659972988720!5m2!1sen!2sus',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Little Falls',
          addressRegion: 'NJ',
          postalCode: '07424',
          streetAddress: '150 Clove Road, 9th Floor',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '40.871378894707746',
          longitude: '-74.19506817327908',
        },
        sameAs: [
          'https://www.facebook.com/ScarinciHollenbeck/',
          'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
          'https://twitter.com/s_h_law',
        ],
        openingHours: 'Mo,Tu,We,Th,Fr, 8:300-6:00',
      },
      ...body,
    },
  ],
});
export const buildBusinessSchema = () => ({
  '@graph': [
    {
      '@context': 'http://schema.org',
      '@type': 'LegalService',
      name: SITE_TITLE,
      description: siteDescription,
      url: CURRENT_DOMAIN,
      image: `${CURRENT_DOMAIN}/images/no-image-found-diamond-750x350.png`,
      priceRange: '$$$$',
      telephone: '201-896-4100',
      email: SITE_EMAIL,
      hasMap:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.030148184838!2d-74.1972675845902!3d40.87121257931485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fe482a4faf77%3A0x45efdc59ca4a127a!2zMTUwIENsb3ZlIFJkICM5dGgsIExpdHRsZSBGYWxscywgTkogMDc0MjQsINCh0KjQkA!5e0!3m2!1sen!2sus!4v1659972988720!5m2!1sen!2sus',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Little Falls',
        addressRegion: 'NJ',
        postalCode: '07424',
        streetAddress: '150 Clove Road, 9th Floor',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.871378894707746',
        longitude: '-74.19506817327908',
      },
      sameAs: [
        'https://www.facebook.com/ScarinciHollenbeck/',
        'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
        'https://twitter.com/s_h_law',
      ],
      openingHours: 'Mo,Tu,We,Th,Fr, 8:300-6:00',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://scarincihollenbeck.com/#website',
      url: 'https://scarincihollenbeck.com/',
      name: SITE_TITLE,
      description: siteDescription,
      publisher: {
        '@id': `${CURRENT_DOMAIN}/#organization`,
      },
      inLanguage: 'en-US',
    },
  ],
});

export const buildLocationSchema = (location) => ({
  '@context': 'http://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_TITLE,
  url: CURRENT_DOMAIN,
  logo: '/images/no-image-found-diamond.png',
  image: location.image,
  address: {
    '@type': 'PostalAddress',
    streetAddress: location.streetAddress,
    addressLocality: location.addressLocality,
    addressRegion: location.addressRegion,
    postalCode: location.postalCode,
    addressCountry: location.addressCountry,
    telephone: location.telephone,
  },
  openingHours: ['Mo-Fr 08:00-18:00'],
  hasmap: location.mapLink,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: location.latitude,
    longitude: location.longitude,
  },
  priceRange: '$$$$',
  sameAs: [
    'https://www.facebook.com/ScarinciHollenbeck/',
    'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
    'https://twitter.com/s_h_law',
  ],
});

export const buildAttorneyProfileSchema = (name, url, imageUrl, socialMediaLinks, jobTitle) => {
  let links;

  if (socialMediaLinks) {
    links = socialMediaLinks.map((link) => link.url);

    if (socialMediaLinks.length === 0) {
      links = [
        'https://www.facebook.com/ScarinciHollenbeck/',
        'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
      ];
    }
  }

  return {
    '@graph': [
      {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name,
        url,
        image: imageUrl,
        sameAs: links,
        jobTitle,
        worksFor: {
          '@type': 'Organization',
          name: SITE_TITLE,
        },
      },
    ],
  };
};

export const STANDARD_SCHEMA = `{"@context":"https://schema.org/","@type":"WebSite","name":"${SITE_TITLE}","url":"${CURRENT_DOMAIN}","potentialAction":{"@type":"SearchAction","target":"{search_term_string}","query-input":"required name=search_term_string"}}`;
