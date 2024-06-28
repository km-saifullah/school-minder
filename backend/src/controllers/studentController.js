import Student from '../models/studentModel.js'
import infoChecking from '../utils/infoChecking.js'

// @desc:  show all students
// @route: GET /api/v1/students
const getAllStudents = async (req, res) => {
  let students = await Student.find()
  return res
    .status(200)
    .json({
      status: 'success',
      results: students.length,
      message: 'All students',
      data: students,
    })
}

// @desc:  get a single student
// @route: GET /api/v1/students/:id
const getSingleStudent = (req, res) => {}

// @desc:  create a student
// @route: POST /api/v1/students
const createStudent = async (req, res) => {
  const { fullName, email, password, confirmPassword, gender } = req.body

  // required field checking
  infoChecking(fullName, email, password, confirmPassword, res)

  try {
    const student = await Student.create({
      fullName,
      email,
      password,
      confirmPassword,
      gender,
    })
    return res
      .status(201)
      .json({ status: 'success', message: 'user created', data: student })
  } catch (error) {
    return res.status(404).json({
      status: 'failed',
      message: error.message,
    })
  }
}

// @desc:  update a student
// @route: PATCH /api/v1/students/:id
const updateStudent = (req, res) => {}

// @desc:  delete a student
// @route: DELETE /api/v1/students/:id
const deleteStudent = (req, res) => {}

export {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
}
