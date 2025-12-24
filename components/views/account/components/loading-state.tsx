'use client'

import {Container} from '@/components/ui'
import {loadingSkeletonStyles} from '../account.styles'

export function LoadingState() {
	return (
		<section className='py-8'>
			<Container>
				<div className={loadingSkeletonStyles}>
					<div className='h-8 w-48 bg-surface' />
					<div className='grid gap-6 lg:grid-cols-3'>
						<div className='h-48 bg-surface lg:col-span-1' />
						<div className='h-96 bg-surface lg:col-span-2' />
					</div>
				</div>
			</Container>
		</section>
	)
}
