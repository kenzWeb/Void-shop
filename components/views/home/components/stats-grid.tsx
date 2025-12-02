'use client'

import {Container} from '@/components/ui'
import {motion} from 'framer-motion'
import {STATS_ANIMATION} from '../home.constants'
import {
	statItemStyles,
	statLabelStyles,
	statsGridStyles,
	statValueStyles,
} from '../home.styles'
import {StatsGridProps} from '../home.types'

export function StatsGrid({stats}: StatsGridProps) {
	return (
		<Container>
			<motion.div
				initial={STATS_ANIMATION.initial}
				animate={STATS_ANIMATION.animate}
				transition={STATS_ANIMATION.transition}
				className={statsGridStyles}
			>
				{stats.map((stat, index) => (
					<motion.div
						key={stat.label}
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{duration: 0.5, delay: 0.8 + index * 0.1}}
						className={statItemStyles}
					>
						<span className={statValueStyles}>{stat.value}</span>
						<span className={statLabelStyles}>{stat.label}</span>
					</motion.div>
				))}
			</motion.div>
		</Container>
	)
}
