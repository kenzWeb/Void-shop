// refactor(cart-item): extract product footer with price and quantity
'use client'

import {formatPrice} from '@/lib/format'
import {footerContainerStyles, itemTotalStyles} from '../cart-item.styles'
import {QuantityControls} from './quantity-controls'

interface ProductFooterProps {
	quantity: number
	itemTotal: number
	onIncrement: () => void
	onDecrement: () => void
}

export function ProductFooter({
	quantity,
	itemTotal,
	onIncrement,
	onDecrement,
}: ProductFooterProps) {
	return (
		<div className={footerContainerStyles}>
			<QuantityControls
				value={quantity}
				onIncrement={onIncrement}
				onDecrement={onDecrement}
			/>
			<span className={itemTotalStyles}>{formatPrice(itemTotal)}</span>
		</div>
	)
}
