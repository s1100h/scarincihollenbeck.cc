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
  mode: 'production',
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
    singleAttorney: './app/SingleAttorney/index.js',
    singleAdmin: './app/SingleAdmin/index.js',
    singlePractice: './app/SinglePractice/index.js',  
    singleCareer: './app/SingleCareer/index.js',  
    singleLocation: './app/SingleLocation/index.js',    
    page: './app/Page/index.js',
    single: './app/Single/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/wp-content/themes/shlaw-theme--light/src/dist/',
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   Promise: 'es6-promise',
    //   fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
    // }),
    new Dotenv({
      path: '.env.production',
    }),
    new HtmlWebpackPlugin({
      template: './app/SingleAttorney/attorney-index.html',
      filename: './attorney-index.html',
    }),    
    new HtmlWebpackPlugin({
      template: './app/SingleAdmin/admin-index.html',
      filename: './admin-index.html',
    }),
    new HtmlWebpackPlugin({
      template: './app/SinglePractice/practice-index.html',
      filename: './practice-index.html',
    }),
    new HtmlWebpackPlugin({
        template: './app/SingleCareer/career-index.html',
        filename: './career-index.html',
    }),
    new HtmlWebpackPlugin({
        template: './app/SingleLocation/location-index.html',
        filename: './location-index.html',
    }),
    new HtmlWebpackPlugin({
      template: './app/Page/page-index.html',
      filename: './page-index.html',
    }),
    new HtmlWebpackPlugin({
      template: './app/Single/single-index.html',
      filename: './single-index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[name].bundle.css',
    })],
};