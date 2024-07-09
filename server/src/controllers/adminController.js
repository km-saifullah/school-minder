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

      const newAdmin = await Admin.findById(admin._id).select('-password')

      return res
        .status(201)
        .json({ status: 'success', message: 'admin created', data: newAdmin })
    }
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'server error',
      errorMessage: error.message,
    })
  }
}

// @desc:  get all admin
// @route: GET /api/v1/admins
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select('-password')

    return res.status(200).json({
      status: 'success',
      results: admins.length,
      message: 'all admins information',
      data: admins,
    })
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Internal Server Error' })
  }
}

// @desc:  get admin by id
// @route: GET /api/v1/admins/:id
const getAdminById = async (req, res) => {
  try {
    const id = req.params.id

    const admin = await Admin.findById(id).select('-password')

    if (admin) {
      return res
        .status(200)
        .json({ status: 'success', message: 'user found', data: admin })
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'fail', message: 'Internal Server Error' })
  }
}

export { createAdmin, getAllAdmins, getAdminById }
