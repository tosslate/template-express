const app = require('./config/application')
const PORT = process.env.PORT || 4567

app.listen(PORT, () => {
  console.log(`* Listening on http://localhost:${PORT}`)
  console.log('* Use Ctrl-C to stop')
})
