import {cn} from '@/lib/cn'

export const overlayStyles =
	'fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm'

export const searchPanelPositionStyles =
	'fixed left-0 right-0 top-0 z-50 p-4 sm:top-20 sm:p-0'

export const searchContainerStyles = 'mx-auto w-full max-w-2xl'

export const searchBoxStyles = cn(
	'overflow-hidden border border-border bg-background shadow-2xl',
)

export const inputContainerStyles =
	'flex items-center border-b border-border px-4'

export const searchIconStyles = 'h-5 w-5 text-muted'

export const inputStyles = cn(
	'flex-1 bg-transparent px-4 py-4 text-lg',
	'placeholder:text-muted focus:outline-none',
)

export const loaderIconStyles = 'h-5 w-5 animate-spin text-muted'

export const clearButtonStyles = 'text-muted hover:text-foreground'

export const clearIconStyles = 'h-5 w-5'

export const resultsContainerStyles = 'max-h-[60vh] overflow-y-auto'

export const resultsListStyles = 'divide-y divide-border'

export const noResultsStyles = 'px-4 py-12 text-center'

export const noResultsTextStyles = 'text-muted'

export const suggestionsContainerStyles = 'px-4 py-6'

export const suggestionsTextStyles = 'text-sm text-muted'

// Search result styles
export const resultLinkStyles =
	'flex gap-4 p-4 transition-colors hover:bg-surface'

export const resultImageContainerStyles = cn(
	'relative h-16 w-16 shrink-0 overflow-hidden',
	'border border-border bg-surface',
)

export const resultImagePlaceholderStyles =
	'flex h-full w-full items-center justify-center'

export const resultImagePlaceholderTextStyles =
	'text-xl font-bold text-muted/20'

export const resultContentStyles = 'flex-1 overflow-hidden'

export const resultTitleStyles = 'truncate font-medium'

export const resultDescriptionStyles = 'mt-1 truncate text-sm text-muted'

export const resultPriceContainerStyles = 'shrink-0 text-right'

export const resultPriceStyles = 'font-bold'

export const resultOriginalPriceStyles = 'ml-2 text-sm text-muted line-through'

// Highlighted text styles
export const highlightStyles = 'bg-accent text-accent-foreground px-0.5'
