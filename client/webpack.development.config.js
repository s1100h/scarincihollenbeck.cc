/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require("workbox-webpack-plugin");
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')

const path = require('path');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8082,
    historyApiFallback:{
      index:'dist/index.html'
    },
  },
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
          chunks: "all"
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
          minChunks: 2        
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
      path: '.env.development',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg|jpg|png)$/,
      threshold: 8192,
      minRatio: 0.8
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg|jpg|png)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),    
    // create service workers for main files 
    new GenerateSW({
      maximumFileSizeToCacheInBytes: 100000000,
      chunks: ["main", "vendors"]
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.eot$/.test(entry)) return 'font';
        if (/\.tff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        if (/\.jpg$/.test(entry)) return 'image';
        if (/\.svg$/.test(entry)) return 'image';
        if (/\.gif$/.test(entry)) return 'image';
        return 'script';
      },
      include: 'allChunks'
    }),
    // new PurgecssPlugin({
    //   paths: glob.sync(path.join(__dirname, 'src/*.html')),
    // }),
  ],
};