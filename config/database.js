const { environment } = require('./environment')
const { connect } = require('../lib/database')
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
const database = connect(config)

module.exports = {
  database,
  config
}
