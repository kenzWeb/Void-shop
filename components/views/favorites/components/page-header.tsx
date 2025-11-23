'use client'

import {
	clearButtonStyles,
	headerStyles,
	subtitleStyles,
	titleStyles,
} from '../favorites.styles'

interface PageHeaderProps {
	count: number
	onClear: () => void
	hasItems: boolean
}

export function PageHeader({count, onClear, hasItems}: PageHeaderProps) {
	return (
		<div className={headerStyles}>
			<div>
				<h1 className={titleStyles}>Favorites</h1>
				<p className={subtitleStyles}>{count} saved items</p>
			</div>
			{hasItems && (
				<button onClick={onClear} className={clearButtonStyles}>
					Clear all
				</button>
			)}
		</div>
	)
}
