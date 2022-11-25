import { errorHandler } from '../lib/errorhandler'
import { graphqlHTTP } from 'express-graphql'
import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import schema from '../app/graphql/schema'
import resolver from '../app/graphql/resolver'
import { routes } from './routes'

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

export default app
