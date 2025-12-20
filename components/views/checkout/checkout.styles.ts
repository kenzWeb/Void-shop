import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const loadingSkeletonStyles = 'animate-pulse space-y-8'

export const orderCompleteStyles = 'mx-auto max-w-md text-center'

export const checkIconContainerStyles =
	'mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent'

export const mainGridStyles = 'grid gap-12 lg:grid-cols-2'

export const backLinkStyles =
	'inline-flex items-center gap-2 text-sm text-muted hover:text-foreground'

export const formStyles = 'space-y-8'

export const inputStyles = (hasError: boolean) =>
	cn(
		'h-12 w-full border bg-background px-4 text-sm transition-colors',
		'placeholder:text-muted focus:border-foreground focus:outline-none',
		hasError ? 'border-error' : 'border-border',
	)

export const summaryCardStyles = 'sticky top-24 border border-border p-6'

export const itemsScrollStyles = 'max-h-80 space-y-4 overflow-y-auto'

export const itemImageStyles =
	'relative h-16 w-16 shrink-0 overflow-hidden border border-border bg-surface'

export const quantityBadgeStyles = cn(
	'absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center',
	'rounded-full bg-foreground text-xs font-bold text-background',
)

export const trustBadgesStyles =
	'mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8'
