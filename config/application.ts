import { graphqlHTTP } from 'express-graphql'
import { values } from '../app/graphql/resolver'
import { schema } from '../app/graphql/schema'
import { routes } from './routes'
import { ramaze } from 'ramaze'

ramaze.use(routes())
ramaze.use(
  '/graphql',
  graphqlHTTP({
    rootValue: values(),
    graphiql: true,
    schema
  })
)

export default ramaze
