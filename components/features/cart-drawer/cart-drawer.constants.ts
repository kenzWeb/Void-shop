export const DRAWER_ANIMATION = {
	initial: {x: '100%'},
	animate: {x: 0},
	exit: {x: '100%'},
	transition: {
		type: 'spring',
		damping: 30,
		stiffness: 300,
	},
} as const

export const OVERLAY_ANIMATION = {
	initial: {opacity: 0},
	animate: {opacity: 1},
	exit: {opacity: 0},
	transition: {duration: 0.2},
} as const

export const PROGRESS_BAR_ANIMATION = {
	initial: {width: 0},
	transition: {duration: 0.5, ease: [0.16, 1, 0.3, 1]},
} as const

export const EMPTY_STATE_ANIMATION = {
	initial: {scale: 0.8, opacity: 0},
	animate: {scale: 1, opacity: 1},
	delay: 0.1,
} as const

export const ITEM_ANIMATION = {
	initial: {opacity: 0, x: 20},
	animate: {opacity: 1, x: 0},
	exit: {opacity: 0, x: -20},
	transition: {duration: 0.2},
} as const
