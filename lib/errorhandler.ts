import type { Request, Response, NextFunction } from 'express'
import { Unauthorized, NotFound } from '../app/helpers/response'

export function isUnauthorizedError({ name }: Error) {
  return name === 'UnauthorizedError'
}

export function isNotFoundError({ name }: Error) {
  return name === 'NotFoundError'
}

export function errorHandler() {
  return function middleware(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    if (isUnauthorizedError(error)) {
      return Unauthorized(response)
    }

    if (isNotFoundError(error)) {
      return NotFound(response)
    }

    next()
  }
}
