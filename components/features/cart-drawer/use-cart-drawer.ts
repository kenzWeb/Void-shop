'use client'

import {useCartStore} from '@/store'
import {useRouter} from 'next/navigation'
import {useCallback, useEffect} from 'react'
import {UseCartDrawerReturn} from './cart-drawer.types'
import {calculateFreeShippingProgress} from './cart-drawer.utils'

export function useCartDrawer(): UseCartDrawerReturn {
	const router = useRouter()
	const isOpen = useCartStore((state) => state.isOpen)
	const items = useCartStore((state) => state.items)
	const closeCart = useCartStore((state) => state.closeCart)
	const clearCart = useCartStore((state) => state.clearCart)
	const getCartSummary = useCartStore((state) => state.getCartSummary)

	const summary = getCartSummary()
	const freeShippingProgress = calculateFreeShippingProgress(summary.subtotal)

	const handleClose = useCallback(() => {
		closeCart()
	}, [closeCart])

	const handleCheckout = useCallback(() => {
		closeCart()
		router.push('/checkout')
	}, [closeCart, router])

	const handleViewCart = useCallback(() => {
		closeCart()
		router.push('/cart')
	}, [closeCart, router])

	const handleClearCart = useCallback(() => {
		clearCart()
	}, [clearCart])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeCart()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [isOpen, closeCart])

	return {
		isOpen,
		items,
		summary,
		freeShippingProgress,
		handlers: {
			onClose: handleClose,
			onCheckout: handleCheckout,
			onViewCart: handleViewCart,
			onClearCart: handleClearCart,
		},
	}
}
