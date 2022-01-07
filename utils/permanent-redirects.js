const PERMANENT_REDIRECTS = [
  {
    source: '/basic-page/((?!general).*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/form-page/((?!general).*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/firm-page/((?!general).*)',
    destination: '/',
    permanent: true,
  },
];

module.exports = {
  PERMANENT_REDIRECTS,
};
