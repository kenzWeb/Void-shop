import {ProductCategory, ProductColor, ProductSize, SortOption} from '@/types'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
	[ProductCategory.Electronics]: 'Electronics',
	[ProductCategory.Clothing]: 'Clothing',
	[ProductCategory.Accessories]: 'Accessories',
	[ProductCategory.Footwear]: 'Footwear',
	[ProductCategory.Home]: 'Home',
}

export const SORT_LABELS: Record<SortOption, string> = {
	[SortOption.Newest]: 'Newest',
	[SortOption.PriceLowToHigh]: 'Price: Low to High',
	[SortOption.PriceHighToLow]: 'Price: High to Low',
	[SortOption.Popular]: 'Most Popular',
	[SortOption.Rating]: 'Highest Rated',
}

export const COLOR_HEX: Record<ProductColor, string> = {
	[ProductColor.Black]: '#000000',
	[ProductColor.White]: '#ffffff',
	[ProductColor.Gray]: '#6b7280',
	[ProductColor.Navy]: '#1e3a5f',
	[ProductColor.Red]: '#ef4444',
	[ProductColor.Green]: '#22c55e',
	[ProductColor.Blue]: '#3b82f6',
	[ProductColor.Yellow]: '#eab308',
	[ProductColor.Orange]: '#f97316',
	[ProductColor.Purple]: '#a855f7',
	[ProductColor.Pink]: '#ec4899',
	[ProductColor.Brown]: '#92400e',
	[ProductColor.Beige]: '#d4c4a8',
	[ProductColor.Olive]: '#6b7f3f',
	[ProductColor.Teal]: '#14b8a6',
}

export const SIZES: ProductSize[] = [
	ProductSize.XS,
	ProductSize.S,
	ProductSize.M,
	ProductSize.L,
	ProductSize.XL,
	ProductSize.XXL,
]

export const DRAWER_ANIMATION = {
	initial: {x: '-100%'},
	animate: {x: 0},
	exit: {x: '-100%'},
	transition: {type: 'spring', damping: 30, stiffness: 300},
} as const

export const OVERLAY_ANIMATION = {
	initial: {opacity: 0},
	animate: {opacity: 1},
	exit: {opacity: 0},
} as const

export const SECTION_ANIMATION = {
	initial: {height: 0, opacity: 0},
	animate: {height: 'auto', opacity: 1},
	exit: {height: 0, opacity: 0},
	transition: {duration: 0.2},
} as const

export const DEFAULT_EXPANDED_SECTION = 'category'
