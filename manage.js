const PORT = process.env.PORT || 4567

require('./config/application').listen(PORT, () => {
  console.log(`* Listening on http://localhost:${PORT}`)
  console.log('* Use Ctrl-C to stop')
})
