'use client'

import {TrendingUp} from 'lucide-react'
import {
	emptyIconStyles,
	emptyStateStyles,
	emptySubtitleStyles,
	emptyTitleStyles,
} from '../best-sellers.styles'

export function EmptyState() {
	return (
		<div className={emptyStateStyles}>
			<TrendingUp className={emptyIconStyles} />
			<p className={emptyTitleStyles}>No best sellers at the moment</p>
			<p className={emptySubtitleStyles}>
				Check back soon for our top-rated products
			</p>
		</div>
	)
}
