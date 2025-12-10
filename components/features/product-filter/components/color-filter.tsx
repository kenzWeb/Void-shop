'use client'

import {ProductColor, ProductFilterState} from '@/types'
import {COLOR_HEX} from '../product-filter.constants'
import {colorButtonStyles, colorContainerStyles} from '../product-filter.styles'
import {FilterSection} from './filter-section'

interface ColorFilterProps {
	filters: ProductFilterState
	isExpanded: boolean
	onToggle: () => void
	onColorChange: (color: ProductColor, enabled: boolean) => void
}

export function ColorFilter({
	filters,
	isExpanded,
	onToggle,
	onColorChange,
}: ColorFilterProps) {
	return (
		<FilterSection title='Color' isExpanded={isExpanded} onToggle={onToggle}>
			<div className={colorContainerStyles}>
				{Object.entries(COLOR_HEX).map(([color, hex]) => (
					<button
						key={color}
						onClick={() =>
							onColorChange(
								color as ProductColor,
								!filters.colors.includes(color as ProductColor),
							)
						}
						className={colorButtonStyles({
							isSelected: filters.colors.includes(color as ProductColor),
						})}
						style={{backgroundColor: hex}}
						title={color}
					/>
				))}
			</div>
		</FilterSection>
	)
}
