'use client'

import {motion} from 'framer-motion'
import {headerStyles, subtitleStyles, titleStyles} from '../faq.styles'

export function PageHeader() {
	return (
		<div className={headerStyles}>
			<motion.h1
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				className={titleStyles}
			>
				Frequently Asked Questions
			</motion.h1>
			<motion.p
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{delay: 0.1}}
				className={subtitleStyles}
			>
				Find answers to common questions.
			</motion.p>
		</div>
	)
}
