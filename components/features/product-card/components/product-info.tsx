// refactor(product-card): extract product info with pricing and colors
'use client'

import {formatPrice} from '@/lib/format'
import {MAX_VISIBLE_COLORS} from '../product-card.constants'
import {
	colorSwatchContainerStyles,
	colorSwatchStyles,
	currentPriceStyles,
	originalPriceStyles,
	priceContainerStyles,
	productDescriptionStyles,
	productInfoContainerStyles,
	productInfoHeaderStyles,
	productTitleStyles,
	remainingColorsStyles,
} from '../product-card.styles'
import {getColorStyle} from '../product-card.utils'

interface ProductInfoProps {
	product: {
		name: string
		price: number
		originalPrice?: number
		shortDescription: string
		colors: string[]
	}
	hasDiscount: boolean
}

export function ProductInfo({product, hasDiscount}: ProductInfoProps) {
	const visibleColors = product.colors.slice(0, MAX_VISIBLE_COLORS)
	const remainingColorsCount = product.colors.length - MAX_VISIBLE_COLORS

	return (
		<div className={productInfoContainerStyles}>
			<div className={productInfoHeaderStyles}>
				<h3 className={productTitleStyles}>{product.name}</h3>
				<div className={priceContainerStyles}>
					<span className={currentPriceStyles}>
						{formatPrice(product.price)}
					</span>
					{hasDiscount && product.originalPrice && (
						<span className={originalPriceStyles}>
							{formatPrice(product.originalPrice)}
						</span>
					)}
				</div>
			</div>

			<p className={productDescriptionStyles}>{product.shortDescription}</p>

			{product.colors.length > 1 && (
				<div className={colorSwatchContainerStyles}>
					{visibleColors.map((color) => (
						<span
							key={color}
							className={colorSwatchStyles}
							style={getColorStyle(color)}
							title={color}
						/>
					))}
					{remainingColorsCount > 0 && (
						<span className={remainingColorsStyles}>
							+{remainingColorsCount}
						</span>
					)}
				</div>
			)}
		</div>
	)
}
