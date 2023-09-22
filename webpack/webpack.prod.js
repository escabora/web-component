const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { glob } = require('glob')
const path = require('path')

const { entries } = require('./utils/helpers')
const { PATHS } = require('./utils/constants')
const commonRules = require('./common/rules')
const commonPlugins = require('./common/plugins')

const entryFiles = glob.sync(`{${PATHS.js}/*.js,${PATHS.styles}/*.scss}`)

const config = {
  entry: entryFiles.reduce(entries, {}),
  output: {
    path: path.resolve(__dirname, PATHS.dist),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  plugins: [new CleanWebpackPlugin(), ...commonPlugins],
  module: {
    rules: [...commonRules],
  },
}

module.exports = config
