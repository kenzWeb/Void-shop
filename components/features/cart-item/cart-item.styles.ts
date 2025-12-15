import {cn} from '@/lib/cn'

export const cartItemContainerStyles = 'flex gap-4 border-b border-border py-4'

export const imageContainerStyles = cn(
	'relative aspect-square h-24 w-24 shrink-0 overflow-hidden',
	'border border-border bg-surface',
)

export const imagePlaceholderStyles = cn(
	'flex h-full w-full items-center justify-center',
)

export const imagePlaceholderTextStyles = 'text-2xl font-bold text-muted/20'

export const contentContainerStyles = 'flex flex-1 flex-col justify-between'

export const headerContainerStyles = 'flex items-start justify-between gap-2'

export const productLinkStyles = 'font-medium leading-tight hover:underline'

export const variantContainerStyles =
	'mt-1 flex items-center gap-2 text-sm text-muted'

export const variantDividerStyles = 'text-border'

export const removeButtonStyles = cn(
	'text-muted transition-colors hover:text-foreground',
)

export const footerContainerStyles = 'flex items-center justify-between'

export const quantityContainerStyles = 'flex items-center border border-border'

export const quantityButtonStyles = cn(
	'flex h-8 w-8 items-center justify-center',
	'text-muted transition-colors hover:bg-surface hover:text-foreground',
)

export const quantityDisplayStyles = cn(
	'flex h-8 w-10 items-center justify-center text-sm font-medium',
)

export const itemTotalStyles = 'font-bold'
