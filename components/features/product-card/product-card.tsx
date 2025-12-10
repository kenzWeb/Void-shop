// refactor(product-card): clean main entry point using sub-components
'use client'

import {FavoriteButton} from '@/components/ui/favorite-button'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
	BadgeContainer,
	HoverActions,
	ProductImagePlaceholder,
	ProductInfo,
} from './components'
import {IMAGE_SIZES} from './product-card.constants'
import {
	favoriteButtonContainerStyles,
	imageContainerStyles,
	productCardImageStyles,
} from './product-card.styles'
import {ProductCardUIProps} from './product-card.types'

export function ProductCardUI({
	product,
	priority = false,
	isHovered,
	hasDiscount,
	discountPercentage,
	statusBadge,
	mainImageUrl,
	mainImageAlt,
	onMouseEnter,
	onMouseLeave,
	onQuickAdd,
	isOutOfStock,
}: ProductCardUIProps) {
	return (
		<motion.article
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className='group relative'
		>
			<Link href={`/product/${product.slug}`} className='block'>
				<div className={imageContainerStyles}>
					{mainImageUrl ? (
						<Image
							src={mainImageUrl}
							alt={mainImageAlt}
							fill
							priority={priority}
							sizes={IMAGE_SIZES}
							className={productCardImageStyles({isHovered})}
						/>
					) : (
						<ProductImagePlaceholder name={product.name} />
					)}

					<BadgeContainer
						isNew={product.isNew}
						hasDiscount={hasDiscount}
						discountPercentage={discountPercentage}
						statusBadge={statusBadge}
					/>

					<div className={favoriteButtonContainerStyles}>
						<FavoriteButton product={product} size='sm' />
					</div>

					<HoverActions
						isHovered={isHovered}
						onQuickAdd={onQuickAdd}
						isOutOfStock={isOutOfStock}
					/>
				</div>

				<ProductInfo product={product} hasDiscount={hasDiscount} />
			</Link>
		</motion.article>
	)
}
