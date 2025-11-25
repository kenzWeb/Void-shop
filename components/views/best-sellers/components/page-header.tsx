'use client'

import {motion} from 'framer-motion'
import {
	headerContainerStyles,
	headerSubtitleStyles,
	headerTitleStyles,
} from '../best-sellers.styles'

export function PageHeader() {
	return (
		<div className={headerContainerStyles}>
			<motion.h1
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				className={headerTitleStyles}
			>
				Best Sellers
			</motion.h1>
			<motion.p
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{delay: 0.1}}
				className={headerSubtitleStyles}
			>
				Our most loved products, chosen by thousands of customers
			</motion.p>
		</div>
	)
}
