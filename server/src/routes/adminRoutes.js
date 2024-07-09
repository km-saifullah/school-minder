import { Router } from 'express'
import {
  createAdmin,
  getAllAdmins,
  getAdminById,
} from '../controllers/adminController.js'
import adminSchema from '../validators/adminValidator.js'
import validation from '../middlewares/validation.js'

const router = Router()

router.route('/signup').post(validation(adminSchema), createAdmin)
router.route('/').get(getAllAdmins)
router.route('/:id').get(getAdminById)

export default router
