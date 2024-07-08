import { Router } from 'express'
import { createAdmin } from '../controllers/adminController.js'
import adminSchema from '../validators/adminValidator.js'
import validation from '../middlewares/validation.js'

const router = Router()

router.route('/signup').post(validation(adminSchema), createAdmin)

export default router
