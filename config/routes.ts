// import type { Request, Response, NextFunction, RequestHandler } from 'express'
import * as posts from '../app/controllers/posts_controller'
import { createRouter } from 'ramaze'

export function routes() {
  return createRouter().get('/posts', posts.index).get('/posts/:id', posts.show)
    .routes
}
