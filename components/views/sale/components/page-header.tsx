'use client'

import {
	badgeStyles,
	headerStyles,
	subtitleStyles,
	titleStyles,
} from '../sale.styles'

export function PageHeader() {
	return (
		<div className={headerStyles}>
			<div className={badgeStyles}>
				<span className='text-sm font-bold uppercase tracking-wider'>
					Limited Time
				</span>
			</div>
			<h1 className={titleStyles}>Sale</h1>
			<p className={subtitleStyles}>Up to 50% off select items</p>
		</div>
	)
}
