import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email().min(5, { message: 'Email is required' }),
    password: z.string()
        .min(8, { message: 'Password is required' })
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[\W_]/, "Password must contain at least one special character")
        .max(20, { message: 'Password must be at most 20 characters long' })
        .trim(),
})