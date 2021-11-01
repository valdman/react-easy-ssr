const webpack = require('webpack')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { paths } = require('../scripts/utils')

module.exports = {
  name: 'client',
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  entry: {
    bundle: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcClient]
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: 'bundle.js',
    publicPath: paths.publicPath
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: require('./loaders.client.js'),
  plugins: [
    new LoadablePlugin(),
    new WebpackManifestPlugin({
      seed: {
        name: 'mywebsite',
        short_name: 'mywebsite',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
      }
    }),
    new MiniCssExtractPlugin(),
    new WriteFileWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'true'
    })
  ],
  stats: 'minimal'
}
