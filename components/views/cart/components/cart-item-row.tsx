'use client'

import {CartItem} from '@/types'
import {motion} from 'framer-motion'
import {Minus, Plus, Trash2} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
	itemImageStyles,
	itemRowStyles,
	quantityControlStyles,
} from '../cart.styles'

interface CartItemRowProps {
	item: CartItem
	onUpdateQuantity: (id: string, quantity: number) => void
	onRemove: (id: string) => void
	formatPrice: (price: number) => string
}

export function CartItemRow({
	item,
	onUpdateQuantity,
	onRemove,
	formatPrice,
}: CartItemRowProps) {
	const mainImage =
		item.product.images.find((img) => img.isMain) || item.product.images[0]

	return (
		<motion.div
			layout
			initial={{opacity: 0, x: -20}}
			animate={{opacity: 1, x: 0}}
			exit={{opacity: 0, x: 20, height: 0}}
			className={itemRowStyles}
		>
			<div className='grid items-center gap-4 md:grid-cols-12'>
				<div className='col-span-6 flex gap-4'>
					<Link
						href={`/product/${item.product.slug}`}
						className={itemImageStyles}
					>
						{mainImage && (
							<Image
								src={mainImage.url}
								alt={mainImage.alt}
								fill
								sizes='112px'
								className='object-cover transition-transform hover:scale-105'
							/>
						)}
					</Link>
					<div className='flex flex-col justify-center'>
						<Link
							href={`/product/${item.product.slug}`}
							className='font-bold hover:text-accent'
						>
							{item.product.name}
						</Link>
						<p className='mt-1 text-sm text-muted'>
							{item.size} / {item.color}
						</p>
						<button
							onClick={() => onRemove(item.id)}
							className='mt-2 inline-flex items-center gap-1 text-xs text-muted hover:text-error md:hidden'
						>
							<Trash2 className='h-3 w-3' />
							Remove
						</button>
					</div>
				</div>

				<div className='col-span-2 flex items-center justify-center'>
					<div className='flex items-center border border-border'>
						<button
							onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
							disabled={item.quantity <= 1}
							className={quantityControlStyles}
						>
							<Minus className='h-4 w-4' />
						</button>
						<span className='flex h-10 w-12 items-center justify-center border-x border-border text-sm font-medium'>
							{item.quantity}
						</span>
						<button
							onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
							className={quantityControlStyles}
						>
							<Plus className='h-4 w-4' />
						</button>
					</div>
				</div>

				<div className='col-span-2 hidden text-center md:block'>
					<span className='text-sm'>{formatPrice(item.product.price)}</span>
				</div>

				<div className='col-span-2 flex items-center justify-between md:justify-end'>
					<span className='font-bold md:text-right'>
						{formatPrice(item.product.price * item.quantity)}
					</span>
					<button
						onClick={() => onRemove(item.id)}
						className='ml-4 hidden p-2 text-muted transition-colors hover:text-error md:block'
					>
						<Trash2 className='h-4 w-4' />
					</button>
				</div>
			</div>
		</motion.div>
	)
}
