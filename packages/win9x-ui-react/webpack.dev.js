const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env.development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
});
