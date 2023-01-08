import type { Knex } from 'knex'
import { environment } from 'ramaze'

const pg = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}

function knexConfig() {
  if (pg.connection) {
    return pg
  }

  return {
    client: 'sqlite3',
    connection: {
      filename: `./db/${environment}.sqlite`
    },
    useNullAsDefault: true
  }
}

export const config = knexConfig() as Knex.Config

if (environment === 'development') {
  config.debug = true
}
