import type { QueryContext, ModelOptions } from 'objection'
import { Model } from 'objection'
import bcrypt from 'bcrypt'

function hashPassword(value: string) {
  return bcrypt.hashSync(value, 10)
}

export function SecurePassword(ModelClass: typeof Model) {
  return class extends ModelClass {
    protected password: string
    protected password_digest: string

    static get virtualAttributes() {
      return ['password']
    }

    $beforeInsert(context: QueryContext) {
      super.$beforeInsert(context)
      this.password && this.securePassword()
    }

    $beforeUpdate(options: ModelOptions, context: QueryContext) {
      super.$beforeUpdate(options, context)
      this.password && this.securePassword()
    }

    private securePassword() {
      this.password_digest = hashPassword(this.password)
      this.password = undefined
    }
  }
}
