import * as categories from '../app/controllers/categories_controller'
import * as posts from '../app/controllers/posts_controller'
import { createRouter } from 'ramaze'

export function routes() {
  return createRouter()
    .get('/posts', posts.index)
    .get('/posts/:id', posts.show)
    .get('/categories', categories.index).routes
}
