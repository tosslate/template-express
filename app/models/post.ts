import type { BelongsToOneRelation } from 'objection'
import { BaseModel } from './base'
import { User } from './user'

export class Post extends BaseModel {
  static tableName = 'posts'
  static relationMappings = {
    user: {
      modelClass: User,
      relation: BelongsToOneRelation,
      join: {
        from: 'posts.user_id',
        to: 'users.id'
      }
    }
  }
}
