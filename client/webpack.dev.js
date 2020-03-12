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
const path = require('path');

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
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
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
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  devtool: false,
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise',
      fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
    }),
    new Dotenv({
      path: '.env',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
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
      // Don't inline critical font-face rules, but preload the font URLs:
      preloadFonts: true,
      // additionalStylesheets: 'test'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new CssCleanupPlugin()
    // new BundleAnalyzerPlugin()
  ],
};