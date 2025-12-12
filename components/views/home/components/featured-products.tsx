'use client'

import {ProductCard} from '@/components/features'
import {Button, Container} from '@/components/ui'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import {PRODUCT_CARD_ANIMATION} from '../home.constants'
import {
	featuredHeaderStyles,
	featuredSectionStyles,
	featuredSubtitleStyles,
	featuredTitleStyles,
	productsGridStyles,
} from '../home.styles'
import {FeaturedProductsProps} from '../home.types'

export function FeaturedProducts({products}: FeaturedProductsProps) {
	return (
		<section className={featuredSectionStyles}>
			<Container>
				<div className={featuredHeaderStyles}>
					<div>
						<h2 className={featuredTitleStyles}>Featured Products</h2>
						<p className={featuredSubtitleStyles}>
							Curated selection of our best sellers
						</p>
					</div>
					<Link href='/shop'>
						<Button
							variant='ghost'
							rightIcon={<ArrowRight className='h-4 w-4' />}
						>
							View All
						</Button>
					</Link>
				</div>

				<div className={productsGridStyles}>
					{products.map((product, index) => (
						<motion.div
							key={product.id}
							initial={PRODUCT_CARD_ANIMATION.initial}
							whileInView={PRODUCT_CARD_ANIMATION.whileInView}
							viewport={PRODUCT_CARD_ANIMATION.viewport}
							transition={PRODUCT_CARD_ANIMATION.getTransition(index)}
						>
							<ProductCard product={product} priority={index < 4} />
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	)
}
