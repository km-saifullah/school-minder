configDotenv() // config dotenv
import { configDotenv } from 'dotenv'
import app from './app.js'
import connectDb from './db/db.config.js'

// port and hostname
const port = process.env.PORT || 8000
const hostname = '127.0.0.1'

// connect database
connectDb()

// start the server
app.listen(port, hostname, () =>
  console.log(`Server is running on port:${port}`)
)
