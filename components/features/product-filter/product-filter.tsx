'use client'

import {AnimatePresence, motion} from 'framer-motion'
import {FilterDrawer, FilterToolbar} from './components'
import {OVERLAY_ANIMATION} from './product-filter.constants'
import {overlayStyles} from './product-filter.styles'
import {ProductFilterUIProps} from './product-filter.types'

export function ProductFilterUI({
	filters,
	sortOption,
	activeFilterCount,
	isOpen,
	expandedSection,
	onCategoryChange,
	onColorChange,
	onSizeChange,
	onPriceRangeChange,
	onSortChange,
	onReset,
	onOpenDrawer,
	onCloseDrawer,
	onToggleSection,
}: ProductFilterUIProps) {
	return (
		<>
			<FilterToolbar
				activeFilterCount={activeFilterCount}
				sortOption={sortOption}
				onOpenDrawer={onOpenDrawer}
				onSortChange={onSortChange}
			/>

			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={OVERLAY_ANIMATION.initial}
							animate={OVERLAY_ANIMATION.animate}
							exit={OVERLAY_ANIMATION.exit}
							onClick={onCloseDrawer}
							className={overlayStyles}
						/>

						<FilterDrawer
							filters={filters}
							expandedSection={expandedSection}
							onCategoryChange={onCategoryChange}
							onColorChange={onColorChange}
							onSizeChange={onSizeChange}
							onPriceRangeChange={onPriceRangeChange}
							onReset={onReset}
							onCloseDrawer={onCloseDrawer}
							onToggleSection={onToggleSection}
						/>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
