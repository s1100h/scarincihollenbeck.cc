const PERMANENT_REDIRECTS = [
  {
    source: '/basic-page/:path',
    destination: '/',
    permanent: true,
  },
  {
    source: '/form-page/:path',
    destination: '/',
    permanent: true,
  },
  {
    source: '/firm-page/:path',
    destination: '/',
    permanent: true,
  },
];

module.exports = {
  PERMANENT_REDIRECTS,
};
