'use client'

import {motion} from 'framer-motion'
import {statLabelStyles, statsBarStyles, statValueStyles} from '../about.styles'
import {StatsBarProps} from '../about.types'

export function StatsBar({stats}: StatsBarProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.3}}
			className={statsBarStyles}
		>
			{stats.map((stat) => (
				<div key={stat.label} className='text-center'>
					<p className={statValueStyles}>{stat.value}</p>
					<p className={statLabelStyles}>{stat.label}</p>
				</div>
			))}
		</motion.div>
	)
}
