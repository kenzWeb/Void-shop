import {
	ProductCategory,
	ProductColor,
	ProductFilterState,
	ProductSize,
	SortOption,
} from '@/types'

export interface ProductFilterProps {
	filters: ProductFilterState
	sortOption: SortOption
	activeFilterCount: number
	onCategoryChange: (category: ProductCategory, enabled: boolean) => void
	onColorChange: (color: ProductColor, enabled: boolean) => void
	onSizeChange: (size: ProductSize, enabled: boolean) => void
	onPriceRangeChange: (min: number, max: number) => void
	onSortChange: (option: SortOption) => void
	onReset: () => void
}

export interface ProductFilterUIProps extends ProductFilterProps {
	isOpen: boolean
	expandedSection: string | null
	onOpenDrawer: () => void
	onCloseDrawer: () => void
	onToggleSection: (section: string) => void
}

export interface UseProductFilterReturn {
	isOpen: boolean
	expandedSection: string | null
	handlers: {
		onOpenDrawer: () => void
		onCloseDrawer: () => void
		onToggleSection: (section: string) => void
	}
}

export interface FilterSectionProps {
	title: string
	isExpanded: boolean
	onToggle: () => void
	children: React.ReactNode
}
