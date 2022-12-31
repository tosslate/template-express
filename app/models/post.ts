import { Timestamps } from './concerns/timestamps'
import { Category } from './category'
import { Model } from 'objection'
import { User } from './user'
import { Tag } from './tag'

export class Post extends Timestamps(Model) {
  id: number
  slug: string
  title: string
  excerpt: string
  body: string
  user_id: number
  category_id: number
  published_at: string
  trashed_at: string

  static tableName = 'posts'
  static relationMappings = () => ({
    category: {
      modelClass: Category,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'posts.category_id',
        to: 'categories.id'
      }
    },
    user: {
      modelClass: User,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'posts.user_id',
        to: 'users.id'
      }
    },
    tags: {
      modelClass: Tag,
      relation: Model.ManyToManyRelation,
      join: {
        through: {
          from: 'post_tags.post_id',
          to: 'post_tags.tag_id'
        },
        from: 'posts.id',
        to: 'tags.id'
      }
    }
  })
}
