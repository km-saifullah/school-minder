import mongoose, { Schema } from 'mongoose'

const studentSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
})

const Student = mongoose.model('Student', studentSchema)

export default Student
