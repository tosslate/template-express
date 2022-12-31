import { Model } from 'objection'
import { Timestamps } from './concerns/timestamps'

export class Tag extends Timestamps(Model) {
  id: number
  name: string
  static tableName = 'tags'
}

// post_tags
