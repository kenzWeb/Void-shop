import {cn} from '@/lib/cn'

export const overlayStyles = cn(
	'fixed inset-0 z-50',
	'bg-foreground/20 backdrop-blur-sm',
)

export const drawerContainerStyles = cn(
	'fixed right-0 top-0 z-50 h-full w-full max-w-md',
	'flex flex-col bg-background',
	'border-l border-border shadow-2xl',
)

export const headerStyles = cn(
	'flex items-center justify-between',
	'border-b border-border px-6 py-4',
)

export const headerTitleContainerStyles = 'flex items-center gap-3'

export const headerTitleStyles = 'text-lg font-bold tracking-tight'

export const freeShippingContainerStyles = 'border-b border-border px-6 py-3'

export const freeShippingTextStyles = 'text-sm text-muted'

export const freeShippingAmountStyles = 'font-bold text-foreground'

export const freeShippingQualifiedStyles = 'text-sm font-medium text-accent'

export const progressBarContainerStyles =
	'mt-2 h-1.5 w-full overflow-hidden bg-surface'

export const progressBarFillStyles = 'h-full bg-accent'

export const itemsContainerStyles = 'flex-1 overflow-y-auto px-6 scrollbar-hide'

export const emptyStateContainerStyles = cn(
	'flex h-full flex-col items-center justify-center py-12',
)

export const emptyStateIconContainerStyles = cn(
	'flex h-20 w-20 items-center justify-center rounded-full bg-surface',
)

export const emptyStateIconStyles = 'h-8 w-8 text-muted'

export const emptyStateTitleStyles = 'mt-4 text-lg font-bold'

export const emptyStateSubtitleStyles = 'mt-1 text-sm text-muted'

export const footerStyles = 'border-t border-border p-6'

export const summaryContainerStyles = 'space-y-2 text-sm'

export const summaryRowStyles = 'flex justify-between'

export const summaryLabelStyles = 'text-muted'

export const summaryTotalRowStyles = cn(
	'flex justify-between',
	'border-t border-border pt-2 text-base font-bold',
)

export const footerActionsStyles = 'mt-6 space-y-3'

export const clearCartButtonStyles = cn(
	'mt-4 w-full text-center text-xs text-muted underline',
	'transition-colors hover:text-foreground',
)
