const infoChecking = (fullName, email, password, res) => {
  if ([fullName, email, password].some((field) => field?.trim() === '')) {
    return res.status(400).json({
      status: 'failed',
      message: 'Please include all required',
    })
  }
}

export default infoChecking
