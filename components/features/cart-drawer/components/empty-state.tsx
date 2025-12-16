'use client'

import {Button} from '@/components/ui'
import {motion} from 'framer-motion'
import {ArrowRight, ShoppingBag} from 'lucide-react'
import {EMPTY_STATE_ANIMATION} from '../cart-drawer.constants'
import {
	emptyStateContainerStyles,
	emptyStateIconContainerStyles,
	emptyStateIconStyles,
	emptyStateSubtitleStyles,
	emptyStateTitleStyles,
} from '../cart-drawer.styles'

interface EmptyStateProps {
	onClose: () => void
}

export function EmptyState({onClose}: EmptyStateProps) {
	return (
		<div className={emptyStateContainerStyles}>
			<motion.div
				initial={EMPTY_STATE_ANIMATION.initial}
				animate={EMPTY_STATE_ANIMATION.animate}
				transition={{delay: EMPTY_STATE_ANIMATION.delay}}
				className={emptyStateIconContainerStyles}
			>
				<ShoppingBag className={emptyStateIconStyles} />
			</motion.div>
			<h3 className={emptyStateTitleStyles}>Your cart is empty</h3>
			<p className={emptyStateSubtitleStyles}>Add items to get started</p>
			<Button
				onClick={onClose}
				className='mt-6'
				rightIcon={<ArrowRight className='h-4 w-4' />}
			>
				Continue Shopping
			</Button>
		</div>
	)
}
