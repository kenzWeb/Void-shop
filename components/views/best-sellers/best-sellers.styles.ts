import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const headerContainerStyles = 'mb-12'

export const headerTitleStyles =
	'text-4xl font-bold tracking-tighter lg:text-5xl'

export const headerSubtitleStyles = 'mt-2 text-muted'

export const statsBarStyles = cn(
	'mb-12 grid grid-cols-3 gap-4 border border-accent bg-accent/5 p-6',
)

export const statItemStyles = 'text-center'

export const statIconContainerStyles =
	'mx-auto mb-2 flex h-10 w-10 items-center justify-center'

export const statIconStyles = 'h-6 w-6 text-accent'

export const statValueStyles = 'text-2xl font-bold'

export const statLabelStyles = 'text-sm text-muted'

export const productGridStyles = cn(
	'grid grid-cols-1 gap-6',
	'sm:grid-cols-2 lg:grid-cols-4',
)

export const emptyStateStyles = 'py-20 text-center'

export const emptyIconStyles = 'mx-auto h-12 w-12 text-muted'

export const emptyTitleStyles = 'mt-4 text-lg font-medium'

export const emptySubtitleStyles = 'mt-2 text-muted'
