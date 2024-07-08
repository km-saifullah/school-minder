const validation = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body)
    req.body = parsedBody
    next()
  } catch (err) {
    const message = err.errors[0].message
    res.status(400).json({ status: 'fail', message: message })
  }
}
export default validation
