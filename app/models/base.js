const { database } = require('../../config/database')
const { Model } = require('objection')

Model.knex(database)

function currentTime() {
  return new Date().toISOString()
}

class BaseModel extends Model {
  $beforeInsert(context) {
    this.created_at = currentTime()
    this.updated_at = currentTime()
  }

  $beforeUpdate(context) {
    this.updated_at = currentTime()
  }
}

module.exports = { BaseModel }
