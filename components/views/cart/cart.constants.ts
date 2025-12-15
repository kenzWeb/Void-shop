import {Breadcrumb} from '@/types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Cart', href: '/cart', isActive: true},
]

export function formatPrice(price: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(price)
}
