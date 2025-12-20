import {Breadcrumb} from '@/types'
import {z} from 'zod'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Cart', href: '/cart', isActive: false},
	{label: 'Checkout', href: '/checkout', isActive: true},
]

export const checkoutSchema = z.object({
	email: z.string().email('Invalid email'),
	firstName: z.string().min(2, 'Min 2 characters'),
	lastName: z.string().min(2, 'Min 2 characters'),
	address: z.string().min(5, 'Min 5 characters'),
	city: z.string().min(2, 'Min 2 characters'),
	postalCode: z.string().min(4, 'Min 4 characters'),
	country: z.string().min(2, 'Select country'),
	phone: z.string().min(10, 'Min 10 digits'),
	cardNumber: z.string().regex(/^\d{16}$/, '16 digits required'),
	cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'MM/YY format'),
	cardCvc: z.string().regex(/^\d{3,4}$/, '3-4 digits'),
	cardName: z.string().min(2, 'Required'),
})

export function formatPrice(price: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price)
}
