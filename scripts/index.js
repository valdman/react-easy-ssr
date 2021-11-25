require('@babel/register')({
  only: ['./scripts', './webpack'],
  extensions: ['.js'],
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
})
const path = require('path')

require(path.join(__dirname, process.argv[2]))
