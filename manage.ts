import { PORT } from './config/environment'
import app from './config/application'

app.listen(PORT, () => {
  console.log(`* Listening on http://localhost:${PORT}`)
  console.log('* Use Ctrl-C to stop')
})
