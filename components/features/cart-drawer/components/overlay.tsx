'use client'

import {motion} from 'framer-motion'
import {OVERLAY_ANIMATION} from '../cart-drawer.constants'
import {overlayStyles} from '../cart-drawer.styles'

interface OverlayProps {
	onClose: () => void
}

export function Overlay({onClose}: OverlayProps) {
	return (
		<motion.div
			initial={OVERLAY_ANIMATION.initial}
			animate={OVERLAY_ANIMATION.animate}
			exit={OVERLAY_ANIMATION.exit}
			transition={OVERLAY_ANIMATION.transition}
			onClick={onClose}
			className={overlayStyles}
			aria-hidden='true'
		/>
	)
}
