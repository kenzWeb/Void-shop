import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const formContainerStyles = 'mx-auto max-w-md'

export const headerContainerStyles = 'mb-8 text-center'

export const titleStyles = 'text-4xl font-bold tracking-tighter'

export const subtitleStyles = 'mt-2 text-muted'

export const formCardStyles = 'border border-border p-8'

export const errorAlertStyles = cn(
	'mb-6 flex items-center gap-2 border border-error bg-error/10 p-3 text-sm text-error',
)

export const inputWithIconStyles = (hasError: boolean) =>
	cn(
		'h-12 w-full border bg-background pl-12 pr-4 text-sm',
		'placeholder:text-muted focus:border-foreground focus:outline-none',
		hasError ? 'border-error' : 'border-border',
	)

export const iconStyles =
	'absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted'

export const rememberMeRowStyles = 'flex items-center justify-between text-sm'

export const linkToRegisterStyles = 'mt-6 text-center text-sm'

export const demoCredentialsStyles = 'mt-8 border-t border-border pt-6'
