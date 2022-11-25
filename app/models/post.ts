import { Model } from 'objection'
import { BaseModel } from './base'
import { User } from './user'

export class Post extends BaseModel {
  id: number
  user_id: number
  title: string
  slug: string

  static tableName = 'posts'
  static relationMappings = {
    user: {
      modelClass: User,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'posts.user_id',
        to: 'users.id'
      }
    }
  }
}
