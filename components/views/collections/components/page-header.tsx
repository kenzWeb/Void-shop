'use client'

import {
	headerContainerStyles,
	headerSubtitleStyles,
	headerTitleStyles,
} from '../collections.styles'

export function PageHeader() {
	return (
		<div className={headerContainerStyles}>
			<h1 className={headerTitleStyles}>Collections</h1>
			<p className={headerSubtitleStyles}>Explore our curated categories</p>
		</div>
	)
}
