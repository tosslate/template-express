const { config } = require('./config/database')

module.exports = {
  ...config,
  migrations: {
    directory: './db/migrate'
  }
}
