import type { ModelOptions, QueryContext } from 'objection'
import { database } from '../../config/database'
import { Model } from 'objection'

Model.knex(database)

function currentTime() {
  return new Date().toISOString()
}

export class BaseModel extends Model {
  created_at: string
  updated_at: string

  $beforeInsert(context: QueryContext) {
    this.created_at = currentTime()
    this.updated_at = currentTime()
  }

  $beforeUpdate(opts: ModelOptions, context: QueryContext) {
    this.updated_at = currentTime()
  }
}
