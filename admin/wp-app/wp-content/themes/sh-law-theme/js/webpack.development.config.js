/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

// Analyze bundle size
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
});

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          module: true,
          toplevel: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  entry: {
    singleAttorney: ['core-js/stable', './src/SingleAttorney/index.js'],
    singleAdmin: ['core-js/stable', './src/SingleAdmin/index.js'],
    singlePractice: ['core-js/stable', './src/SinglePractice/index.js'],
    archiveAttorney: ['core-js/stable', './src/ArchiveAttorney/index.js'],
    archiveAdmin: ['core-js/stable', './src/ArchiveAdmin/index.js'],
    archivePractice: ['core-js/stable', './src/ArchivePractice/index.js'],
    archiveLocation: ['core-js/stable', './src/ArchiveLocation/index.js'],
    archiveCareer: ['core-js/stable', './src/ArchiveCareer/index.js'],
    category: ['core-js/stable', './src/Category/index.js'],
    frontPage: ['core-js/stable', './src/FrontPage/index.js'],
    firmPage: ['core-js/stable', './src/FirmPage/index.js'],
    firmOverview: ['core-js/stable', './src/FirmOverview/index.js'],
    page: ['core-js/stable', './src/Page/index.js'],
    covidResponse: ['core-js/stable', './src/CovidResponse/index.js'],
    page404: ['core-js/stable', './src/Page404/index.js'],
    contact: ['core-js/stable', './src/Contact/index.js'],
    search: ['core-js/stable', './src/Search/index.js'],
    single: ['core-js/stable', './src/Single/index.js'],
    author: ['core-js/stable', './src/Author/index.js'],
    indexPage: ['core-js/stable', './src/IndexPage/index.js'],
    eventGallery: ['core-js/stable', './src/EventGallery/index.js'],
    quickNews: ['core-js/stable', './src/QuickNews/index.js'],
    subscriptionPage: ['core-js/stable', './src/SubscriptionPage/index.js'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
    }),
    new Dotenv({
      path: '.env.development',
    }),
    new HtmlWebpackPlugin({
      chunks: ['subscriptionPage', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/SubscriptionPage/subscribe-index.html',
      filename: './subscribe-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['singleAttorney', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/SingleAttorney/single-attorney-index.html',
      filename: './single-attorney-index.html',
    }),    
    new HtmlWebpackPlugin({
      chunks: ['singleAdmin', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/SingleAdmin/single-admin.html',
      filename: './single-admin.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['singlePractice', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/SinglePractice/single-practice-index.html',
      filename: './single-practice-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['archiveAttorney', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/ArchiveAttorney/archive-attorney-index.html',
      filename: './archive-attorney-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['archiveAdmin', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/ArchiveAdmin/archive-admin-index.html',
      filename: './archive-admin-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['archivePractice', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/ArchivePractice/archive-practice-index.html',
      filename: './archive-practice-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['archiveLocation', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/ArchiveLocation/archive-location-index.html',
      filename: './archive-location-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['archiveCareer', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/ArchiveCareer/archive-career-index.html',
      filename: './archive-career-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['category', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/Category/category-index.html',
      filename: './category-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['frontPage', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/FrontPage/front-page-index.html',
      filename: './front-page-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['firmPage', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/FirmPage/firm-page-index.html',
      filename: './firm-page-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['firmOverview', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/FirmOverview/firm-overview-index.html',
      filename: './firm-overview-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['page', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/Page/page-index.html',
      filename: './page-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['covidResponse', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/CovidResponse/covid-response-index.html',
      filename: './covid-response-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['page404', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/Page404/page-404-index.html',
      filename: './page-404-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['contact', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/contact/contact-index.html',
      filename: './contact-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['search', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/Search/search-index.html',
      filename: './search-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['single', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/Single/single-index.html',
      filename: './single-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['author', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/Author/author-index.html',
      filename: './author-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['indexPage', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/IndexPage/index-page-index.html',
      filename: './index-page-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['quickNews', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/QuickNews/quick-news-index.html',
      filename: './quick-news-index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['eventGallery', 'vendor'],
      chunksSortMode: 'dependency',
      template: './src/EventGallery/event-gallery-index.html',
      filename: './event-gallery-index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[name].bundle.css',
    })],
};
