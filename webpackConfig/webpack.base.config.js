const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      'common': path.resolve(__dirname, 'common'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}