import express from 'express'
import { rateLimit } from 'express-rate-limit'
import morgan from 'morgan'
import adminRouter from './routes/adminRoutes.js'
import studentRouter from './routes/studentRoutes.js'

const app = express()

// request limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 20,
  message: 'You have exceded maximum request per minute',
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(limiter)

// admin routes
app.use('/api/v1/admins', adminRouter)

// student routes
app.use('/api/v1/students', studentRouter)

export default app
