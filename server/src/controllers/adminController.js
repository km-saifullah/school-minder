import Admin from '../models/adminModel.js'

// @desc:  create admin
// @route: POST /api/v1/admins/signup
const createAdmin = async (req, res) => {
  const { fullname, email, password } = req.body
  try {
    const userFound = await Admin.findOne({ email: email })
    if (userFound != null) {
      res.status(400).json({ status: 'fail', message: 'user already exist' })
    } else {
      const admin = await Admin.create({
        fullname,
        email,
        password,
      })
      return res
        .status(201)
        .json({ status: 'success', message: 'admin created', data: admin })
    }
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'server error',
      errorMessage: error.message,
    })
  }
}

export { createAdmin }
