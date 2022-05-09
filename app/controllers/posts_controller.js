const { Post } = require('../models/post')

async function index(request, response) {
  const posts = await Post.query().limit(12)
  return response.json(posts)
}

async function show(request, response) {
  const { id: postId } = request.params
  const post = await Post.query().findById(postId)

  return response.json(post)
}

module.exports = {
  index,
  show
}
