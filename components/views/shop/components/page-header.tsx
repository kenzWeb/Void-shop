'use client'

import {
	headerContainerStyles,
	headerSubtitleStyles,
	headerTitleStyles,
} from '../shop.styles'

interface PageHeaderProps {
	productCount: number
}

export function PageHeader({productCount}: PageHeaderProps) {
	return (
		<div className={headerContainerStyles}>
			<h1 className={headerTitleStyles}>All Products</h1>
			<p className={headerSubtitleStyles}>{productCount} products</p>
		</div>
	)
}
