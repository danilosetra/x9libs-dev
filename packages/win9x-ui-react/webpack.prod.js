const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, './.env.production'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
  },
  devtool: false,
});
