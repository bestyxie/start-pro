const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const dotenv = require('dotenv')
const fs = require('fs')

const PROJECT_PATH = path.resolve(__dirname, '../')
const dotenvFile = path.resolve(PROJECT_PATH, `./.env.${process.env.NODE_ENV}`)

dotenv.config({
  path: fs.existsSync(dotenvFile)
    ? dotenvFile
    : this.resolve(PROJECT_PATH, './.env')
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        exclude: /node_nodules/,
        use: [
          'url-loader?limit=10000',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [PROJECT_PATH, path.resolve(PROJECT_PATH, 'node_modules')],
    alias: {
      '@common': path.resolve(PROJECT_PATH, 'common'),
      '@config': path.resolve(PROJECT_PATH, 'config'),
      '@': path.resolve(PROJECT_PATH, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(process.env.ENV),
      },
    }),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
