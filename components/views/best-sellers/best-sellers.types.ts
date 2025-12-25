import {Product} from '@/types'
import {LucideIcon} from 'lucide-react'

export interface BestSellersViewProps {
	products: Product[]
}

export interface PageHeaderProps {}

export interface StatsBarProps {
	stats: StatItem[]
}

export interface StatItem {
	icon: LucideIcon
	value: string
	label: string
}

export interface ProductGridProps {
	products: Product[]
}

export interface EmptyStateProps {}
