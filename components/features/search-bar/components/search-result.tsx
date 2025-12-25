'use client'

import {formatPrice} from '@/lib/format'
import {Product} from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import {
	resultContentStyles,
	resultDescriptionStyles,
	resultImageContainerStyles,
	resultImagePlaceholderStyles,
	resultImagePlaceholderTextStyles,
	resultLinkStyles,
	resultOriginalPriceStyles,
	resultPriceContainerStyles,
	resultPriceStyles,
	resultTitleStyles,
} from '../search-bar.styles'
import {HighlightedText} from './highlighted-text'

interface SearchResultProps {
	product: Product
	query: string
	onClick: () => void
}

export function SearchResult({product, query, onClick}: SearchResultProps) {
	const mainImage =
		product.images.find((img) => img.isMain) || product.images[0]

	return (
		<Link
			href={`/product/${product.slug}`}
			onClick={onClick}
			className={resultLinkStyles}
		>
			<div className={resultImageContainerStyles}>
				{mainImage ? (
					<Image
						src={mainImage.url}
						alt={mainImage.alt}
						fill
						sizes='64px'
						className='object-cover'
					/>
				) : (
					<div className={resultImagePlaceholderStyles}>
						<span className={resultImagePlaceholderTextStyles}>
							{product.name.charAt(0)}
						</span>
					</div>
				)}
			</div>

			<div className={resultContentStyles}>
				<h4 className={resultTitleStyles}>
					<HighlightedText text={product.name} highlight={query} />
				</h4>
				<p className={resultDescriptionStyles}>
					<HighlightedText text={product.shortDescription} highlight={query} />
				</p>
			</div>

			<div className={resultPriceContainerStyles}>
				<span className={resultPriceStyles}>{formatPrice(product.price)}</span>
				{product.originalPrice && (
					<span className={resultOriginalPriceStyles}>
						{formatPrice(product.originalPrice)}
					</span>
				)}
			</div>
		</Link>
	)
}
