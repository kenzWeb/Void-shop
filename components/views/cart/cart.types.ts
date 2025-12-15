import {CartItem} from '@/types'

export interface CartViewProps {}

export interface CartSummaryInfo {
	itemCount: number
	subtotal: number
	shipping: number
	tax: number
	total: number
}

export interface LoadingStateProps {}

export interface EmptyStateProps {}

export interface ShippingProgressProps {
	amountToFreeShipping: number
	progressPercent: number
	formatPrice: (price: number) => string
}

export interface CartItemRowProps {
	item: CartItem
	onUpdateQuantity: (id: string, quantity: number) => void
	onRemove: (id: string) => void
	formatPrice: (price: number) => string
}

export interface CartItemsListProps {
	items: CartItem[]
	onUpdateQuantity: (id: string, quantity: number) => void
	onRemove: (id: string) => void
	formatPrice: (price: number) => string
}

export interface OrderSummaryProps {
	summary: CartSummaryInfo
	promoCode: string
	promoApplied: boolean
	onPromoChange: (code: string) => void
	onApplyPromo: () => void
	formatPrice: (price: number) => string
}
