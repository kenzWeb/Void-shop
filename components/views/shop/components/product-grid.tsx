'use client'

import {ProductCard} from '@/components/features'
import {Product} from '@/types'
import {motion} from 'framer-motion'
import {PRODUCT_CARD_ANIMATION} from '../shop.constants'
import {productsGridStyles} from '../shop.styles'

interface ProductGridProps {
	products: Product[]
}

export function ProductGrid({products}: ProductGridProps) {
	return (
		<div className={productsGridStyles}>
			{products.map((product, index) => (
				<motion.div
					key={product.id}
					initial={PRODUCT_CARD_ANIMATION.initial}
					animate={PRODUCT_CARD_ANIMATION.animate}
					transition={PRODUCT_CARD_ANIMATION.getTransition(index)}
				>
					<ProductCard product={product} priority={index < 4} />
				</motion.div>
			))}
		</div>
	)
}
