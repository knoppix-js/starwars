/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const { devPort } = require('./package.json');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || devPort,
    allowedHosts: ['.localhost'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('development'),
      REACT_APP_BUILD_ENV: JSON.stringify('development'),
      ...process.env,
    }),
  ],
});
