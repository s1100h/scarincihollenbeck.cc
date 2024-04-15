const PERMANENT_REDIRECTS = [
  {
    source: '/basic-page/:slug*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/contact-us/:slug*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/firm-page/:slug*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/funeral-announcements/:slug*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/attorneys/scarinci-hollenbeck',
    destination: '/firm-overview',
    permanent: true,
  },
  {
    source: '/location',
    destination: '/location/little-falls',
    permanent: true,
  },
  {
    source: '/attorney/:slug*',
    destination: '/attorneys/:slug*',
    permanent: true,
  },
  {
    source: '/attorneys/partners/:slug*',
    destination: '/attorneys/:slug*',
    permanent: true,
  },
  {
    source: '/attorneys/counsel/:slug*',
    destination: '/attorneys/:slug*',
    permanent: true,
  },
  {
    source: '/practices/sports-and-entertainment-law',
    destination: '/practices/entertainment-and-media',
    permanent: true,
  },
  {
    source: '/practices/sports-and-entertainment',
    destination: '/practices/entertainment-and-media',
    permanent: true,
  },
  {
    source:
      '/practices/sports-and-entertainment-law/intellectual-property-and-technology-law',
    destination: '/practices/entertainment-and-media',
    permanent: true,
  },
  {
    source: '/practices/tax-trust-and-estate-law',
    destination: '/practices/tax-trusts-estates',
    permanent: true,
  },
  {
    source: '/practices/tax-trusts-and-estates',
    destination: '/practices/tax-trusts-estates',
    permanent: true,
  },
  {
    source: '/practices/corporate-transactions-and-business-law',
    destination: '/practices/corporate-transactions-business',
    permanent: true,
  },
  {
    source: '/practices/corporate-transactions-and-business',
    destination: '/practices/corporate-transactions-business',
    permanent: true,
  },
  {
    source: '/practices/corporate-transactions-and-business-law/:slug*',
    destination: '/practices/corporate-transactions-business',
    permanent: true,
  },
  {
    source: '/practices/cyber-security-and-data-protection',
    destination: '/practices/cyber-security-data-privacy',
    permanent: true,
  },
  {
    source: '/practices/cyber-security-data-protection',
    destination: '/practices/cyber-security-data-privacy',
    permanent: true,
  },
  {
    source: '/practices/intellectual-property-technology',
    destination: '/practices/intellectual-property',
    permanent: true,
  },
  {
    source: '/practices/environmental-and-land-use',
    destination: '/practices/environmental',
    permanent: true,
  },
];

module.exports = {
  PERMANENT_REDIRECTS,
};
