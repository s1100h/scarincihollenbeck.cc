const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

module.exports = withFonts(withCss(
  withSass({
    webpack(config, options) {
      // Unshift polyfills in main entrypoint.
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js']) {
          entries['main.js'].unshift('./client/polyfills.js');
        }
        return entries;
      };
      
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  }),
));
