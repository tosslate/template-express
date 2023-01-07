import type { Knex } from 'knex'
import { basename } from 'path'

const knexPath = process.argv[1]

function knexLoaded() {
  return basename(`${knexPath}`) === 'knex'
}

export const loaded = knexLoaded()

export function connect(config: Knex.Config) {
  return !loaded && require('knex')(config) as Knex
}
