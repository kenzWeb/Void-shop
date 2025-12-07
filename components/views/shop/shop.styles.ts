import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const headerContainerStyles = 'mb-8'

export const headerTitleStyles =
	'text-4xl font-bold tracking-tighter lg:text-5xl'

export const headerSubtitleStyles = 'mt-2 text-muted'

export const filterContainerStyles = 'mb-8'

export const productsGridStyles = cn(
	'grid grid-cols-1 gap-6',
	'sm:grid-cols-2 lg:grid-cols-4',
)

export const emptyStateStyles = 'py-20 text-center'

export const emptyStateTextStyles = 'text-lg text-muted'

export const emptyStateButtonStyles = cn(
	'mt-4 text-sm underline hover:text-foreground',
)
