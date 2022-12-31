import { environment } from './environment'
import { connect } from '../lib/database'

const databaseUrl = process.env.DATABASE_URL

function knexConfig() {
  if (databaseUrl) {
    return {
      client: 'pg',
      connection: databaseUrl
    }
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

// import { database } from '../../config/database'
// Model.knex(database)
