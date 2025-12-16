'use client'

import {Container} from '@/components/ui'
import {loadingSkeletonStyles} from '../cart.styles'

export function LoadingState() {
	return (
		<section className='py-8'>
			<Container>
				<div className={loadingSkeletonStyles}>
					<div className='h-8 w-48 bg-surface' />
					<div className='grid gap-8 lg:grid-cols-3'>
						<div className='space-y-4 lg:col-span-2'>
							{[1, 2, 3].map((i) => (
								<div key={i} className='flex gap-4'>
									<div className='h-32 w-32 bg-surface' />
									<div className='flex-1 space-y-2'>
										<div className='h-5 w-2/3 bg-surface' />
										<div className='h-4 w-1/3 bg-surface' />
									</div>
								</div>
							))}
						</div>
						<div className='h-80 bg-surface' />
					</div>
				</div>
			</Container>
		</section>
	)
}
