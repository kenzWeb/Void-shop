import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const loadingSkeletonStyles = 'animate-pulse space-y-8'

export const emptyStateContainerStyles = 'mx-auto max-w-md py-20 text-center'

export const emptyIconContainerStyles =
	'mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-surface'

export const backLinkStyles =
	'inline-flex items-center gap-2 text-sm text-muted hover:text-foreground'

export const headerContainerStyles = 'mb-8 flex items-end justify-between'

export const titleStyles = 'text-3xl font-bold tracking-tighter lg:text-4xl'

export const clearButtonStyles =
	'text-sm text-muted underline hover:text-foreground'

export const mainGridStyles = 'grid gap-8 lg:grid-cols-3'

export const contentStyles = 'lg:col-span-2'

export const sidebarStyles = 'lg:col-span-1'

export const shippingProgressStyles = 'mb-6 border border-border p-4'

export const progressBarContainerStyles =
	'mt-2 h-2 w-full overflow-hidden bg-surface'

export const freeShippingBannerStyles =
	'mb-6 border border-accent bg-accent/10 p-4'

export const itemsTableStyles = 'border border-border'

export const tableHeaderStyles = cn(
	'hidden border-b border-border bg-surface px-6 py-3 text-sm font-medium',
	'md:grid md:grid-cols-12 md:gap-4',
)

export const itemRowStyles = 'border-b border-border p-6 last:border-b-0'

export const itemImageStyles = cn(
	'relative h-24 w-24 shrink-0 overflow-hidden border border-border bg-surface',
	'md:h-28 md:w-28',
)

export const quantityControlStyles = cn(
	'flex h-10 w-10 items-center justify-center text-muted',
	'transition-colors hover:bg-surface disabled:opacity-50',
)

export const summaryCardStyles = 'sticky top-24 border border-border p-6'

export const promoInputStyles = (applied: boolean) =>
	cn(
		'h-10 w-full border bg-background pl-10 pr-3 text-sm',
		'focus:border-foreground focus:outline-none',
		applied ? 'border-accent bg-accent/10' : 'border-border',
	)
