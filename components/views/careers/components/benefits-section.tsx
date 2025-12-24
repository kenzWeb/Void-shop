'use client'

import {motion} from 'framer-motion'
import {BENEFITS} from '../careers.constants'
import {benefitCardStyles, benefitsGridStyles} from '../careers.styles'

export function BenefitsSection() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.2}}
			className='mb-16'
		>
			<h2 className='mb-8 text-center text-2xl font-bold'>Why VOIDØ?</h2>
			<div className={benefitsGridStyles}>
				{BENEFITS.map((b, i) => (
					<motion.div
						key={b.title}
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.3 + i * 0.1}}
						className={benefitCardStyles}
					>
						<div className='mb-4 inline-flex h-10 w-10 items-center justify-center bg-surface'>
							<b.icon className='h-5 w-5' />
						</div>
						<h3 className='mb-1 font-bold'>{b.title}</h3>
						<p className='text-sm text-muted'>{b.description}</p>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}
