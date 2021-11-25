import nodeExternals from 'webpack-node-externals'
import webpack from 'webpack'
import { paths } from '../scripts/utils'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import LoadablePlugin from '@loadable/webpack-plugin'

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  entry: {
    server: [require.resolve('core-js/stable'), require.resolve('regenerator-runtime/runtime'), paths.srcServer]
  },
  output: {
    path: paths.serverBuild,
    filename: 'index.js',
    publicPath: paths.publicPath,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
    // alias: {
    //   'react-dom': '@hot-loader/react-dom'
    // }
  },
  module: require('./loaders.server.js'),
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.BROWSER': 'false',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BACKEND_BASE_URL': JSON.stringify(process.env.BACKEND_BASE_URL)
    })
  ],
  externals: [nodeExternals()],
  stats: 'minimal'
}
