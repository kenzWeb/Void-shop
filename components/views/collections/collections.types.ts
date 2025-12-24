import {ProductCategory} from '@/types'

export interface CollectionsViewProps {}

export interface PageHeaderProps {}

export interface CollectionCardProps {
	id: ProductCategory
	name: string
	description: string
	count: number
	index: number
}

export interface CollectionItem {
	id: ProductCategory
	name: string
	description: string
	count: number
}
