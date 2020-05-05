const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

// Extract CSS from bundle and put in own file
const extractCssChunks = new ExtractCssChunks({
  filename: "[name].css",
  chunkFilename: "[id].css",
  hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
  orderWarning: true, // Disable to remove warnings about conflicting order between imports
  reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
  cssModules: true, // if you use cssModules, this can help.
  minimize: true
});

// Minify JS/CSS files
const uglifyJsPlugin = new UglifyJsPlugin({
  uglifyOptions: {
    output: {
      comments: false
    },
    compress: {
      comparisons: true
    }
  }
});

// Analyze bundle size
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: "static"
});

// utilize dot env
const dotEnv = new Dotenv({
  path: '.env.production',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
         ExtractCssChunks.loader,
         "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
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
    ]
  },
  optimization: {
   minimizer: [uglifyJsPlugin]
  },
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [htmlWebpackPlugin, extractCssChunks, dotEnv]
};