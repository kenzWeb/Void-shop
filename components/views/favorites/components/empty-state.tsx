'use client'

import {Button} from '@/components/ui'
import {motion} from 'framer-motion'
import {ArrowRight, Heart} from 'lucide-react'
import Link from 'next/link'
import {
	emptyContainerStyles,
	emptyIconContainerStyles,
	emptyIconStyles,
	emptySubtitleStyles,
	emptyTitleStyles,
} from '../favorites.styles'

export function EmptyState() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			className={emptyContainerStyles}
		>
			<div className={emptyIconContainerStyles}>
				<Heart className={emptyIconStyles} />
			</div>
			<h2 className={emptyTitleStyles}>No favorites yet</h2>
			<p className={emptySubtitleStyles}>Start adding items to your wishlist</p>
			<Link href='/shop'>
				<Button className='mt-6' rightIcon={<ArrowRight className='h-4 w-4' />}>
					Browse Products
				</Button>
			</Link>
		</motion.div>
	)
}
