import { buildSchema } from 'graphql'

export const schema = buildSchema(`
  type Query {
    hello(name: String = "stranger"): String
    goodbye: String
  }
`)
