import { Model } from 'objection'
import { Timestamps } from './concerns/timestamps'

export class User extends Timestamps(Model) {
  id: number
  name: string
  email: string
  avatar_url: string
  homepage: string
  bio: string
  static tableName = 'users'
}

// 3|password_digest|varchar(255)|1||0
