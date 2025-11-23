'use client'

import {motion} from 'framer-motion'
import {headerStyles, titleStyles} from '../privacy.styles'

export function PageHeader() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			className={headerStyles}
		>
			<h1 className={titleStyles}>Privacy Policy</h1>
			<p className='mt-4 text-muted'>Last updated: December 28, 2024</p>
			<p className='mt-4 text-muted'>
				At VOIDØ, we take your privacy seriously.
			</p>
		</motion.div>
	)
}
