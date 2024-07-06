import { Router } from 'express'
import { createAdmin } from '../controllers/adminController.js'

const router = Router()

router.route('/signup').post(createAdmin)

export default router
