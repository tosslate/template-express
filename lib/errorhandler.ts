function isNotFoundError({ name }) {
  return name === 'NotFoundError'
}

function isUnauthorizedError({ name }) {
  return name === 'UnauthorizedError'
}

function errorHandler(error, request, response, next) {
  if (isNotFoundError(error)) {
    return response.sendStatus(404)
  }

  next()
}

module.exports = {
  errorHandler: () => errorHandler
}
