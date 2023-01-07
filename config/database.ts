import { loaded, connect } from '../lib/database'
import { environment } from 'ramaze'
import { Model } from 'objection'

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

export const config = knexConfig()
export const database = connect(config)

loaded && Model.knex(database)
