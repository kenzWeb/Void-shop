import {cn} from '@/lib/cn'

export const heroSectionStyles = 'relative overflow-hidden'

export const heroContainerStyles = 'py-20 lg:py-32'

export const heroContentStyles = 'mx-auto max-w-4xl text-center'

export const announcementBadgeStyles = cn(
	'mb-6 inline-flex items-center gap-2',
	'border border-border px-4 py-2',
)

export const announcementDotStyles =
	'h-2 w-2 animate-pulse rounded-full bg-accent'

export const announcementTextStyles = cn(
	'text-xs font-medium uppercase tracking-wider text-muted',
)

export const heroTitleStyles = cn(
	'text-5xl font-bold tracking-tighter',
	'sm:text-6xl lg:text-8xl',
)

export const heroUnderlineStyles = cn(
	'absolute bottom-2 left-0 z-0 h-4 bg-accent',
	'lg:bottom-4 lg:h-6',
)

export const heroDescriptionStyles = cn(
	'mx-auto mt-8 max-w-2xl text-lg text-muted lg:text-xl',
)

export const heroActionsStyles = cn(
	'mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row',
)

export const statsGridStyles = cn(
	'mt-20 grid grid-cols-2 gap-px',
	'border border-border bg-border md:grid-cols-4',
)

export const statItemStyles = cn(
	'flex flex-col items-center justify-center',
	'bg-background px-6 py-8',
)

export const statValueStyles = 'text-3xl font-bold tracking-tighter lg:text-4xl'

export const statLabelStyles = 'mt-2 text-sm text-muted'

export const heroOverlayStyles = cn(
	'pointer-events-none absolute inset-0',
	'bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_70%)]',
)

export const featuredSectionStyles = 'border-t border-border py-20'

export const featuredHeaderStyles = 'mb-12 flex items-end justify-between'

export const featuredTitleStyles =
	'text-3xl font-bold tracking-tighter lg:text-4xl'

export const featuredSubtitleStyles = 'mt-2 text-muted'

export const productsGridStyles = cn(
	'grid grid-cols-1 gap-6',
	'sm:grid-cols-2 lg:grid-cols-4',
)
