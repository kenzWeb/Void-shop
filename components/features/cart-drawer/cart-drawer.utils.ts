import {FREE_SHIPPING_THRESHOLD} from '@/lib/constants'
import {FreeShippingProgress} from './cart-drawer.types'

export function calculateFreeShippingProgress(
	subtotal: number,
): FreeShippingProgress {
	const percentage = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)
	const amountRemaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)
	const isQualified = subtotal >= FREE_SHIPPING_THRESHOLD

	return {
		percentage,
		amountRemaining,
		isQualified,
	}
}
