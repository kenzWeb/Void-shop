'use client'

import {Breadcrumbs, Button, Container} from '@/components/ui'
import {useCartStore, useUIStore} from '@/store'
import {Breadcrumb, Product, ProductColor, ProductSize} from '@/types'
import {ShoppingBag} from 'lucide-react'
import {useState} from 'react'
import {
	ImageGallery,
	ProductInfo,
	QuantitySelector,
	TrustBadges,
} from './components'
import {formatPrice} from './product.constants'
import {mainGridStyles, sectionStyles} from './product.styles'

interface ProductViewProps {
	product: Product
}

export function ProductView({product}: ProductViewProps) {
	const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null)
	const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null)
	const [quantity, setQuantity] = useState(1)
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)

	const addItem = useCartStore((state) => state.addItem)
	const showSuccess = useUIStore((state) => state.showSuccess)
	const showError = useUIStore((state) => state.showError)

	const breadcrumbs: Breadcrumb[] = [
		{label: 'Shop', href: '/shop', isActive: false},
		{label: product.name, href: `/product/${product.slug}`, isActive: true},
	]

	const handleAddToCart = () => {
		if (!selectedSize) {
			showError('Please select a size')
			return
		}
		if (!selectedColor) {
			showError('Please select a color')
			return
		}
		addItem(product, quantity, selectedSize, selectedColor)
		showSuccess('Added to cart', `${product.name} has been added to your cart`)
	}

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={breadcrumbs} className='mb-8' />

				<div className={mainGridStyles}>
					<ImageGallery
						images={product.images}
						selectedIndex={selectedImageIndex}
						onSelectImage={setSelectedImageIndex}
						productName={product.name}
					/>

					<div>
						<ProductInfo
							product={product}
							selectedSize={selectedSize}
							selectedColor={selectedColor}
							onSizeSelect={setSelectedSize}
							onColorSelect={setSelectedColor}
						/>

						<div className='mt-6 space-y-6'>
							<QuantitySelector
								quantity={quantity}
								onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
								onIncrease={() => setQuantity(quantity + 1)}
							/>

							<Button
								size='lg'
								fullWidth
								onClick={handleAddToCart}
								leftIcon={<ShoppingBag className='h-5 w-5' />}
							>
								Add to Cart — {formatPrice(product.price * quantity)}
							</Button>
						</div>

						<TrustBadges />
					</div>
				</div>
			</Container>
		</section>
	)
}
