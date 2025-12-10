import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const mainGridStyles = 'grid gap-12 lg:grid-cols-2'

export const mainImageStyles =
	'relative aspect-square overflow-hidden border border-border bg-surface'

export const thumbnailStyles = (isSelected: boolean) =>
	cn(
		'relative h-20 w-20 overflow-hidden border bg-surface',
		isSelected ? 'border-foreground' : 'border-border',
	)

export const colorSwatchStyles = (isSelected: boolean) =>
	cn(
		'h-10 w-10 rounded-full border-2 transition-transform hover:scale-110',
		isSelected
			? 'border-foreground ring-2 ring-foreground ring-offset-2'
			: 'border-border',
	)

export const sizeButtonStyles = (isSelected: boolean) =>
	cn(
		'flex h-12 w-14 items-center justify-center border text-sm font-medium transition-colors',
		isSelected
			? 'border-foreground bg-foreground text-background'
			: 'border-border hover:border-foreground',
	)

export const quantityButtonStyles = cn(
	'flex h-12 w-12 items-center justify-center text-muted',
	'transition-colors hover:bg-surface hover:text-foreground',
)

export const trustBadgesStyles =
	'mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8'
