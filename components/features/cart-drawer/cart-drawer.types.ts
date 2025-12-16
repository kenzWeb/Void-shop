import {CartItem, CartSummary} from '@/types'

export interface CartDrawerProps {
	// Container has no external props - uses store directly
}

export interface CartDrawerUIProps {
	isOpen: boolean
	items: CartItem[]
	summary: CartSummary
	freeShippingProgress: FreeShippingProgress
	onClose: () => void
	onCheckout: () => void
	onViewCart: () => void
	onClearCart: () => void
}

export interface FreeShippingProgress {
	percentage: number
	amountRemaining: number
	isQualified: boolean
}

export interface UseCartDrawerReturn {
	isOpen: boolean
	items: CartItem[]
	summary: CartSummary
	freeShippingProgress: FreeShippingProgress
	handlers: {
		onClose: () => void
		onCheckout: () => void
		onViewCart: () => void
		onClearCart: () => void
	}
}
