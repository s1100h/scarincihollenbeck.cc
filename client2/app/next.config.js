const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass(withFonts({
  webpack(config, options) {
   return config;
  },
})));