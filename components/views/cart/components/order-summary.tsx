'use client'

import {Button} from '@/components/ui'
import {Tag} from 'lucide-react'
import Link from 'next/link'
import {promoInputStyles, summaryCardStyles} from '../cart.styles'
import {CartSummaryInfo} from '../cart.types'

interface OrderSummaryProps {
	summary: CartSummaryInfo
	promoCode: string
	promoApplied: boolean
	onPromoChange: (code: string) => void
	onApplyPromo: () => void
	formatPrice: (price: number) => string
}

export function OrderSummary({
	summary,
	promoCode,
	promoApplied,
	onPromoChange,
	onApplyPromo,
	formatPrice,
}: OrderSummaryProps) {
	return (
		<div className={summaryCardStyles}>
			<h2 className='mb-6 text-lg font-bold'>Order Summary</h2>

			<div className='mb-6'>
				<label className='mb-2 block text-sm font-medium'>Promo Code</label>
				<div className='flex gap-2'>
					<div className='relative flex-1'>
						<Tag className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted' />
						<input
							type='text'
							value={promoCode}
							onChange={(e) => onPromoChange(e.target.value)}
							placeholder='Enter code'
							disabled={promoApplied}
							className={promoInputStyles(promoApplied)}
						/>
					</div>
					<Button
						variant='outline'
						onClick={onApplyPromo}
						disabled={promoApplied || !promoCode}
					>
						{promoApplied ? 'Applied' : 'Apply'}
					</Button>
				</div>
				{promoApplied && (
					<p className='mt-2 text-xs text-accent'>VOID10 applied - 10% off!</p>
				)}
				<p className='mt-2 text-xs text-muted'>Try: VOID10</p>
			</div>

			<div className='space-y-3 text-sm'>
				<div className='flex justify-between'>
					<span className='text-muted'>Subtotal</span>
					<span>{formatPrice(summary.subtotal)}</span>
				</div>
				{promoApplied && (
					<div className='flex justify-between text-accent'>
						<span>Discount (10%)</span>
						<span>-{formatPrice(summary.subtotal * 0.1)}</span>
					</div>
				)}
				<div className='flex justify-between'>
					<span className='text-muted'>Shipping</span>
					<span>
						{summary.shipping === 0 ? (
							<span className='text-accent'>Free</span>
						) : (
							formatPrice(summary.shipping)
						)}
					</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-muted'>Tax</span>
					<span>{formatPrice(summary.tax)}</span>
				</div>
				<div className='flex justify-between border-t border-border pt-3 text-base font-bold'>
					<span>Total</span>
					<span>
						{formatPrice(
							promoApplied
								? summary.total - summary.subtotal * 0.1
								: summary.total,
						)}
					</span>
				</div>
			</div>

			<Link href='/checkout' className='mt-6 block'>
				<Button fullWidth size='lg'>
					Proceed to Checkout
				</Button>
			</Link>

			<p className='mt-4 text-center text-xs text-muted'>
				Secure checkout powered by Stripe
			</p>
		</div>
	)
}
