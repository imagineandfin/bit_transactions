const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
   'main.js': './src/index.js',
   'main.css': './src/main.scss'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'public')
  },
  module: {
     rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  mode: 'production'
};


module.exports = config;