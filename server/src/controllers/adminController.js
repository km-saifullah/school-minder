import Admin from '../models/adminModel.js'
import infoChecking from '../utils/infoChecking.js'

// @desc:  create admin
// @route: POST /api/v1/admins/signup
const createAdmin = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body

  //   check info
  infoChecking(fullname, email, password, confirmPassword, res)

  try {
    const admin = await Admin.create({
      fullname,
      email,
      password,
      confirmPassword,
    })
    return res
      .status(201)
      .json({ status: 'success', message: 'admin created', data: admin })
  } catch (error) {
    return res.status(404).json({
      status: 'failed',
      message: error.message,
    })
  }
}

export { createAdmin }
