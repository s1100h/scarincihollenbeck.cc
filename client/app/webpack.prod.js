/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Critters = require('critters-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CssCleanupPlugin = require('css-cleanup-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        test: /\.(sa|sc|c)ss$/,
      },
      {
        test: /\.(png|jpg|gif|woff|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [ 'file-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/i,
          chunks: "all",
          enforce: true,
        },
        styles: {
          name:'main',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        commons: {
          name: "commons",    
          chunks: "initial",  
          minChunks: 5,
          enforce: true,        
        }
      }
    },
    // The runtime should be in its own chunk
    runtimeChunk: {
        name: "runtime"
    },
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          module: true,
          toplevel: true,
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({}),
    ]
   },   
  entry: ['core-js/stable', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_ADMIN_SITE': JSON.stringify('https://admin.legalmarketinghouse.com'),
      'process.env.REACT_APP_CACHED_API': JSON.stringify('https://api.legalmarketinghouse.com'),
      'process.env.REACT_APP_FORMS_API': JSON.stringify('https://forms.legalmarketinghouse.com'),
      'process.env.REACT_APP_FEED_API': JSON.stringify('https://feed.legalmarketinghouse.com')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new Critters({
      mergeStylesheets: true,
      pruneSource: false,
      preload: 'media',
      compress: true,
      noscriptFallback: false,
      external: true,
      minimumExternalSize: 1660,
      keyframes: 'all',
      preloadFonts: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new CssCleanupPlugin(),
    new WorkboxPlugin.GenerateSW(),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
  ],
};