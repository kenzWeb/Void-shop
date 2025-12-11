'use client'

import {Button} from '@/components/ui'
import {SortOption} from '@/types'
import {SlidersHorizontal} from 'lucide-react'
import {SORT_LABELS} from '../product-filter.constants'
import {
	filterCountBadgeStyles,
	sortContainerStyles,
	sortLabelStyles,
	sortSelectStyles,
	toolbarContainerStyles,
} from '../product-filter.styles'

interface FilterToolbarProps {
	activeFilterCount: number
	sortOption: string
	onOpenDrawer: () => void
	onSortChange: (option: SortOption) => void
}

export function FilterToolbar({
	activeFilterCount,
	sortOption,
	onOpenDrawer,
	onSortChange,
}: FilterToolbarProps) {
	return (
		<div className={toolbarContainerStyles}>
			<Button
				variant='outline'
				onClick={onOpenDrawer}
				leftIcon={<SlidersHorizontal className='h-4 w-4' />}
			>
				Filters
				{activeFilterCount > 0 && (
					<span className={filterCountBadgeStyles}>{activeFilterCount}</span>
				)}
			</Button>

			<div className={sortContainerStyles}>
				<span className={sortLabelStyles}>Sort by:</span>
				<select
					value={sortOption}
					onChange={(e) => onSortChange(e.target.value as SortOption)}
					className={sortSelectStyles}
				>
					{Object.entries(SORT_LABELS).map(([value, label]) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}
