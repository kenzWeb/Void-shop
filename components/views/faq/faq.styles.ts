import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const headerStyles = 'mb-12 text-center'

export const titleStyles = 'text-4xl font-bold tracking-tighter lg:text-5xl'

export const subtitleStyles = 'mx-auto mt-4 max-w-xl text-muted'

export const searchContainerStyles = 'mx-auto mb-8 max-w-xl'

export const searchInputStyles = cn(
	'h-14 w-full border border-border bg-background pl-12 pr-4 text-sm',
	'focus:border-foreground focus:outline-none',
)

export const categoryFilterStyles = 'mb-8 flex flex-wrap justify-center gap-2'

export const categoryButtonStyles = (isActive: boolean) =>
	cn(
		'inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors',
		isActive
			? 'border-foreground bg-foreground text-background'
			: 'border-border hover:border-foreground',
	)

export const faqContainerStyles = 'mx-auto max-w-3xl space-y-8'

export const accordionItemStyles = (isLast: boolean) =>
	cn(!isLast && 'border-b border-border')

export const contactBannerStyles = cn(
	'mx-auto mt-12 max-w-xl border border-accent bg-accent/5 p-8 text-center',
)
