'use client'

import {
	emptyStateButtonStyles,
	emptyStateStyles,
	emptyStateTextStyles,
} from '../shop.styles'

interface EmptyStateProps {
	onReset: () => void
}

export function EmptyState({onReset}: EmptyStateProps) {
	return (
		<div className={emptyStateStyles}>
			<p className={emptyStateTextStyles}>No products match your filters</p>
			<button onClick={onReset} className={emptyStateButtonStyles}>
				Clear all filters
			</button>
		</div>
	)
}
