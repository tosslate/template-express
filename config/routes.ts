import type { Request, Response, NextFunction, RequestHandler } from 'express'
import * as posts from '../app/controllers/posts_controller'
import { Router } from 'express'

function promisify(handler: RequestHandler) {
  return (request: Request, response: Response, next?: NextFunction) =>
    Promise.resolve(handler(request, response, next)).catch(next)
}

export function routes() {
  return Router()
    .get('/posts', promisify(posts.index))
    .get('/posts/:id', promisify(posts.show))
}
