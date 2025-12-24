'use client'

import {motion} from 'framer-motion'
import {contactCardStyles} from '../privacy.styles'

export function ContactCard() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.5}}
			className={contactCardStyles}
		>
			<h3 className='font-bold'>Questions?</h3>
			<p className='mt-2 text-sm text-muted'>
				Contact us at{' '}
				<a
					href='mailto:privacy@voidshop.com'
					className='underline hover:text-accent'
				>
					privacy@voidshop.com
				</a>
			</p>
		</motion.div>
	)
}
