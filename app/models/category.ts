import { Model } from 'objection'
import { Timestamps } from './concerns/timestamps'

export class Category extends Timestamps(Model) {
  id: number
  parent_id: number
  name: string
  slug: string
  position: number
  total_posts: number
  description: string
}

// categories
