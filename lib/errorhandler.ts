import type { Request, Response, NextFunction } from 'express'

export function errorHandler() {
  return function middleware(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    next()
  }
}
