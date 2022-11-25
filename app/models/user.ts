import type { QueryContext } from 'objection'
import { hashPassword } from '../../lib/secure-password'
import { BaseModel } from './base'

export class User extends BaseModel {
  id: number
  password: string
  password_digest: string

  static tableName = 'users'
  static get virtualAttributes() {
    return ['password']
  }

  $beforeInsert(context: QueryContext) {
    super.$beforeInsert(context)

    if (this.password) {
      this.password_digest = hashPassword(this.password)
      this.password = undefined
    }
  }
}
