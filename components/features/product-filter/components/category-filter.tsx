'use client'

import {ProductCategory, ProductFilterState} from '@/types'
import {CATEGORY_LABELS} from '../product-filter.constants'
import {
	categoryCheckboxStyles,
	categoryContainerStyles,
	categoryLabelStyles,
	categoryTextStyles,
} from '../product-filter.styles'
import {FilterSection} from './filter-section'

interface CategoryFilterProps {
	filters: ProductFilterState
	isExpanded: boolean
	onToggle: () => void
	onCategoryChange: (category: ProductCategory, enabled: boolean) => void
}

export function CategoryFilter({
	filters,
	isExpanded,
	onToggle,
	onCategoryChange,
}: CategoryFilterProps) {
	return (
		<FilterSection title='Category' isExpanded={isExpanded} onToggle={onToggle}>
			<div className={categoryContainerStyles}>
				{Object.entries(CATEGORY_LABELS).map(([value, label]) => (
					<label key={value} className={categoryLabelStyles}>
						<input
							type='checkbox'
							checked={filters.categories.includes(value as ProductCategory)}
							onChange={(e) =>
								onCategoryChange(value as ProductCategory, e.target.checked)
							}
							className={categoryCheckboxStyles}
						/>
						<span className={categoryTextStyles}>{label}</span>
					</label>
				))}
			</div>
		</FilterSection>
	)
}
