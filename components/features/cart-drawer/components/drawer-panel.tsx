'use client'

import {CartItem as CartItemType, CartSummary} from '@/types'
import {motion} from 'framer-motion'
import {DRAWER_ANIMATION} from '../cart-drawer.constants'
import {drawerContainerStyles} from '../cart-drawer.styles'
import {FreeShippingProgress as FreeShippingProgressType} from '../cart-drawer.types'
import {CartDrawerContent} from './cart-drawer-content'
import {CartDrawerFooter} from './cart-drawer-footer'
import {CartDrawerHeader} from './cart-drawer-header'
import {FreeShippingProgressBar} from './free-shipping-progress-bar'

interface DrawerPanelProps {
	items: CartItemType[]
	summary: CartSummary
	freeShippingProgress: FreeShippingProgressType
	onClose: () => void
	onCheckout: () => void
	onViewCart: () => void
	onClearCart: () => void
}

export function DrawerPanel({
	items,
	summary,
	freeShippingProgress,
	onClose,
	onCheckout,
	onViewCart,
	onClearCart,
}: DrawerPanelProps) {
	return (
		<motion.aside
			initial={DRAWER_ANIMATION.initial}
			animate={DRAWER_ANIMATION.animate}
			exit={DRAWER_ANIMATION.exit}
			transition={DRAWER_ANIMATION.transition}
			className={drawerContainerStyles}
			role='dialog'
			aria-modal='true'
			aria-label='Shopping cart'
		>
			<CartDrawerHeader itemCount={summary.itemCount} onClose={onClose} />

			{items.length > 0 && (
				<FreeShippingProgressBar progress={freeShippingProgress} />
			)}

			<CartDrawerContent items={items} onClose={onClose} />

			{items.length > 0 && (
				<CartDrawerFooter
					summary={summary}
					onCheckout={onCheckout}
					onViewCart={onViewCart}
					onClose={onClose}
					onClearCart={onClearCart}
				/>
			)}
		</motion.aside>
	)
}
