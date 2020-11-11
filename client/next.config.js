
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')(['next-ga']);

module.exports = withTM();
