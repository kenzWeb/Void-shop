'use client'

import {ProductCard} from '@/components/features'
import {Product} from '@/types'
import {motion} from 'framer-motion'
import {ANIMATION_DELAY} from '../sale.constants'
import {gridStyles} from '../sale.styles'

interface ProductGridProps {
	products: Product[]
}

export function ProductGrid({products}: ProductGridProps) {
	return (
		<div className={gridStyles}>
			{products.map((product, index) => (
				<motion.div
					key={product.id}
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{
						duration: 0.3,
						delay: index * ANIMATION_DELAY,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					<ProductCard product={product} priority={index < 4} />
				</motion.div>
			))}
		</div>
	)
}
