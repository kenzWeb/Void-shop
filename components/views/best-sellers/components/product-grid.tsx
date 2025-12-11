'use client'

import {ProductCard} from '@/components/features'
import {Product} from '@/types'
import {motion} from 'framer-motion'
import {PRODUCT_ANIMATION} from '../best-sellers.constants'
import {productGridStyles} from '../best-sellers.styles'

interface ProductGridProps {
	products: Product[]
}

export function ProductGrid({products}: ProductGridProps) {
	return (
		<div className={productGridStyles}>
			{products.map((product, index) => (
				<motion.div
					key={product.id}
					initial={PRODUCT_ANIMATION.initial}
					animate={PRODUCT_ANIMATION.animate}
					transition={PRODUCT_ANIMATION.getTransition(index)}
				>
					<ProductCard product={product} priority={index < 4} />
				</motion.div>
			))}
		</div>
	)
}
