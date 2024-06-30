import { configDotenv } from 'dotenv'

configDotenv() // config dotenv

const port = process.env.PORT || 8000
const hostname = '127.0.0.1'
const dbUrl = process.env.DATABASE_URI

export { port, hostname, dbUrl }
