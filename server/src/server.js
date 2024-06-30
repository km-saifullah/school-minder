import app from './app.js'
import { hostname, port } from './config/index.js'
import connectDb from './db/db.config.js'


// connect database
connectDb()

// start the server
app.listen(port, hostname, () =>
  console.log(`Server is running on port:${port}`)
)
