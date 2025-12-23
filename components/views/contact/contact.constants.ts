import {Breadcrumb} from '@/types'
import {LucideIcon} from 'lucide-react'
import {z} from 'zod'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Contact', href: '/contact', isActive: true},
]

export const contactSchema = z.object({
	name: z.string().min(2, 'Name is required'),
	email: z.string().email('Invalid email address'),
	subject: z.string().min(5, 'Subject is required'),
	message: z.string().min(20, 'Message must be at least 20 characters'),
})

export interface ContactInfoItem {
	icon: LucideIcon
	label: string
	value: string
	href: string
}
