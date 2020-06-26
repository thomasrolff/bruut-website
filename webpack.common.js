const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js', 
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader', // <- ERROR? 
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "img",
        },
      },
    ],
  },
};

// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.html$/,
//         use: ['html-loader'], // html-loader to automatically require files referenced in img tags
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: {
//           loader: 'file-loader', // file-loader to handle image files
//           options: {
//             name: '[name].[ext]', 
//             outputPath: 'img',
//           },
//         },
//       },
//     ],
//   },
// };