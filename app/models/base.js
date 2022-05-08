const { Model } = require('objection')
const { database } = require('../../config/database')

Model.knex(database)

class BaseModel extends Model {
}

module.exports = BaseModel
