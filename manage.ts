import app from './config/application'
const PORT = process.env.PORT || 3323

app.listen(PORT, () => {
  console.log(`* Listening on http://localhost:${PORT}`)
  console.log('* Use Ctrl-C to stop')
})
