'use client'

import {motion} from 'framer-motion'
import {CheckCircle, XCircle} from 'lucide-react'
import {ELIGIBLE, NOT_ELIGIBLE} from '../returns.constants'
import {eligibleCardStyles} from '../returns.styles'

export function EligibilitySection() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.4}}
			className='grid gap-6 md:grid-cols-2'
		>
			<div className={eligibleCardStyles}>
				<div className='mb-4 flex items-center gap-2'>
					<CheckCircle className='h-5 w-5 text-accent' />
					<h3 className='font-bold'>Eligible</h3>
				</div>
				<ul className='space-y-2'>
					{ELIGIBLE.map((e) => (
						<li key={e} className='flex items-center gap-2 text-sm text-muted'>
							<span className='h-1 w-1 rounded-full bg-accent' />
							{e}
						</li>
					))}
				</ul>
			</div>
			<div className={eligibleCardStyles}>
				<div className='mb-4 flex items-center gap-2'>
					<XCircle className='h-5 w-5 text-error' />
					<h3 className='font-bold'>Not Eligible</h3>
				</div>
				<ul className='space-y-2'>
					{NOT_ELIGIBLE.map((e) => (
						<li key={e} className='flex items-center gap-2 text-sm text-muted'>
							<span className='h-1 w-1 rounded-full bg-error' />
							{e}
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	)
}
