import app from './app.js'
import { hostname, port } from './config/index.js'
import connectDb from './db/db.config.js'

app.listen(port, hostname, () => {
  console.log(`Server is running on port:${port}`)
  connectDb()
})
