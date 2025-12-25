import {cn} from '@/lib/cn'

export const sectionStyles = 'py-8'

export const mainGridStyles = 'grid gap-8 lg:grid-cols-3'

export const sidebarStyles = 'lg:col-span-1'

export const contentStyles = 'lg:col-span-2'

export const cardStyles = 'border border-border'

export const profileCardStyles = cn(cardStyles, 'p-6')

export const avatarContainerStyles =
	'flex h-16 w-16 items-center justify-center bg-accent'

export const avatarIconStyles = 'h-8 w-8 text-accent-foreground'

export const statsGridStyles =
	'mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6'

export const statValueStyles = 'text-2xl font-bold'

export const statLabelStyles = 'text-xs text-muted'

export const signOutButtonStyles = cn(
	'mt-6 flex w-full items-center justify-center gap-2',
	'border border-border py-3 text-sm font-medium',
	'transition-colors hover:bg-surface',
)

export const menuItemStyles = (isLast: boolean) =>
	cn(
		'flex items-center justify-between p-4 transition-colors hover:bg-surface',
		!isLast && 'border-b border-border',
	)

export const orderCardStyles = cn(
	'flex items-center justify-between border border-border p-4',
)

export const orderIconContainerStyles =
	'flex h-12 w-12 items-center justify-center bg-surface'

export const memberBadgeStyles = cn(
	'mt-4 inline-block bg-accent px-3 py-1',
	'text-xs font-bold text-accent-foreground',
)

export const loadingSkeletonStyles = 'animate-pulse space-y-8'
