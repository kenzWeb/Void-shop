// refactor(product-card): extract image placeholder component
'use client'

import {
	placeholderContainerStyles,
	placeholderTextStyles,
} from '../product-card.styles'
import {getProductInitial} from '../product-card.utils'

interface ProductImagePlaceholderProps {
	name: string
}

export function ProductImagePlaceholder({name}: ProductImagePlaceholderProps) {
	return (
		<div className={placeholderContainerStyles}>
			<span className={placeholderTextStyles}>{getProductInitial(name)}</span>
		</div>
	)
}
