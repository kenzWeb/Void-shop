'use client'

import {CartItem} from '@/types'
import {AnimatePresence} from 'framer-motion'
import {itemsTableStyles, tableHeaderStyles} from '../cart.styles'
import {CartItemRow} from './cart-item-row'

interface CartItemsListProps {
	items: CartItem[]
	onUpdateQuantity: (id: string, quantity: number) => void
	onRemove: (id: string) => void
	formatPrice: (price: number) => string
}

export function CartItemsList({
	items,
	onUpdateQuantity,
	onRemove,
	formatPrice,
}: CartItemsListProps) {
	return (
		<div className={itemsTableStyles}>
			<div className={tableHeaderStyles}>
				<span className='col-span-6'>Product</span>
				<span className='col-span-2 text-center'>Quantity</span>
				<span className='col-span-2 text-center'>Price</span>
				<span className='col-span-2 text-right'>Total</span>
			</div>

			<AnimatePresence mode='popLayout'>
				{items.map((item) => (
					<CartItemRow
						key={item.id}
						item={item}
						onUpdateQuantity={onUpdateQuantity}
						onRemove={onRemove}
						formatPrice={formatPrice}
					/>
				))}
			</AnimatePresence>
		</div>
	)
}
