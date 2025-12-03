import {Product} from '@/types'

export interface HomeViewProps {
	featuredProducts: Product[]
}

export interface HeroSectionProps {}

export interface StatItem {
	label: string
	value: string
}

export interface StatsGridProps {
	stats: StatItem[]
}

export interface FeaturedProductsProps {
	products: Product[]
}
