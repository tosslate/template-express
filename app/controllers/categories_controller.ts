import type { Request, Response } from 'express'
import { Category } from '../models/category'

export async function index(request: Request, response: Response) {
  const result = await Category.query().limit(12)
  return response.json(result)
}
