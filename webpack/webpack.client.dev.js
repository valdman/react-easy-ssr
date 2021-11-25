import webpack from 'webpack'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import LoadablePlugin from '@loadable/webpack-plugin'
import { paths } from '../scripts/utils'

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
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'true',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL)
    })
  ],
  stats: 'minimal'
}
