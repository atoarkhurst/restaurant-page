const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],  // Changed from 'style-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ['file-loader'],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({  // Add this plugin
      filename: 'styles.css',
    }),
  ],
};
