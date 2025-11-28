import {Breadcrumb} from '@/types'
import {z} from 'zod'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Login', href: '/login', isActive: true},
]

export const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const DEMO_CREDENTIALS = {
	email: 'demo@voidshop.com',
	password: 'demo123',
}
