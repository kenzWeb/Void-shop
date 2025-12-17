'use client'

import {useCartStore} from '@/store'
import {CartItem} from '@/types'
import {useCallback} from 'react'
import {UseCartItemReturn} from './cart-item.types'

export function useCartItem(item: CartItem): UseCartItemReturn {
	const updateQuantity = useCartStore((state) => state.updateQuantity)
	const removeItem = useCartStore((state) => state.removeItem)

	const mainImage =
		item.product.images.find((img) => img.isMain) || item.product.images[0]
	const itemTotal = item.product.price * item.quantity

	const handleIncrement = useCallback(() => {
		updateQuantity(item.id, item.quantity + 1)
	}, [item.id, item.quantity, updateQuantity])

	const handleDecrement = useCallback(() => {
		if (item.quantity > 1) {
			updateQuantity(item.id, item.quantity - 1)
		} else {
			removeItem(item.id)
		}
	}, [item.id, item.quantity, updateQuantity, removeItem])

	const handleRemove = useCallback(() => {
		removeItem(item.id)
	}, [item.id, removeItem])

	return {
		mainImageUrl: mainImage?.url ?? null,
		mainImageAlt: mainImage?.alt ?? item.product.name,
		itemTotal,
		handlers: {
			onIncrement: handleIncrement,
			onDecrement: handleDecrement,
			onRemove: handleRemove,
		},
	}
}
