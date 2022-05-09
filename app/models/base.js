const { database } = require('../../config/database')
const { Model } = require('objection')

Model.knex(database)

class BaseModel extends Model {
  $beforeInsert(context) {
    this.created_at = new Date().toISOString()
    this.updated_at = new Date().toISOString()
  }

  $beforeUpdate(context) {
    this.updated_at = new Date().toISOString()
  }
}

module.exports = { BaseModel }
