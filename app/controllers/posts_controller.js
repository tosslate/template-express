const { database } = require('../../config/database')

async function index(request, response) {
  const result = await database.select()
  return response.json({})
}

async function show(request, response) {
  const result = await database.select()
  return response.json({})
}
