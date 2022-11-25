import { buildSchema } from 'graphql'

export default buildSchema(`
type Query {
  hello(name: String = "stranger"): String
  goodbye: String
}
`)
