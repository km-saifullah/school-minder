import mongoose, { Schema } from 'mongoose'

const adminSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirmPassword: {
      type: String,
      require: true,
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
