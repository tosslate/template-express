const { basename } = require('path')

function knexCommand() {
  return basename(process.argv[1]) === 'knex'
}

function connect(config) {
  return (!knexCommand()) && require('knex')(config)
}

module.exports = { connect }
