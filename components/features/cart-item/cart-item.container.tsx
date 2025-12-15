'use client'

import {CartItem as CartItemType} from '@/types'
import {CartItemUI} from './cart-item'
import {useCartItem} from './use-cart-item'

interface CartItemContainerProps {
	item: CartItemType
}

export function CartItem({item}: CartItemContainerProps) {
	const {mainImageUrl, mainImageAlt, itemTotal, handlers} = useCartItem(item)

	return (
		<CartItemUI
			item={item}
			mainImageUrl={mainImageUrl}
			mainImageAlt={mainImageAlt}
			itemTotal={itemTotal}
			onIncrement={handlers.onIncrement}
			onDecrement={handlers.onDecrement}
			onRemove={handlers.onRemove}
		/>
	)
}
