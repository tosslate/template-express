const BaseModel = require('./base')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  $beforeInsert(context) {
    this.created_at = new Date().toISOString()
  }
}

module.exports = User
