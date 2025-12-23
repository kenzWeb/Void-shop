'use client'

import {motion} from 'framer-motion'
import {HIGHLIGHTS} from '../returns.constants'
import {highlightBannerStyles} from '../returns.styles'

export function HighlightBanner() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.2}}
			className={highlightBannerStyles}
		>
			{HIGHLIGHTS.map((x) => (
				<div key={x.val} className='text-center'>
					<div className='mx-auto mb-3 flex h-14 w-14 items-center justify-center bg-accent'>
						<x.icon className='h-6 w-6 text-accent-foreground' />
					</div>
					<p className='text-2xl font-bold'>{x.val}</p>
					<p className='text-sm text-muted'>{x.sub}</p>
				</div>
			))}
		</motion.div>
	)
}
