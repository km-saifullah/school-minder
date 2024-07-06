import { Router } from 'express'
import { createAdmin } from '../controllers/adminController.js'

const router = Router()

router.route('/').get(createAdmin)

export default router
