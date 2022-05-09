const { BelongsToOneRelation } = require('objection')
const { BaseModel } = require('./base')
const { User } = require('./user')

class Post extends BaseModel {
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

module.exports = { Post }
