// @desc:  show all students
// @route: GET /api/v1/students
const getAllStudents = (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "All students", data: "" });
};

// @desc:  get a single student
// @route: GET /api/v1/students/:id
const getSingleStudent = (req, res) => {};

// @desc:  create a student
// @route: POST /api/v1/students
const createStudent = (req, res) => {
  const { fullname, studentId, email, password, confirmPassword, gender } =
    req.body;
};

// @desc:  update a student
// @route: PATCH /api/v1/students/:id
const updateStudent = (req, res) => {};

// @desc:  delete a student
// @route: DELETE /api/v1/students/:id
const deleteStudent = (req, res) => {};

export {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
