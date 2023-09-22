const path = require('path')
const { glob } = require('glob')

const PATHS = {
  src: path.join(__dirname, '../../src'),
  pug: path.join(__dirname, '../../src/pug'),
  js: path.join(__dirname, '../../src/js'),
  styles: path.join(__dirname, '../../src/styles'),
  assets: path.join(__dirname, '../../src/assets'),
  dist: path.join(__dirname, '../../dist'),
}
const PAGES = glob.sync(`${PATHS.pug}/**/*.pug`)

module.exports = {
  PATHS,
  PAGES,
}
