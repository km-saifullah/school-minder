const infoChecking = (
  fullName,
  studentId,
  email,
  password,
  confirmPassword,
  res
) => {
  if (
    [fullName, studentId, email, password, confirmPassword].some(
      (field) => field?.trim() === ""
    )
  ) {
    return res.status(400).json({
      status: "failed",
      message: "You need to include all required",
    });
  }
};

export default infoChecking;
