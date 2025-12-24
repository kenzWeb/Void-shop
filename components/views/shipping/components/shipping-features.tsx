'use client'

import {motion} from 'framer-motion'
import {FEATURES} from '../shipping.constants'
import {featureIconStyles, featureStyles} from '../shipping.styles'

export function ShippingFeatures() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.6}}
			className='grid gap-6 md:grid-cols-3'
		>
			{FEATURES.map((f) => (
				<div key={f.title} className={featureStyles}>
					<div className={featureIconStyles}>
						<f.icon className='h-6 w-6' />
					</div>
					<h3 className='font-bold'>{f.title}</h3>
					<p className='mt-2 text-sm text-muted'>{f.desc}</p>
				</div>
			))}
		</motion.div>
	)
}
