'use client'

import {ProductFilterUI} from './product-filter'
import {ProductFilterProps} from './product-filter.types'
import {useProductFilter} from './use-product-filter'

export function ProductFilter(props: ProductFilterProps) {
	const {isOpen, expandedSection, handlers} = useProductFilter()

	return (
		<ProductFilterUI
			{...props}
			isOpen={isOpen}
			expandedSection={expandedSection}
			onOpenDrawer={handlers.onOpenDrawer}
			onCloseDrawer={handlers.onCloseDrawer}
			onToggleSection={handlers.onToggleSection}
		/>
	)
}
