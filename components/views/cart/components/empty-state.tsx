'use client'

import {Breadcrumbs, Button, Container} from '@/components/ui'
import {motion} from 'framer-motion'
import {ArrowRight, ShoppingBag} from 'lucide-react'
import Link from 'next/link'
import {BREADCRUMBS} from '../cart.constants'
import {
	emptyIconContainerStyles,
	emptyStateContainerStyles,
} from '../cart.styles'

export function EmptyState() {
	return (
		<section className='py-8'>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					className={emptyStateContainerStyles}
				>
					<div className={emptyIconContainerStyles}>
						<ShoppingBag className='h-10 w-10 text-muted' />
					</div>
					<h1 className='text-2xl font-bold'>Your cart is empty</h1>
					<p className='mt-2 text-muted'>
						Looks like you haven&apos;t added anything yet
					</p>
					<Link href='/shop'>
						<Button
							className='mt-8'
							size='lg'
							rightIcon={<ArrowRight className='h-4 w-4' />}
						>
							Start Shopping
						</Button>
					</Link>
				</motion.div>
			</Container>
		</section>
	)
}
