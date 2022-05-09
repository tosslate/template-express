const { basename } = require('path')
const knexPath = process.argv[1]

function knexLoaded() {
  return basename(`${knexPath}`) === 'knex'
}

function connect(config) {
  return !knexLoaded() && require('knex')(config)
}

module.exports = { connect }
