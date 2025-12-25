'use client'

import {emptyStateStyles} from '../sale.styles'

export function EmptyState() {
	return (
		<div className={emptyStateStyles}>
			<p className='text-lg text-muted'>
				No items on sale right now. Check back soon!
			</p>
		</div>
	)
}
