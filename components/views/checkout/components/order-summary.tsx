'use client'

import {CartItem} from '@/types'
import Image from 'next/image'
import {
	itemImageStyles,
	itemsScrollStyles,
	quantityBadgeStyles,
	summaryCardStyles,
} from '../checkout.styles'

interface OrderSummaryProps {
	items: CartItem[]
	summary: {subtotal: number; shipping: number; tax: number; total: number}
	formatPrice: (price: number) => string
}

export function OrderSummary({items, summary, formatPrice}: OrderSummaryProps) {
	return (
		<div className={summaryCardStyles}>
			<h2 className='mb-6 text-lg font-bold'>Order Summary</h2>

			<div className={itemsScrollStyles}>
				{items.map((item) => {
					const mainImage =
						item.product.images.find((img) => img.isMain) ||
						item.product.images[0]
					return (
						<div key={item.id} className='flex gap-4'>
							<div className={itemImageStyles}>
								{mainImage && (
									<Image
										src={mainImage.url}
										alt={mainImage.alt}
										fill
										sizes='64px'
										className='object-cover'
									/>
								)}
								<span className={quantityBadgeStyles}>{item.quantity}</span>
							</div>
							<div className='flex-1'>
								<p className='font-medium'>{item.product.name}</p>
								<p className='text-sm text-muted'>
									{item.size} / {item.color}
								</p>
							</div>
							<p className='font-medium'>
								{formatPrice(item.product.price * item.quantity)}
							</p>
						</div>
					)
				})}
			</div>

			<div className='mt-6 space-y-2 border-t border-border pt-6 text-sm'>
				<div className='flex justify-between'>
					<span className='text-muted'>Subtotal</span>
					<span>{formatPrice(summary.subtotal)}</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-muted'>Shipping</span>
					<span>
						{summary.shipping === 0 ? 'Free' : formatPrice(summary.shipping)}
					</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-muted'>Tax</span>
					<span>{formatPrice(summary.tax)}</span>
				</div>
				<div className='flex justify-between border-t border-border pt-2 text-base font-bold'>
					<span>Total</span>
					<span>{formatPrice(summary.total)}</span>
				</div>
			</div>
		</div>
	)
}
