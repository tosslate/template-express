const { errorHandler } = require('../lib/errorhandler')
const { graphqlHTTP } = require('express-graphql')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const schema = require('../app/graphql/schema')
const resolver = require('../app/graphql/resolver')
const { routes } = require('./routes')
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(routes())
app.use(errorHandler())
app.use(
  '/graphql',
  graphqlHTTP({
    rootValue: resolver.values(),
    graphiql: true,
    schema
  })
)

module.exports = app
