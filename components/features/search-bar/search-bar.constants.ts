export const OVERLAY_ANIMATION = {
	initial: {opacity: 0},
	animate: {opacity: 1},
	exit: {opacity: 0},
	transition: {duration: 0.2},
} as const

export const SEARCH_PANEL_ANIMATION = {
	initial: {opacity: 0, y: -20},
	animate: {opacity: 1, y: 0},
	exit: {opacity: 0, y: -20},
	transition: {duration: 0.2, ease: [0.16, 1, 0.3, 1]},
} as const

export const RESULTS_ANIMATION = {
	initial: {opacity: 0, height: 0},
	animate: {opacity: 1, height: 'auto'},
	exit: {opacity: 0, height: 0},
	transition: {duration: 0.2},
} as const

export const DEBOUNCE_DELAY = 300

export const MAX_RESULTS = 6

export const SEARCH_SUGGESTIONS = ['hoodie', 'watch', 'sneakers']
