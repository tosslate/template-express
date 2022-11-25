import { database } from '../../config/database'
import { Model } from 'objection'

Model.knex(database)

function currentTime() {
  return new Date().toISOString()
}

export class BaseModel extends Model {
  $beforeInsert(context) {
    this.created_at = currentTime()
    this.updated_at = currentTime()
  }

  $beforeUpdate(context) {
    this.updated_at = currentTime()
  }
}
