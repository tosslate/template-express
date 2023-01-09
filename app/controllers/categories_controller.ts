import type { Request, Response } from 'express'
import { Category } from '../models'

export async function index(request: Request, response: Response) {
  const result = await Category.query()
    .withGraphFetched('children')
    .whereNull('parent_id')
    .limit(12)

  return response.json(result)
}
