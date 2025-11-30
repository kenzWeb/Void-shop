import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const successSectionStyles = 'py-20'

export const mainContainerStyles = 'mx-auto max-w-4xl'

export const mainGridStyles = 'grid gap-12 lg:grid-cols-2'

export const benefitsSideStyles = 'hidden lg:block'

export const formCardStyles = 'border border-border p-8'

export const inputWithIconStyles = (hasError: boolean) =>
	cn(
		'h-12 w-full border bg-background pl-12 pr-4 text-sm',
		'placeholder:text-muted focus:border-foreground focus:outline-none',
		hasError ? 'border-error' : 'border-border',
	)

export const iconStyles =
	'absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted'

export const successContainerStyles = 'mx-auto max-w-md text-center'

export const successIconStyles =
	'mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent'
