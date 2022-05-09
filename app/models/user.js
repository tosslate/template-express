const { hashPassword } = require('../../lib/secure-password')
const { BaseModel } = require('./base')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  $beforeInsert(context) {
    super.$beforeInsert(context)

    if (this.password_digest) {
      this.password_digest = hashPassword(this.password_digest)
    }
  }
}

module.exports = { User }
