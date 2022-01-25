const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    about: './src/about.js',
    menu: './src/menu.js',
    contact: './src/contact.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Website',
    }),
  ],
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
    ],
  }
};