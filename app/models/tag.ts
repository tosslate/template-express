import { Timestamps } from './concerns/timestamps'
import { Model } from 'objection'
import { Post } from './post'

export class Tag extends Timestamps(Model) {
  id: number
  name: string

  static tableName = 'tags'
  static relationMappings = () => ({
    posts: {
      modelClass: Post,
      relation: Model.ManyToManyRelation,
      join: {
        through: {
          from: 'post_tags.tag_id',
          to: 'post_tags.post_id'
        },
        from: 'tags.id',
        to: 'posts.id'
      }
    }
  })
}
