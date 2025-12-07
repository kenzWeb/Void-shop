import {Product, ProductFilterState, SortOption} from '@/types'

export interface ShopViewProps {
	products: Product[]
}

export interface PageHeaderProps {
	productCount: number
}

export interface ProductGridProps {
	products: Product[]
}

export interface EmptyStateProps {
	onReset: () => void
}

export interface UseShopReturn {
	filters: ProductFilterState
	sortOption: SortOption
	filteredProducts: Product[]
	activeFilterCount: number
	setCategory: (
		category: import('@/types').ProductCategory,
		enabled: boolean,
	) => void
	setColor: (color: import('@/types').ProductColor, enabled: boolean) => void
	setSize: (size: import('@/types').ProductSize, enabled: boolean) => void
	setPriceRange: (min: number, max: number) => void
	setSortOption: (option: SortOption) => void
	resetFilters: () => void
}
