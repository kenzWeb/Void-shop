'use client'

import {emptyStateStyles} from '../new.styles'

export function EmptyState() {
	return (
		<div className={emptyStateStyles}>
			<p className='text-lg text-muted'>
				No new arrivals at the moment. Check back soon!
			</p>
		</div>
	)
}
