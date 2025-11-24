'use client'

import {Button} from '@/components/ui'
import {clearCartButtonStyles, footerActionsStyles} from '../cart-drawer.styles'

interface FooterActionsProps {
	onCheckout: () => void
	onViewCart: () => void
	onClose: () => void
	onClearCart: () => void
}

export function FooterActions({
	onCheckout,
	onViewCart,
	onClose,
	onClearCart,
}: FooterActionsProps) {
	return (
		<>
			<div className={footerActionsStyles}>
				<Button fullWidth size='lg' onClick={onCheckout}>
					Checkout
				</Button>
				<Button variant='outline' fullWidth onClick={onViewCart}>
					View Cart
				</Button>
				<Button
					variant='ghost'
					fullWidth
					onClick={onClose}
					className='text-muted'
				>
					Continue Shopping
				</Button>
			</div>
			<button onClick={onClearCart} className={clearCartButtonStyles}>
				Clear cart
			</button>
		</>
	)
}
