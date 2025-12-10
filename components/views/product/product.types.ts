import {Product, ProductColor, ProductSize} from '@/types'

export interface ProductViewProps {
	product: Product
}

export interface ImageGalleryProps {
	images: {id: string; url: string; alt: string}[]
	selectedIndex: number
	onSelectImage: (index: number) => void
	productName: string
}

export interface ProductInfoProps {
	product: Product
	selectedSize: ProductSize | null
	selectedColor: ProductColor | null
	onSizeSelect: (size: ProductSize) => void
	onColorSelect: (color: ProductColor) => void
}

export interface QuantitySelectorProps {
	quantity: number
	onDecrease: () => void
	onIncrease: () => void
}

export interface AddToCartButtonProps {
	price: number
	quantity: number
	onClick: () => void
	formatPrice: (price: number) => string
}

export interface TrustBadgesProps {}
