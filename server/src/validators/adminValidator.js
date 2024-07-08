import { z } from 'zod'

const adminSchema = z.object({
  fullname: z
    .string({ required_error: 'Fullname is required' })
    .trim()
    .min(3, { message: 'Name must be at least 3 chars' })
    .max(32, { message: 'Name must be maximum 32 chars' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' })
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'password must be at least of 6 chars' }),
})

export default adminSchema
