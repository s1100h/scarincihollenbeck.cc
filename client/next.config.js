module.exports = {
  images: {
    domains: [
      'shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com',
      'musicesq.com',
      'scarincilawyer.com',
      'conqqqshlskopvv.nyc3.digitaloceanspaces.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/attorneys/:path*',
        destination: '/attorney/:path*',
      },
      {
        source: '/practices/:path*',
        destination: '/practice/:path*',
      },
      {
        source: '/locations/:path*',
        destination: '/location/:path*',
      },
      {
        source: '/careers/:path*',
        destination: '/career/:path*',
      },
    ];
  },
};
