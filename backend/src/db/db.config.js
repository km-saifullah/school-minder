import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'

// configure dotenv
configDotenv()

const DB_URI = process.env.DATABASE_URI

const connectDb = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log('DB Connected....!')
  } catch (error) {
    console.log(error.message)
  }
}

export default connectDb
