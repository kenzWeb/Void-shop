import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const headerContainerStyles = 'mb-12'

export const headerTitleStyles =
	'text-4xl font-bold tracking-tighter lg:text-5xl'

export const headerSubtitleStyles = 'mt-2 text-muted'

export const collectionsGridStyles = cn(
	'grid gap-4 md:grid-cols-2 lg:grid-cols-3',
)

export const collectionCardStyles = cn(
	'group block border border-border p-8',
	'transition-colors hover:border-foreground',
)

export const cardContentStyles = 'flex items-start justify-between'

export const cardTitleStyles = 'text-2xl font-bold tracking-tight'

export const cardDescriptionStyles = 'mt-2 text-muted'

export const cardCountStyles = 'mt-4 text-sm text-muted'

export const cardArrowStyles = cn(
	'h-5 w-5 text-muted transition-transform',
	'group-hover:translate-x-1 group-hover:text-foreground',
)
