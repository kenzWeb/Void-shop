'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {useHydration} from '@/hooks'
import {FREE_SHIPPING_THRESHOLD} from '@/lib/constants'
import {useCartStore} from '@/store'
import {ArrowLeft} from 'lucide-react'
import Link from 'next/link'
import {useState} from 'react'
import {BREADCRUMBS, formatPrice} from './cart.constants'
import {
	backLinkStyles,
	clearButtonStyles,
	contentStyles,
	headerContainerStyles,
	mainGridStyles,
	sectionStyles,
	sidebarStyles,
	titleStyles,
} from './cart.styles'
import {
	CartItemsList,
	EmptyState,
	LoadingState,
	OrderSummary,
	ShippingProgress,
} from './components'

export function CartView() {
	const isHydrated = useHydration()
	const items = useCartStore((state) => state.items)
	const updateQuantity = useCartStore((state) => state.updateQuantity)
	const removeItem = useCartStore((state) => state.removeItem)
	const clearCart = useCartStore((state) => state.clearCart)
	const getCartSummary = useCartStore((state) => state.getCartSummary)

	const [promoCode, setPromoCode] = useState('')
	const [promoApplied, setPromoApplied] = useState(false)

	const summary = getCartSummary()
	const progressToFreeShipping = Math.min(
		(summary.subtotal / FREE_SHIPPING_THRESHOLD) * 100,
		100,
	)
	const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - summary.subtotal

	const handleApplyPromo = () => {
		if (promoCode.toLowerCase() === 'void10') {
			setPromoApplied(true)
		}
	}

	if (!isHydrated) {
		return <LoadingState />
	}

	if (items.length === 0) {
		return <EmptyState />
	}

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />

				<div className='mb-8'>
					<Link href='/shop' className={backLinkStyles}>
						<ArrowLeft className='h-4 w-4' />
						Continue Shopping
					</Link>
				</div>

				<div className={headerContainerStyles}>
					<div>
						<h1 className={titleStyles}>Shopping Cart</h1>
						<p className='mt-2 text-muted'>
							{summary.itemCount} item{summary.itemCount !== 1 ? 's' : ''} in
							your cart
						</p>
					</div>
					<button onClick={clearCart} className={clearButtonStyles}>
						Clear all
					</button>
				</div>

				<div className={mainGridStyles}>
					<div className={contentStyles}>
						<ShippingProgress
							amountToFreeShipping={amountToFreeShipping}
							progressPercent={progressToFreeShipping}
							formatPrice={formatPrice}
						/>
						<CartItemsList
							items={items}
							onUpdateQuantity={updateQuantity}
							onRemove={removeItem}
							formatPrice={formatPrice}
						/>
					</div>

					<div className={sidebarStyles}>
						<OrderSummary
							summary={summary}
							promoCode={promoCode}
							promoApplied={promoApplied}
							onPromoChange={setPromoCode}
							onApplyPromo={handleApplyPromo}
							formatPrice={formatPrice}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
