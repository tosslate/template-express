const posts = require('../app/controllers/posts_controller')
const asyncHandler = require('express-async-handler')
const { Router } = require('express')

function routes() {
  return Router()
    .get('/posts', asyncHandler(posts.index))
    .get('/posts/:id', asyncHandler(posts.show))
}

module.exports = { routes }
