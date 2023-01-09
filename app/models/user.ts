import { SecurePassword } from './concerns/secure-password'
import { Timestamps } from './concerns/timestamps'
import { Model } from 'objection'
import { Post } from './post'

export class User extends SecurePassword(Timestamps(Model)) {
  id: number
  name: string
  email: string
  avatar_url: string
  homepage: string
  bio: string

  static tableName = 'users'
  static relationMappings = () => ({
    posts: {
      modelClass: Post,
      relation: Model.HasManyRelation,
      join: {
        from: 'users.id',
        to: 'posts.user_id'
      }
    }
  })
}
