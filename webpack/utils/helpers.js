const { PATHS, PAGES } = require('./constants')

const entries = (acc, file) => {
  const dirname = file.split('/').slice(-1)[0].split('.')[0]
  acc[dirname] = dirname in acc ? acc[dirname].concat(file) : [file]
  return acc
}

const entriesPages = PAGES.reduce((acc, file) => {
  const dirname = file.split('/pages')[1]
  acc[dirname] = dirname in acc ? (acc[dirname] = file) : file

  return acc
}, {})

module.exports = {
  entries,
  entriesPages,
}
