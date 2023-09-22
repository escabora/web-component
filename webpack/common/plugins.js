const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { PATHS } = require('../utils/constants')
const { entriesPages } = require('../utils/helpers')

const plugins = [
  new OptimizeCSSAssets(),
  new MiniCssExtractPlugin({
    filename: '/styles/[name].css',
    chunkFilename: '/styles/[name].css',
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: `${PATHS.assets}/`,
        to: `${PATHS.dist}/assets/`,
      },
    ],
  }),
]

for (const key in entriesPages) {
  key !== 'undefined' &&
    plugins.push(
      new HtmlWebpackPlugin({
        template: `${entriesPages[key]}`,
        filename: `${PATHS.dist + key.replace('pug', 'html')}`,
        inject: false,
        templateParameters: {
          host: process.env.HOST_ENV,
        },
      })
    )
}

module.exports = plugins
