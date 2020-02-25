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
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin'); //brotli
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const path = require('path');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, 'src')
}

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
    chunkFilename: '[contenthash].chunk.js',
    jsonpScriptType: 'text/javascript',
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
      prefetch: ['*.css', '*.tff'],
      preload: ['*.css', '*.tff'],
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].chunk.css',
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
    new BrotliPlugin({ //brotli plugin
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg|jpg|png)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new ScriptExtHtmlWebpackPlugin({
      dynamicChunks: {
        defer: /chunk/,
        position: 'body'
      },
      defaultAttribute: 'defer'
    }),
    new ResourceHintWebpackPlugin(),    
  ],
};