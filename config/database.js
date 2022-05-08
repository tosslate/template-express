const { environment } = require('./environment')
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

const config = knexConfig()
const database = require('knex')(config)

module.exports = {
  database,
  config
}
