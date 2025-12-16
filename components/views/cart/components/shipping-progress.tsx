'use client'

import {motion} from 'framer-motion'
import {
	freeShippingBannerStyles,
	progressBarContainerStyles,
	shippingProgressStyles,
} from '../cart.styles'

interface ShippingProgressProps {
	amountToFreeShipping: number
	progressPercent: number
	formatPrice: (price: number) => string
}

export function ShippingProgress({
	amountToFreeShipping,
	progressPercent,
	formatPrice,
}: ShippingProgressProps) {
	if (amountToFreeShipping > 0) {
		return (
			<div className={shippingProgressStyles}>
				<p className='text-sm'>
					Add{' '}
					<span className='font-bold'>{formatPrice(amountToFreeShipping)}</span>{' '}
					more for free shipping
				</p>
				<div className={progressBarContainerStyles}>
					<motion.div
						initial={{width: 0}}
						animate={{width: `${progressPercent}%`}}
						className='h-full bg-accent'
					/>
				</div>
			</div>
		)
	}

	return (
		<div className={freeShippingBannerStyles}>
			<p className='text-sm font-medium text-accent'>
				You qualify for free shipping!
			</p>
		</div>
	)
}
