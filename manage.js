manage

const express = require('express')
const server = express()
const { PORT, LEANCLOUD_APP_PORT } = process.env
const SERVER_PORT = LEANCLOUD_APP_PORT || PORT || 4567

server.listen(SERVER_PORT, () => {
  console.log(`* Listening on http://localhost:${SERVER_PORT}`)
  console.log('* Use Ctrl-C to stop')
})
