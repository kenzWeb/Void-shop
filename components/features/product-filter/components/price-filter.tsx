'use client'

import {ProductFilterState} from '@/types'
import {
	priceContainerStyles,
	priceDividerStyles,
	priceFieldContainerStyles,
	priceInputContainerStyles,
	priceInputStyles,
	priceLabelStyles,
} from '../product-filter.styles'
import {FilterSection} from './filter-section'

interface PriceFilterProps {
	filters: ProductFilterState
	isExpanded: boolean
	onToggle: () => void
	onPriceRangeChange: (min: number, max: number) => void
}

export function PriceFilter({
	filters,
	isExpanded,
	onToggle,
	onPriceRangeChange,
}: PriceFilterProps) {
	return (
		<FilterSection
			title='Price Range'
			isExpanded={isExpanded}
			onToggle={onToggle}
		>
			<div className={priceContainerStyles}>
				<div className={priceInputContainerStyles}>
					<div className={priceFieldContainerStyles}>
						<label className={priceLabelStyles}>Min</label>
						<input
							type='number'
							value={filters.priceRange.min}
							onChange={(e) =>
								onPriceRangeChange(
									Number(e.target.value),
									filters.priceRange.max,
								)
							}
							className={priceInputStyles}
							min={0}
						/>
					</div>
					<span className={priceDividerStyles}>—</span>
					<div className={priceFieldContainerStyles}>
						<label className={priceLabelStyles}>Max</label>
						<input
							type='number'
							value={filters.priceRange.max}
							onChange={(e) =>
								onPriceRangeChange(
									filters.priceRange.min,
									Number(e.target.value),
								)
							}
							className={priceInputStyles}
							min={0}
						/>
					</div>
				</div>
			</div>
		</FilterSection>
	)
}
