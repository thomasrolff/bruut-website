const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. js -> css DOM injection
          'css-loader', // 2. css -> js
          'sass-loader' // 1. sass -> css
        ],
      }
    ]
  }
});

// const path = require('path');
// const common = require('./webpack.common');
// const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = merge(common, {
//   mode: 'development',
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       minify: false,
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           "style-loader", // 3. inject styles -> DOM (different in prod)
//           "css-loader", // 2. css -> js
//           "sass-loader", // 1. scss -> css 
//         ],
//       },
//     ],
//   },
// });