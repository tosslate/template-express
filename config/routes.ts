import * as categories from '../app/controllers/categories_controller'
import * as posts from '../app/controllers/posts_controller'
import * as users from '../app/controllers/users_controller'
import { createRouter } from 'ramaze'

export function routes() {
  return createRouter()
    .get('/categories', categories.index)
    .get('/posts', posts.index)
    .get('/posts/:id', posts.show)
    .get('/users', users.index).routes
}
