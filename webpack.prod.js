/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: { chunks: 'all' },
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify('production'),
      ...process.env,
    }),
  ],
});
