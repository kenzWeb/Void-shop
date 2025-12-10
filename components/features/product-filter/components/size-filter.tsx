'use client'

import {ProductFilterState, ProductSize} from '@/types'
import {SIZES} from '../product-filter.constants'
import {sizeButtonStyles, sizeContainerStyles} from '../product-filter.styles'
import {FilterSection} from './filter-section'

interface SizeFilterProps {
	filters: ProductFilterState
	isExpanded: boolean
	onToggle: () => void
	onSizeChange: (size: ProductSize, enabled: boolean) => void
}

export function SizeFilter({
	filters,
	isExpanded,
	onToggle,
	onSizeChange,
}: SizeFilterProps) {
	return (
		<FilterSection title='Size' isExpanded={isExpanded} onToggle={onToggle}>
			<div className={sizeContainerStyles}>
				{SIZES.map((size) => (
					<button
						key={size}
						onClick={() => onSizeChange(size, !filters.sizes.includes(size))}
						className={sizeButtonStyles({
							isSelected: filters.sizes.includes(size),
						})}
					>
						{size}
					</button>
				))}
			</div>
		</FilterSection>
	)
}
