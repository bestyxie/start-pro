const path = require('path')
const commonConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')

module.exports = function(env, args) {
  const isDev = args.mode === 'development'

  return merge(commonConfig, {
    entry: {
      scrm: './scrm/index.tsx'
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      port: 8000,
      hot: false,
      liveReload: true,
      open: true,
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'eval',
  })
}