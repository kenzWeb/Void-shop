import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const headerStyles = 'mb-8 flex items-end justify-between'

export const titleStyles = 'text-4xl font-bold tracking-tighter lg:text-5xl'

export const subtitleStyles = 'mt-2 text-muted'

export const clearButtonStyles =
	'text-sm text-muted underline hover:text-foreground'

export const gridStyles = cn(
	'grid grid-cols-1 gap-6',
	'sm:grid-cols-2 lg:grid-cols-4',
)

export const skeletonCardStyles = 'animate-pulse'

export const skeletonImageStyles = 'aspect-[3/4] bg-surface'

export const skeletonContentStyles = 'mt-4 space-y-2'

export const skeletonTitleStyles = 'h-5 w-2/3 bg-surface'

export const skeletonDescStyles = 'h-4 w-full bg-surface'

export const emptyContainerStyles = 'py-20 text-center'

export const emptyIconContainerStyles = cn(
	'mx-auto mb-6 flex h-20 w-20 items-center',
	'justify-center rounded-full bg-surface',
)

export const emptyIconStyles = 'h-8 w-8 text-muted'

export const emptyTitleStyles = 'text-xl font-bold'

export const emptySubtitleStyles = 'mt-2 text-muted'
