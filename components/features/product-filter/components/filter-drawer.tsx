'use client'

import {Button, IconButton} from '@/components/ui'
import {motion} from 'framer-motion'
import {X} from 'lucide-react'
import {DRAWER_ANIMATION} from '../product-filter.constants'
import {
	contentContainerStyles,
	drawerContainerStyles,
	footerActionsStyles,
	footerStyles,
	headerStyles,
	headerTitleStyles,
} from '../product-filter.styles'
import {ProductFilterUIProps} from '../product-filter.types'
import {CategoryFilter} from './category-filter'
import {ColorFilter} from './color-filter'
import {PriceFilter} from './price-filter'
import {SizeFilter} from './size-filter'

interface FilterDrawerProps {
	filters: ProductFilterUIProps['filters']
	expandedSection: string | null
	onCategoryChange: ProductFilterUIProps['onCategoryChange']
	onColorChange: ProductFilterUIProps['onColorChange']
	onSizeChange: ProductFilterUIProps['onSizeChange']
	onPriceRangeChange: ProductFilterUIProps['onPriceRangeChange']
	onReset: () => void
	onCloseDrawer: () => void
	onToggleSection: (section: string) => void
}

export function FilterDrawer({
	filters,
	expandedSection,
	onCategoryChange,
	onColorChange,
	onSizeChange,
	onPriceRangeChange,
	onReset,
	onCloseDrawer,
	onToggleSection,
}: FilterDrawerProps) {
	return (
		<motion.aside
			initial={DRAWER_ANIMATION.initial}
			animate={DRAWER_ANIMATION.animate}
			exit={DRAWER_ANIMATION.exit}
			transition={DRAWER_ANIMATION.transition}
			className={drawerContainerStyles}
		>
			<header className={headerStyles}>
				<h2 className={headerTitleStyles}>Filters</h2>
				<IconButton
					icon={<X className='h-full w-full' />}
					label='Close filters'
					onClick={onCloseDrawer}
				/>
			</header>

			<div className={contentContainerStyles}>
				<CategoryFilter
					filters={filters}
					isExpanded={expandedSection === 'category'}
					onToggle={() => onToggleSection('category')}
					onCategoryChange={onCategoryChange}
				/>

				<ColorFilter
					filters={filters}
					isExpanded={expandedSection === 'color'}
					onToggle={() => onToggleSection('color')}
					onColorChange={onColorChange}
				/>

				<SizeFilter
					filters={filters}
					isExpanded={expandedSection === 'size'}
					onToggle={() => onToggleSection('size')}
					onSizeChange={onSizeChange}
				/>

				<PriceFilter
					filters={filters}
					isExpanded={expandedSection === 'price'}
					onToggle={() => onToggleSection('price')}
					onPriceRangeChange={onPriceRangeChange}
				/>
			</div>

			<footer className={footerStyles}>
				<div className={footerActionsStyles}>
					<Button
						variant='outline'
						fullWidth
						onClick={() => {
							onReset()
							onCloseDrawer()
						}}
					>
						Clear All
					</Button>
					<Button fullWidth onClick={onCloseDrawer}>
						Apply Filters
					</Button>
				</div>
			</footer>
		</motion.aside>
	)
}
