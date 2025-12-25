import {Breadcrumb} from '@/types'
import {Award, Star, TrendingUp} from 'lucide-react'
import {StatItem} from './best-sellers.types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Best Sellers', href: '/best-sellers', isActive: true},
]

export const STATS: StatItem[] = [
	{icon: TrendingUp, value: '50K+', label: 'Items Sold'},
	{icon: Award, value: '4.9', label: 'Avg Rating'},
	{icon: Star, value: '10K+', label: 'Reviews'},
]

export const PRODUCT_ANIMATION = {
	initial: {opacity: 0, y: 20},
	animate: {opacity: 1, y: 0},
	getTransition: (index: number) => ({
		duration: 0.3,
		delay: 0.3 + index * 0.05,
		ease: [0.16, 1, 0.3, 1] as const,
	}),
}
