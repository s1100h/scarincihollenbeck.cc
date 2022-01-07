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
];

module.exports = {
  PERMANENT_REDIRECTS,
};
