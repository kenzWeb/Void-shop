import {StatItem} from './home.types'

export const HERO_STATS: StatItem[] = [
	{label: 'Products', value: '500+'},
	{label: 'Categories', value: '12'},
	{label: 'Countries', value: '45+'},
	{label: 'Customers', value: '10K+'},
]

export const CONTAINER_VARIANTS = {
	hidden: {opacity: 0},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
}

export const ITEM_VARIANTS = {
	hidden: {opacity: 0, y: 20},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1] as const,
		},
	},
}

export const STATS_ANIMATION = {
	initial: {opacity: 0, y: 40},
	animate: {opacity: 1, y: 0},
	transition: {duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const},
}

export const UNDERLINE_ANIMATION = {
	initial: {width: 0},
	animate: {width: '100%'},
	transition: {duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const},
}

export const PRODUCT_CARD_ANIMATION = {
	initial: {opacity: 0, y: 20},
	whileInView: {opacity: 1, y: 0},
	viewport: {once: true},
	getTransition: (index: number) => ({
		duration: 0.5,
		delay: index * 0.1,
		ease: [0.16, 1, 0.3, 1] as const,
	}),
}
