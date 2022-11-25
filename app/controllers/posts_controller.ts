import postProps from '../helpers/props/post'
import { Post } from '../models/post'

export async function index(request, response) {
  const result = await Post.query().withGraphFetched('user').limit(12)
  return response.json(postProps.eachTransform(result))
}

export async function show(request, response) {
  const { id: postId } = request.params
  const result = await Post.query().withGraphFetched('user').findById(postId)

  return result
    ? response.json(postProps.transform(result))
    : response.sendStatus(404)
}
