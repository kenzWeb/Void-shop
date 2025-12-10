'use client'

import {Minus, Plus} from 'lucide-react'
import {quantityButtonStyles} from '../product.styles'

interface QuantitySelectorProps {
	quantity: number
	onDecrease: () => void
	onIncrease: () => void
}

export function QuantitySelector({
	quantity,
	onDecrease,
	onIncrease,
}: QuantitySelectorProps) {
	return (
		<div>
			<label className='mb-3 block text-sm font-medium'>Quantity</label>
			<div className='flex items-center border border-border'>
				<button onClick={onDecrease} className={quantityButtonStyles}>
					<Minus className='h-4 w-4' />
				</button>
				<span className='flex h-12 w-16 items-center justify-center font-medium'>
					{quantity}
				</span>
				<button onClick={onIncrease} className={quantityButtonStyles}>
					<Plus className='h-4 w-4' />
				</button>
			</div>
		</div>
	)
}
