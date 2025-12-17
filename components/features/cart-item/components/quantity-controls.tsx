// refactor(cart-item): extract pure quantity controls
'use client'

import {Minus, Plus} from 'lucide-react'
import {
	quantityButtonStyles,
	quantityContainerStyles,
	quantityDisplayStyles,
} from '../cart-item.styles'

interface QuantityControlsProps {
	value: number
	onIncrement: () => void
	onDecrement: () => void
}

export function QuantityControls({
	value,
	onIncrement,
	onDecrement,
}: QuantityControlsProps) {
	return (
		<div className={quantityContainerStyles}>
			<button
				onClick={onDecrement}
				className={quantityButtonStyles}
				aria-label='Decrease quantity'
			>
				<Minus className='h-3 w-3' />
			</button>
			<span className={quantityDisplayStyles}>{value}</span>
			<button
				onClick={onIncrement}
				className={quantityButtonStyles}
				aria-label='Increase quantity'
			>
				<Plus className='h-3 w-3' />
			</button>
		</div>
	)
}
