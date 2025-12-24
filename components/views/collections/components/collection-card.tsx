'use client'

import {ProductCategory} from '@/types'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import {
	cardArrowStyles,
	cardContentStyles,
	cardCountStyles,
	cardDescriptionStyles,
	cardTitleStyles,
	collectionCardStyles,
} from '../collections.styles'

interface CollectionCardProps {
	id: ProductCategory
	name: string
	description: string
	count: number
	index: number
}

export function CollectionCard({
	id,
	name,
	description,
	count,
	index,
}: CollectionCardProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: index * 0.1}}
		>
			<Link href={`/shop?category=${id}`} className={collectionCardStyles}>
				<div className={cardContentStyles}>
					<div>
						<h2 className={cardTitleStyles}>{name}</h2>
						<p className={cardDescriptionStyles}>{description}</p>
						<p className={cardCountStyles}>{count} products</p>
					</div>
					<ArrowRight className={cardArrowStyles} />
				</div>
			</Link>
		</motion.div>
	)
}
