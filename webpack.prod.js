const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPLugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. extract css into files
          'css-loader', // 2. css -> js
          'sass-loader', // 1. sass -> css
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}), 
  ],
  // optimization: {
  //   minimizer: [
  //     new OptimizeCssAssetsPlugin(),
  //     new TerserPLugin(),
  //   ]
  // },
});



// const path = require('path');
// const common = require('./webpack.common');
// const merge = require('webpack-merge');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = merge(common, {
//   mode: 'production',
//   output: {
//     filename: 'main.[hash].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   optimization: {
//     minimizer: [
//       new OptimizeCssAssetsPlugin(),
//       new TerserPlugin(),
//       new HtmlWebpackPlugin({
//         template: './src/index.html',
//       }),
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "[name].[contentHash].css",
//       chunkFilename: "[id].css"
//     }),
//     new CleanWebpackPlugin(),
//   ],
//   module: {
//     rules:[
//       {
//         test: /\.scss$/,
//         use: [
//           MiniCssExtractPlugin.loader, // 3. Extract css into files instead of injecting script tag
//           "css-loader", // 2. css -> js
//           "sass-loader", // 1. scss -> css 
//         ],
//       },
//     ],
//   },
// });