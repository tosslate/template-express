import type { Request, Response } from 'express'
import { Post } from '../models'
import { transformKeys } from '../serializers/post_serializer'

export async function index(request: Request, response: Response) {
  const result = await Post.query()
    .withGraphFetched('[category, user, tags]')
    .limit(12)
  return response.json(result.map(transformKeys))
}

export async function show(request: Request, response: Response) {
  const { id: postId } = request.params
  const result = await Post.query()
    .withGraphFetched('[category, user, tags]')
    .findById(postId)

  return result
    ? response.json(transformKeys(result))
    : response.sendStatus(404)
}
