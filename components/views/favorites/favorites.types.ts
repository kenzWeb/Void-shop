import {Breadcrumb, Product} from '@/types'

export interface FavoritesViewProps {}

export interface PageHeaderProps {
	count: number
	onClear: () => void
	hasItems: boolean
}

export interface ProductGridProps {
	products: Product[]
}

export interface EmptyStateProps {}

export interface LoadingStateProps {}

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Favorites', href: '/favorites', isActive: true},
]
