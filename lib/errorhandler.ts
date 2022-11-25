import type { Request, Response, NextFunction } from 'express'

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
    if (isNotFoundError(error)) {
      return response.sendStatus(404)
    }

    next()
  }
}
