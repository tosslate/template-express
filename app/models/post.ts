import { Timestamps } from './concerns/timestamps'
import { Model } from 'objection'
import { User } from './user'

export class Post extends Timestamps(Model) {
  id: number
  category_id: number
  user_id: number
  title: string
  slug: string
  excerpt: string
  body: string
  published_at: string
  trashed_at: string

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
