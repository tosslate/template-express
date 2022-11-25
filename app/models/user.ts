import { hashPassword } from '../../lib/secure-password'
import { BaseModel } from './base'

export class User extends BaseModel {
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
