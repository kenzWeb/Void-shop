'use client'

import {headerStyles, subtitleStyles, titleStyles} from '../new.styles'

export function PageHeader() {
	return (
		<div className={headerStyles}>
			<h1 className={titleStyles}>New Arrivals</h1>
			<p className={subtitleStyles}>The latest additions to our collection</p>
		</div>
	)
}
