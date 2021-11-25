export default class WebpackConfig {
  constructor() {
    process.env.BACKEND_BASE_URL = 'https://api.themoviedb.org'
  }
  runDevelopment = () => {
    process.env.NODE_ENV = 'development'
    return [require('./webpack.client.dev'), require('./webpack.server.dev')]
  }
  runProduction = () => {
    process.env.NODE_ENV = 'production'
    return [require('./webpack.client.prod'), require('./webpack.server.prod')]
  }
}
