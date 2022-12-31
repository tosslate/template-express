// import { errorHandler as error } from '../lib/errorhandler'
import { graphqlHTTP } from 'express-graphql'
import { ramaze } from 'ramaze'
import schema from '../app/graphql/schema'
import { values } from '../app/graphql/resolver'
import { routes } from './routes'

ramaze.use(routes())
// ramaze.use(error())
ramaze.use(
  '/graphql',
  graphqlHTTP({
    rootValue: values(),
    graphiql: true,
    schema
  })
)

export default ramaze
