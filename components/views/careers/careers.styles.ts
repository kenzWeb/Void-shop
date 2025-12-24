import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const headerStyles = 'mb-16 text-center'

export const titleStyles = 'text-4xl font-bold tracking-tighter lg:text-5xl'

export const subtitleStyles = 'mx-auto mt-4 max-w-xl text-muted'

export const benefitsGridStyles = 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'

export const benefitCardStyles = 'border border-border p-6'

export const departmentButtonStyles = (isActive: boolean) =>
	cn(
		'border px-4 py-2 text-sm font-medium transition-colors',
		isActive
			? 'border-foreground bg-foreground text-background'
			: 'border-border hover:border-foreground',
	)

export const jobCardStyles =
	'group border border-border p-6 transition-colors hover:border-accent'

export const contactBannerStyles =
	'mt-16 border border-accent bg-accent/5 p-8 text-center'
