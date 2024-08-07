import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const adminSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, 'You need to provide your fullname'],
    },
    email: {
      type: String,
      require: [true, 'Please enter your email'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: [true, 'Please enter a valid password'],
      set: (value) => bcrypt.hashSync(value, 10),
    },
    image: {
      type: String,
    },
    isAuthorised: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: Date,
  }
)

const Admin = mongoose.model('Admin', adminSchema)

export default Admin
