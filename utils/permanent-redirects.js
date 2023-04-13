const PERMANENT_REDIRECTS = [
  {
    source: '/basic-page/:slug*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/form-page/:slug*',
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
    source: '/attorney/ronald-s-bienstock',
    destination: '/attorneys/ronald-s-bienstock',
    permanent: true,
  },
];

module.exports = {
  PERMANENT_REDIRECTS,
};
