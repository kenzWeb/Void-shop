'use client'

import {ProductCard} from '@/components/features'
import {Product} from '@/types'
import {AnimatePresence, motion} from 'framer-motion'
import {gridStyles} from '../favorites.styles'

interface ProductGridProps {
	products: Product[]
}

export function ProductGrid({products}: ProductGridProps) {
	return (
		<div className={gridStyles}>
			<AnimatePresence mode='popLayout'>
				{products.map((product, index) => (
					<motion.div
						key={product.id}
						layout
						initial={{opacity: 0, scale: 0.9}}
						animate={{opacity: 1, scale: 1}}
						exit={{opacity: 0, scale: 0.9}}
						transition={{duration: 0.3, delay: index * 0.05}}
					>
						<ProductCard product={product} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
