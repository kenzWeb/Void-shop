'use client'

import {motion} from 'framer-motion'
import {
	statIconContainerStyles,
	statIconStyles,
	statItemStyles,
	statLabelStyles,
	statsBarStyles,
	statValueStyles,
} from '../best-sellers.styles'
import {StatItem} from '../best-sellers.types'

interface StatsBarProps {
	stats: StatItem[]
}

export function StatsBar({stats}: StatsBarProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.2}}
			className={statsBarStyles}
		>
			{stats.map((stat) => (
				<div key={stat.label} className={statItemStyles}>
					<div className={statIconContainerStyles}>
						<stat.icon className={statIconStyles} />
					</div>
					<p className={statValueStyles}>{stat.value}</p>
					<p className={statLabelStyles}>{stat.label}</p>
				</div>
			))}
		</motion.div>
	)
}
