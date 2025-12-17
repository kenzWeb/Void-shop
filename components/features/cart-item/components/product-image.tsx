// refactor(cart-item): extract product image with placeholder
'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
	imageContainerStyles,
	imagePlaceholderStyles,
	imagePlaceholderTextStyles,
} from '../cart-item.styles'

interface ProductImageProps {
	slug: string
	imageUrl: string | null
	imageAlt: string
	productName: string
}

export function ProductImage({
	slug,
	imageUrl,
	imageAlt,
	productName,
}: ProductImageProps) {
	return (
		<Link href={`/product/${slug}`} className={imageContainerStyles}>
			{imageUrl ? (
				<Image
					src={imageUrl}
					alt={imageAlt}
					fill
					sizes='96px'
					className='object-cover'
				/>
			) : (
				<div className={imagePlaceholderStyles}>
					<span className={imagePlaceholderTextStyles}>
						{productName.charAt(0)}
					</span>
				</div>
			)}
		</Link>
	)
}
