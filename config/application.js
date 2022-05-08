const { graphqlHTTP } = require('express-graphql')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const schema = require('../app/graphql/schema')
const { routes } = require('../config/routes')

function errorHandler(error, request, response, next) {
  if (error.name === 'UnauthorizedError') {
    return response.status(401).json({
      message: error.message
    })
  }

  next()
}

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(routes())
app.use('/graphql', graphqlHTTP({
  rootValue: {
    hello: () => 'Hello world!'
  },
  graphiql: true,
  schema,
}))

module.exports = app
