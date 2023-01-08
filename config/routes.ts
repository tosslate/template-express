import * as categories from '../app/controllers/categories_controller'
import * as posts from '../app/controllers/posts_controller'
import * as users from '../app/controllers/users_controller'
import { createRouter } from 'ramaze'
import '../app/helpers/database'

export function routes() {
  return createRouter()
    .get('/posts', posts.index)
    .get('/posts/:id', posts.show)
    .get('/users', users.index)
    .get('/users/:id', users.show)
    .get('/categories', categories.index).routes
}
