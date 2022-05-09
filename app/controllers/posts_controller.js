const { Post } = require('../models/post')

async function index(request, response) {
  const result = await Post.query().limit(12)
  return response.json(result)
}

async function show(request, response) {
  const { id: postId } = request.params
  const result = await Post.query().findById(postId)

  return result
    ? response.json(result)
    : response.sendStatus(404)
}

module.exports = {
  index,
  show
}
