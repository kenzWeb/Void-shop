'use client'

import {motion} from 'framer-motion'
import {STATS} from '../press.constants'

export function CompanyFacts() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.3}}
		>
			<h2 className='mb-6 text-2xl font-bold'>Company Facts</h2>
			<div className='grid grid-cols-3 gap-4 border border-border p-6 md:grid-cols-6'>
				{STATS.map((s) => (
					<div key={s.label} className='text-center'>
						<p className='text-xl font-bold text-accent'>{s.value}</p>
						<p className='text-sm text-muted'>{s.label}</p>
					</div>
				))}
			</div>
		</motion.div>
	)
}
