// refactor(cart-item): clean main entry point using sub-components
'use client'

import {motion} from 'framer-motion'
import {ITEM_ANIMATION} from './cart-item.constants'
import {
	cartItemContainerStyles,
	contentContainerStyles,
} from './cart-item.styles'
import {CartItemUIProps} from './cart-item.types'
import {ProductFooter, ProductHeader, ProductImage} from './components'

export function CartItemUI({
	item,
	mainImageUrl,
	mainImageAlt,
	itemTotal,
	onIncrement,
	onDecrement,
	onRemove,
}: CartItemUIProps) {
	return (
		<motion.div
			layout
			initial={ITEM_ANIMATION.initial}
			animate={ITEM_ANIMATION.animate}
			exit={ITEM_ANIMATION.exit}
			transition={ITEM_ANIMATION.transition}
			className={cartItemContainerStyles}
		>
			<ProductImage
				slug={item.product.slug}
				imageUrl={mainImageUrl}
				imageAlt={mainImageAlt}
				productName={item.product.name}
			/>

			<div className={contentContainerStyles}>
				<ProductHeader
					slug={item.product.slug}
					name={item.product.name}
					color={item.color}
					size={item.size}
					onRemove={onRemove}
				/>

				<ProductFooter
					quantity={item.quantity}
					itemTotal={itemTotal}
					onIncrement={onIncrement}
					onDecrement={onDecrement}
				/>
			</div>
		</motion.div>
	)
}
