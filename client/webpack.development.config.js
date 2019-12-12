/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');

// Analyze bundle size
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
});

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8082,
    historyApiFallback:{
      index:'dist/index.html'
  },
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
        test: /\.(png|jpg|gif|woff|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
  entry: ['core-js/stable', './src/index.js'],
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
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[name].bundle.css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
  
  ],
};