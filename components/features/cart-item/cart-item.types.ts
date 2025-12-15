import {CartItem} from '@/types'

export interface CartItemContainerProps {
	item: CartItem
}

export interface CartItemUIProps {
	item: CartItem
	mainImageUrl: string | null
	mainImageAlt: string
	itemTotal: number
	onIncrement: () => void
	onDecrement: () => void
	onRemove: () => void
}

export interface UseCartItemReturn {
	mainImageUrl: string | null
	mainImageAlt: string
	itemTotal: number
	handlers: {
		onIncrement: () => void
		onDecrement: () => void
		onRemove: () => void
	}
}
