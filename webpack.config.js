const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // RegEx test for .css files
        use: ['style-loader', 'css-loader'], // Loaders to use
      },
    ],
  },
};
