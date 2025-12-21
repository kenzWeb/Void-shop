'use client'

import {Container} from '@/components/ui'
import {motion} from 'framer-motion'
import {Check} from 'lucide-react'
import {checkIconContainerStyles, orderCompleteStyles} from '../checkout.styles'

export function OrderComplete() {
	return (
		<section className='py-20'>
			<Container>
				<motion.div
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					className={orderCompleteStyles}
				>
					<div className={checkIconContainerStyles}>
						<Check className='h-10 w-10 text-accent-foreground' />
					</div>
					<h1 className='text-3xl font-bold'>Order Confirmed!</h1>
					<p className='mt-4 text-muted'>
						Thank you for your purchase. Your order has been placed
						successfully.
					</p>
					<p className='mt-2 text-sm text-muted'>Redirecting to home...</p>
				</motion.div>
			</Container>
		</section>
	)
}
