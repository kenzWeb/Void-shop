'use client'

import {CartDrawerUI} from './cart-drawer'
import {useCartDrawer} from './use-cart-drawer'

export function CartDrawer() {
	const {isOpen, items, summary, freeShippingProgress, handlers} =
		useCartDrawer()

	return (
		<CartDrawerUI
			isOpen={isOpen}
			items={items}
			summary={summary}
			freeShippingProgress={freeShippingProgress}
			onClose={handlers.onClose}
			onCheckout={handlers.onCheckout}
			onViewCart={handlers.onViewCart}
			onClearCart={handlers.onClearCart}
		/>
	)
}
