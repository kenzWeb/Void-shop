import {Breadcrumb} from '@/types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Shop', href: '/shop', isActive: true},
]

export const PRODUCT_CARD_ANIMATION = {
	initial: {opacity: 0, y: 20},
	animate: {opacity: 1, y: 0},
	getTransition: (index: number) => ({
		duration: 0.3,
		delay: index * 0.05,
		ease: [0.16, 1, 0.3, 1] as const,
	}),
}
