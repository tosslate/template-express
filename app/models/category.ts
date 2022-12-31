import { Timestamps } from './concerns/timestamps'
import { Model } from 'objection'

export class Category extends Timestamps(Model) {
  id: number
  name: string
  slug: string
  position: number
  description: string
  total_posts: number
  parent_id: number

  static tableName = 'categories'
  static relationMappings = () => ({
    parent: {
      modelClass: Category,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'categories.parent_id',
        to: 'categories.id'
      }
    },
    children: {
      modelClass: Category,
      relation: Model.HasManyRelation,
      join: {
        from: 'categories.id',
        to: 'categories.parent_id'
      }
    }
  })
}
