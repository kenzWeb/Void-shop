import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const headerStyles = 'mb-12 text-center'

export const titleStyles = 'text-4xl font-bold tracking-tighter lg:text-5xl'

export const subtitleStyles = 'mx-auto mt-4 max-w-xl text-muted'

export const mainGridStyles = 'grid gap-12 lg:grid-cols-2'

export const contactCardStyles = cn(
	'group border border-border p-6 transition-colors hover:border-accent',
)

export const iconContainerStyles = cn(
	'mb-4 inline-flex h-12 w-12 items-center justify-center bg-surface',
	'transition-colors group-hover:bg-accent',
)

export const liveChatStyles = 'mt-8 border border-border p-6'

export const formCardStyles = 'border border-border p-8'

export const inputStyles = (hasError: boolean) =>
	cn(
		'h-12 w-full border bg-background px-4 text-sm focus:border-foreground focus:outline-none',
		hasError ? 'border-error' : 'border-border',
	)

export const textareaStyles = (hasError: boolean) =>
	cn(
		'w-full resize-none border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none',
		hasError ? 'border-error' : 'border-border',
	)
