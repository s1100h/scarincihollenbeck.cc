/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 7400,
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
  entry: {
    // singleAttorney: ['core-js/stable', './app/SingleAttorney/index.js'],
    // singleAdmin: ['core-js/stable', './app/SingleAdmin/index.js'],
    // singlePractice: ['core-js/stable', './app/SinglePractice/index.js'],  
    // singleCareer: ['core-js/stable', './app/SingleCareer/index.js'],  
    // singleLocation: ['core-js/stable', './app/SingleLocation/index.js'],    
    page: './app/Page/index.js',
    single: './app/Single/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new Dotenv({
      path: '.env.development',
    }),
    // new HtmlWebpackPlugin({
    //   chunks: ['singleAttorney', 'vendor'],
    //   chunksSortMode: 'dependency',
    //   template: './app/SingleAttorney/attorney-index.html',
    //   filename: './attorney-index.html',
    // }),    
    // new HtmlWebpackPlugin({
    //   chunks: ['singleAdmin', 'vendor'],
    //   chunksSortMode: 'dependency',
    //   template: './app/SingleAdmin/admin-index.html',
    //   filename: './admin-index.html',
    // }),
    // new HtmlWebpackPlugin({
    //   chunks: ['singlePractice', 'vendor'],
    //   chunksSortMode: 'dependency',
    //   template: './app/SinglePractice/practice-index.html',
    //   filename: './practice-index.html',
    // }),
    // new HtmlWebpackPlugin({
    //     chunks: ['singleCareer', 'vendor'],
    //     chunksSortMode: 'dependency',
    //     template: './app/SinglePractice/career-index.html',
    //     filename: './career-index.html',
    // }),
    // new HtmlWebpackPlugin({
    //     chunks: ['singleLocation', 'vendor'],
    //     chunksSortMode: 'dependency',
    //     template: './app/SinglePractice/location-index.html',
    //     filename: './location-index.html',
    // }),
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