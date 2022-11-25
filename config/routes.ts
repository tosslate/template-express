import * as posts from '../app/controllers/posts_controller'
import asyncHandler from 'express-async-handler'
import { Router } from 'express'

export function routes() {
  return Router().get('/posts', posts.index).get('/posts/:id', posts.show)
}
