'use client'

import {CartSummary} from '@/types'
import {footerStyles} from '../cart-drawer.styles'
import {FooterActions} from './footer-actions'
import {SummarySection} from './summary-section'

interface CartDrawerFooterProps {
	summary: CartSummary
	onCheckout: () => void
	onViewCart: () => void
	onClose: () => void
	onClearCart: () => void
}

export function CartDrawerFooter({
	summary,
	onCheckout,
	onViewCart,
	onClose,
	onClearCart,
}: CartDrawerFooterProps) {
	return (
		<footer className={footerStyles}>
			<SummarySection summary={summary} />
			<FooterActions
				onCheckout={onCheckout}
				onViewCart={onViewCart}
				onClose={onClose}
				onClearCart={onClearCart}
			/>
		</footer>
	)
}
