'use client'

import {AnimatePresence} from 'framer-motion'
import {CartDrawerUIProps} from './cart-drawer.types'
import {DrawerPanel, Overlay} from './components'

export function CartDrawerUI({
	isOpen,
	items,
	summary,
	freeShippingProgress,
	onClose,
	onCheckout,
	onViewCart,
	onClearCart,
}: CartDrawerUIProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<Overlay onClose={onClose} />
					<DrawerPanel
						items={items}
						summary={summary}
						freeShippingProgress={freeShippingProgress}
						onClose={onClose}
						onCheckout={onCheckout}
						onViewCart={onViewCart}
						onClearCart={onClearCart}
					/>
				</>
			)}
		</AnimatePresence>
	)
}
