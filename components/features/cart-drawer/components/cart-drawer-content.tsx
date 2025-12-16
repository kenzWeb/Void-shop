'use client'

import {CartItem as CartItemType} from '@/types'
import {AnimatePresence} from 'framer-motion'
import {CartItem} from '../../cart-item'
import {itemsContainerStyles} from '../cart-drawer.styles'
import {EmptyState} from './empty-state'

interface CartDrawerContentProps {
	items: CartItemType[]
	onClose: () => void
}

export function CartDrawerContent({items, onClose}: CartDrawerContentProps) {
	if (items.length === 0) {
		return <EmptyState onClose={onClose} />
	}

	return (
		<div className={itemsContainerStyles}>
			<AnimatePresence mode='popLayout'>
				{items.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</AnimatePresence>
		</div>
	)
}
