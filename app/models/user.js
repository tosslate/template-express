const { hashPassword } = require('../../lib/secure-password')
const { BaseModel } = require('./base')

class User extends BaseModel {
  static tableName = 'users'

  set password(value) {
    this.password = value
  }

  $beforeInsert(context) {
    super.$beforeInsert(context)

    if (this.password) {
      this.password_digest = hashPassword(this.password)
    }
  }
}

module.exports = { User }
