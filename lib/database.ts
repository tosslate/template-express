import { basename } from 'path'
const knexPath = process.argv[1]

function knexLoaded() {
  return basename(`${knexPath}`) === 'knex'
}

export function connect(config) {
  return !knexLoaded() && require('knex')(config)
}
