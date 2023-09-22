const { glob } = require('glob')
const path = require('path')

const { entries } = require('./utils/helpers')
const { PATHS } = require('./utils/constants')
const commonRules = require('./common/rules')
const commonPlugins = require('./common/plugins')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const entryFiles = glob.sync(`{${PATHS.js}/*.js,${PATHS.styles}/*.scss}`)

const config = {
  entry: entryFiles.reduce(entries, {}),
  output: {
    path: path.resolve(__dirname, PATHS.dist),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  plugins: [
    ...commonPlugins,
    new BrowserSyncPlugin({
      open: false,
      https: false,
      ui: false,
      port: 8000,
      proxy: false,
      server: {
        baseDir: `./dist`,
        serveStaticOptions: {
          extensions: ['html', 'css', 'js'],
        },
      },
      files: [
        `${PATHS.dist}/styles/*.css`,
        `${PATHS.dist}/js/*.js`,
        `${PATHS.dist}/html/*.html`,
      ],
    }),
  ],
  module: {
    rules: [...commonRules],
  },
}

module.exports = config
