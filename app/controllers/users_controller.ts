import type { Request, Response } from 'express'
import { User } from '../models'

export async function index(request: Request, response: Response) {
  const result = await User.query().limit(12)
  return response.json(result)
}

export async function show(request: Request, response: Response) {
  return response.sendStatus(404)
}
