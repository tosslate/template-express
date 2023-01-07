import type { Knex } from 'knex'
import { Model } from 'objection'
import { config } from '../../config/database'

export function connect(config: Knex.Config) {
  const knex = require('knex')
  const database = knex(config) as Knex

  Model.knex(database)
  return database
}

export const database = connect(config)
