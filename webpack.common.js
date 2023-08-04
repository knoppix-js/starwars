/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const maxFileSize = 2 * 1024 * 1024;

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      app: path.resolve(__dirname, './src/app'),
      entities: path.resolve(__dirname, './src/entities'),
      features: path.resolve(__dirname, './src/features'),
      widgets: path.resolve(__dirname, './src/widgets'),
      pages: path.resolve(__dirname, './src/pages'),
      shared: path.resolve(__dirname, './src/shared'),
      process: path.resolve(__dirname, './src/process'),
    },
  },
  entry: {
    polyfill: '@babel/polyfill',
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].[contenthash].js`,
    publicPath: '/',
  },
  performance: {
    maxEntrypointSize: maxFileSize,
    maxAssetSize: maxFileSize,
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff2?|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `fonts/[name].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].css`,
      chunkFilename: `[name].[contenthash].css`,
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', filter: (file_path) => !file_path.includes('index.html') }],
    }),
    autoprefixer,
  ],
};
