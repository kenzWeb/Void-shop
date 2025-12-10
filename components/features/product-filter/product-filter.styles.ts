import {cn} from '@/lib/cn'
import {cva} from 'class-variance-authority'

export const overlayStyles =
	'fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm'

export const drawerContainerStyles = cn(
	'fixed left-0 top-0 z-50 h-full w-full max-w-sm',
	'flex flex-col bg-background',
	'border-r border-border shadow-2xl',
)

export const headerStyles = cn(
	'flex items-center justify-between',
	'border-b border-border px-6 py-4',
)

export const headerTitleStyles = 'text-lg font-bold'

export const contentContainerStyles = 'flex-1 overflow-y-auto'

export const footerStyles = 'border-t border-border p-6'

export const footerActionsStyles = 'flex gap-3'

export const toolbarContainerStyles = 'flex items-center justify-between gap-4'

export const filterCountBadgeStyles = cn(
	'ml-2 flex h-5 w-5 items-center justify-center',
	'rounded-full bg-accent text-xs font-bold text-accent-foreground',
)

export const sortContainerStyles = 'flex items-center gap-2'

export const sortLabelStyles = 'text-sm text-muted'

export const sortSelectStyles = cn(
	'h-10 border border-border bg-background px-3 text-sm',
	'focus:outline-none focus:ring-2 focus:ring-foreground',
)

export const sectionContainerStyles = 'border-b border-border'

export const sectionButtonStyles = cn(
	'flex w-full items-center justify-between',
	'px-6 py-4 text-left',
)

export const sectionTitleStyles = 'font-medium'

export const sectionChevronStyles = cva(
	'h-4 w-4 text-muted transition-transform',
	{
		variants: {
			isExpanded: {
				true: 'rotate-180',
				false: '',
			},
		},
		defaultVariants: {
			isExpanded: false,
		},
	},
)

export const sectionContentStyles = 'px-6 pb-4'

export const categoryContainerStyles = 'space-y-2'

export const categoryLabelStyles = 'flex cursor-pointer items-center gap-3'

export const categoryCheckboxStyles = 'h-4 w-4 accent-accent'

export const categoryTextStyles = 'text-sm'

export const colorContainerStyles = 'flex flex-wrap gap-2'

export const colorButtonStyles = cva(
	'h-8 w-8 rounded-full border-2 transition-transform hover:scale-110',
	{
		variants: {
			isSelected: {
				true: 'border-foreground ring-2 ring-foreground ring-offset-2',
				false: 'border-border',
			},
		},
		defaultVariants: {
			isSelected: false,
		},
	},
)

export const sizeContainerStyles = 'flex flex-wrap gap-2'

export const sizeButtonStyles = cva(
	'flex h-10 w-12 items-center justify-center border text-sm font-medium transition-colors',
	{
		variants: {
			isSelected: {
				true: 'border-foreground bg-foreground text-background',
				false: 'border-border hover:border-foreground',
			},
		},
		defaultVariants: {
			isSelected: false,
		},
	},
)

export const priceContainerStyles = 'space-y-4'

export const priceInputContainerStyles = 'flex items-center gap-4'

export const priceFieldContainerStyles = 'flex-1'

export const priceLabelStyles = 'mb-1 block text-xs text-muted'

export const priceInputStyles = cn(
	'h-10 w-full border border-border bg-background px-3 text-sm',
)

export const priceDividerStyles = 'text-muted'
