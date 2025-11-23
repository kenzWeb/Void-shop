// refactor(cart-item): extract product header with title, variants, remove
'use client'

import {X} from 'lucide-react'
import Link from 'next/link'
import {
	headerContainerStyles,
	productLinkStyles,
	removeButtonStyles,
	variantContainerStyles,
	variantDividerStyles,
} from '../cart-item.styles'

interface ProductHeaderProps {
	slug: string
	name: string
	color: string
	size: string
	onRemove: () => void
}

export function ProductHeader({
	slug,
	name,
	color,
	size,
	onRemove,
}: ProductHeaderProps) {
	return (
		<div className={headerContainerStyles}>
			<div>
				<Link href={`/product/${slug}`} className={productLinkStyles}>
					{name}
				</Link>
				<div className={variantContainerStyles}>
					<span className='capitalize'>{color}</span>
					<span className={variantDividerStyles}>|</span>
					<span>{size}</span>
				</div>
			</div>
			<button
				onClick={onRemove}
				className={removeButtonStyles}
				aria-label='Remove item'
			>
				<X className='h-4 w-4' />
			</button>
		</div>
	)
}
