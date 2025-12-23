import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const heroGridStyles = 'grid items-center gap-12 lg:grid-cols-2'

export const heroTitleStyles = 'text-4xl font-bold tracking-tighter lg:text-6xl'

export const heroAccentStyles = 'text-accent'

export const heroDescriptionStyles = 'mt-6 text-lg text-muted'

export const heroSubDescriptionStyles = 'mt-4 text-muted'

export const heroImageContainerStyles = cn(
	'relative aspect-square overflow-hidden border border-border',
)

export const statsBarStyles = cn(
	'mb-16 grid grid-cols-2 gap-6 border border-border p-8 md:grid-cols-4',
)

export const statValueStyles = 'text-3xl font-bold text-accent lg:text-4xl'

export const statLabelStyles = 'mt-1 text-sm text-muted'

export const sectionHeaderStyles = 'mb-8 text-center'

export const sectionTitleStyles = 'text-3xl font-bold tracking-tighter'

export const sectionSubtitleStyles = 'mt-2 text-muted'

export const valuesGridStyles = 'grid gap-6 md:grid-cols-2 lg:grid-cols-4'

export const valueCardStyles = 'border border-border p-6'

export const valueIconContainerStyles = cn(
	'mb-4 inline-flex h-12 w-12 items-center justify-center bg-accent',
)

export const valueIconStyles = 'h-6 w-6 text-accent-foreground'

export const valueTitleStyles = 'mb-2 font-bold'

export const valueDescriptionStyles = 'text-sm text-muted'

export const teamGridStyles = 'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'

export const teamCardStyles = 'group'

export const teamImageContainerStyles = cn(
	'relative mb-4 aspect-square overflow-hidden border border-border',
)

export const teamImageStyles = cn(
	'object-cover transition-transform duration-500 group-hover:scale-105',
)

export const teamNameStyles = 'font-bold'

export const teamRoleStyles = 'text-sm text-muted'

export const ctaGridStyles =
	'grid gap-8 border border-border p-8 md:grid-cols-2'

export const ctaBlockStyles = 'flex items-center gap-2'

export const ctaTitleStyles = 'text-xl font-bold'

export const ctaDescriptionStyles = 'text-muted'

export const ctaLinkStyles = cn(
	'mt-4 inline-block text-sm font-medium underline hover:text-accent',
)
