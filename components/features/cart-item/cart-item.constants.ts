// refactor(cart-item): add animation constants
export const ITEM_ANIMATION = {
	initial: {opacity: 0, x: 20},
	animate: {opacity: 1, x: 0},
	exit: {opacity: 0, x: -20},
	transition: {duration: 0.2},
} as const
