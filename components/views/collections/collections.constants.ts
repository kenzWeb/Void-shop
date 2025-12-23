import {Breadcrumb, ProductCategory} from '@/types'
import {CollectionItem} from './collections.types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Collections', href: '/collections', isActive: true},
]

export const COLLECTIONS: CollectionItem[] = [
	{
		id: ProductCategory.Clothing,
		name: 'Clothing',
		description: 'Premium apparel for the modern minimalist',
		count: 45,
	},
	{
		id: ProductCategory.Footwear,
		name: 'Footwear',
		description: 'Performance meets style',
		count: 23,
	},
	{
		id: ProductCategory.Accessories,
		name: 'Accessories',
		description: 'Essential finishing touches',
		count: 38,
	},
	{
		id: ProductCategory.Electronics,
		name: 'Electronics',
		description: 'Tech-forward essentials',
		count: 15,
	},
	{
		id: ProductCategory.Home,
		name: 'Home',
		description: 'Minimalist living spaces',
		count: 29,
	},
]
