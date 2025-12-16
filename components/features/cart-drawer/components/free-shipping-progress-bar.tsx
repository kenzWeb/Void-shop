'use client'

import {formatPrice} from '@/lib/format'
import {motion} from 'framer-motion'
import {PROGRESS_BAR_ANIMATION} from '../cart-drawer.constants'
import {
	freeShippingAmountStyles,
	freeShippingContainerStyles,
	freeShippingQualifiedStyles,
	freeShippingTextStyles,
	progressBarContainerStyles,
	progressBarFillStyles,
} from '../cart-drawer.styles'
import {FreeShippingProgress as FreeShippingProgressType} from '../cart-drawer.types'

interface FreeShippingProgressBarProps {
	progress: FreeShippingProgressType
}

export function FreeShippingProgressBar({
	progress,
}: FreeShippingProgressBarProps) {
	return (
		<div className={freeShippingContainerStyles}>
			{progress.isQualified ? (
				<p className={freeShippingQualifiedStyles}>
					You qualify for free shipping!
				</p>
			) : (
				<p className={freeShippingTextStyles}>
					Add{' '}
					<span className={freeShippingAmountStyles}>
						{formatPrice(progress.amountRemaining)}
					</span>{' '}
					more for free shipping
				</p>
			)}
			<div className={progressBarContainerStyles}>
				<motion.div
					initial={PROGRESS_BAR_ANIMATION.initial}
					animate={{width: `${progress.percentage}%`}}
					transition={PROGRESS_BAR_ANIMATION.transition}
					className={progressBarFillStyles}
				/>
			</div>
		</div>
	)
}
