'use client'

import {motion} from 'framer-motion'
import {headerStyles, subtitleStyles, titleStyles} from '../press.styles'

export function PageHeader() {
	return (
		<div className={headerStyles}>
			<motion.h1
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				className={titleStyles}
			>
				Press & Media
			</motion.h1>
			<motion.p
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{delay: 0.1}}
				className={subtitleStyles}
			>
				Resources for journalists and media professionals.
			</motion.p>
		</div>
	)
}
