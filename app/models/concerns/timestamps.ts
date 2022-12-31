import type { QueryContext, ModelOptions } from 'objection'
import { Model } from 'objection'

function currentTime() {
  return new Date().toISOString()
}

export function Timestamps(ModelClass: typeof Model) {
  return class extends ModelClass {
    created_at: string
    updated_at: string

    $beforeInsert(context: QueryContext) {
      super.$beforeInsert(context)
      this.created_at = currentTime()
      this.updated_at = currentTime()
    }

    $beforeUpdate(options: ModelOptions, context: QueryContext) {
      super.$beforeUpdate(options, context)
      this.updated_at = currentTime()
    }
  }
}
