const { hashPassword } = require('../../lib/secure-password')
const { BaseModel } = require('./base')

class User extends BaseModel {
  static tableName = 'users'

  static get virtualAttributes() {
    return ['password']
  }

  $beforeInsert(context) {
    super.$beforeInsert(context)

    if (this.password) {
      this.password_digest = hashPassword(this.password)
      this.password = undefined
    }
  }
}

module.exports = { User }
