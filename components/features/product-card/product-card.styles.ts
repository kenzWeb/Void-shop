import {cva} from 'class-variance-authority'

export const productCardImageStyles = cva(
	'object-cover transition-transform duration-500',
	{
		variants: {
			isHovered: {
				true: 'scale-105',
				false: '',
			},
		},
		defaultVariants: {
			isHovered: false,
		},
	},
)

// Badge styles
export const badgeContainerStyles = 'absolute left-3 top-3 flex flex-col gap-2'
export const badgeBaseStyles =
	'px-2 py-1 text-xs font-bold uppercase tracking-wider'
export const newBadgeStyles = 'bg-accent text-accent-foreground'
export const discountBadgeStyles = 'bg-foreground text-background'

// Placeholder styles
export const placeholderContainerStyles =
	'absolute inset-0 flex items-center justify-center bg-surface'
export const placeholderTextStyles = 'text-4xl font-bold text-muted/20'

// Hover actions styles
export const hoverActionsContainerStyles =
	'absolute bottom-3 left-3 right-3 flex gap-2'
export const quickAddButtonStyles = cva(
	[
		'flex flex-1 items-center justify-center gap-2',
		'h-10 bg-foreground text-background',
		'text-sm font-medium transition-opacity',
	],
	{
		variants: {
			disabled: {
				true: 'cursor-not-allowed opacity-50',
				false: '',
			},
		},
		defaultVariants: {
			disabled: false,
		},
	},
)
export const quickViewButtonStyles = 'shrink-0 border-0 bg-background'

// Product info styles
export const productInfoContainerStyles = 'mt-4 space-y-2'
export const productInfoHeaderStyles = 'flex items-start justify-between gap-2'
export const productTitleStyles = 'font-medium leading-tight tracking-tight'
export const priceContainerStyles = 'flex items-baseline gap-2 text-right'
export const currentPriceStyles = 'font-bold'
export const originalPriceStyles = 'text-sm text-muted line-through'
export const productDescriptionStyles = 'line-clamp-1 text-sm text-muted'
export const colorSwatchContainerStyles = 'flex items-center gap-1.5'
export const colorSwatchStyles = 'h-3 w-3 rounded-full border border-border'
export const remainingColorsStyles = 'text-xs text-muted'

// Image container styles
export const imageContainerStyles =
	'relative aspect-[3/4] overflow-hidden border border-border bg-surface'
export const favoriteButtonContainerStyles = 'absolute right-3 top-3'
