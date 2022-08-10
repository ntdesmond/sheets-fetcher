const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /files[/\\].+\.(jpg|jpeg|png|gif|mp3|svg|pdf)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash:5][ext][query]',
        },
      },
      {
        resourceQuery: /inline/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new ESLintWebpackPlugin({
      extensions: ['ts', 'tsx'],
      exclude: 'node_modules',
    }),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[fullhash].bundle.js',
    publicPath: '/',
    clean: true,
  },
};
