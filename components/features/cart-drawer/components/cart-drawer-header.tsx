'use client'

import {IconButton} from '@/components/ui'
import {ShoppingBag, X} from 'lucide-react'
import {
	headerStyles,
	headerTitleContainerStyles,
	headerTitleStyles,
} from '../cart-drawer.styles'

interface CartDrawerHeaderProps {
	itemCount: number
	onClose: () => void
}

export function CartDrawerHeader({itemCount, onClose}: CartDrawerHeaderProps) {
	return (
		<header className={headerStyles}>
			<div className={headerTitleContainerStyles}>
				<ShoppingBag className='h-5 w-5' />
				<h2 className={headerTitleStyles}>Cart ({itemCount})</h2>
			</div>
			<IconButton
				icon={<X className='h-full w-full' />}
				label='Close cart'
				onClick={onClose}
			/>
		</header>
	)
}
