'use client'

import {FavoriteButton} from '@/components/ui'
import {cn} from '@/lib/cn'
import {Product, ProductColor, ProductSize} from '@/types'
import {Star} from 'lucide-react'
import {formatPrice} from '../product.constants'
import {colorSwatchStyles, sizeButtonStyles} from '../product.styles'

interface ProductInfoProps {
	product: Product
	selectedSize: ProductSize | null
	selectedColor: ProductColor | null
	onSizeSelect: (size: ProductSize) => void
	onColorSelect: (color: ProductColor) => void
}

export function ProductInfo({
	product,
	selectedSize,
	selectedColor,
	onSizeSelect,
	onColorSelect,
}: ProductInfoProps) {
	const hasDiscount =
		product.originalPrice && product.originalPrice > product.price

	return (
		<>
			<div className='flex items-start justify-between gap-4'>
				<div>
					{product.isNew && (
						<span className='mb-2 inline-block bg-accent px-2 py-1 text-xs font-bold uppercase text-accent-foreground'>
							New
						</span>
					)}
					<h1 className='text-3xl font-bold tracking-tighter lg:text-4xl'>
						{product.name}
					</h1>
				</div>
				<FavoriteButton product={product} size='lg' />
			</div>

			<div className='mt-4 flex items-center gap-2'>
				<div className='flex items-center gap-1'>
					{Array.from({length: 5}).map((_, i) => (
						<Star
							key={i}
							className={cn(
								'h-4 w-4',
								i < Math.floor(product.rating)
									? 'fill-accent text-accent'
									: 'text-border',
							)}
						/>
					))}
				</div>
				<span className='text-sm text-muted'>
					{product.rating} ({product.reviewCount} reviews)
				</span>
			</div>

			<div className='mt-6 flex items-baseline gap-3'>
				<span className='text-3xl font-bold'>{formatPrice(product.price)}</span>
				{hasDiscount && (
					<>
						<span className='text-xl text-muted line-through'>
							{formatPrice(product.originalPrice!)}
						</span>
						<span className='bg-foreground px-2 py-1 text-sm font-bold text-background'>
							Save{' '}
							{Math.round(
								((product.originalPrice! - product.price) /
									product.originalPrice!) *
									100,
							)}
							%
						</span>
					</>
				)}
			</div>

			<p className='mt-6 text-muted'>{product.description}</p>

			<div className='mt-8 space-y-6'>
				<div>
					<label className='mb-3 block text-sm font-medium'>
						Color:{' '}
						{selectedColor && (
							<span className='capitalize'>{selectedColor}</span>
						)}
					</label>
					<div className='flex flex-wrap gap-2'>
						{product.colors.map((color) => (
							<button
								key={color}
								onClick={() => onColorSelect(color)}
								className={colorSwatchStyles(selectedColor === color)}
								style={{backgroundColor: color === 'white' ? '#ffffff' : color}}
								title={color}
							/>
						))}
					</div>
				</div>

				<div>
					<label className='mb-3 block text-sm font-medium'>
						Size: {selectedSize && <span>{selectedSize}</span>}
					</label>
					<div className='flex flex-wrap gap-2'>
						{product.sizes.map((size) => (
							<button
								key={size}
								onClick={() => onSizeSelect(size)}
								className={sizeButtonStyles(selectedSize === size)}
							>
								{size}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
