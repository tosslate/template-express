const express = require('express')
const leancloud = require('leanengine')
const httpProxy = require('http-proxy-middleware')

const server = express()
const { PORT, LEANCLOUD_APP_PORT } = process.env
const SERVER_PORT = LEANCLOUD_APP_PORT || PORT || 4567
const { LEANCLOUD_APP_ID, LEANCLOUD_APP_KEY, LEANCLOUD_APP_MASTER_KEY } = process.env

leancloud.init({
  appId: LEANCLOUD_APP_ID,
  appKey: LEANCLOUD_APP_KEY,
  masterKey: LEANCLOUD_APP_MASTER_KEY
})

server.use(leancloud.express())
server.use('/api', httpProxy({
  target: 'https://api.douban.com',
  headers: {
    'Referer': 'https://www.douban.com'
  },
  pathRewrite: {
    '^/api': '/v2'
  },
  changeOrigin: true
}))

server.listen(SERVER_PORT, () => {
  console.log(`* Listening on http://localhost:${SERVER_PORT}`)
  console.log('* Use Ctrl-C to stop')
})
