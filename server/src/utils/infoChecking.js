const infoChecking = (
  fullName,
  email,
  password,
  confirmPassword,
  res
) => {
  if (
    [fullName, email, password, confirmPassword].some(
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
