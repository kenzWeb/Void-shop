'use client'

import {motion} from 'framer-motion'
import {Download} from 'lucide-react'
import {PRESS_KITS} from '../press.constants'
import {pressKitCardStyles, pressKitIconStyles} from '../press.styles'

export function PressKitSection() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.4}}
		>
			<h2 className='mb-6 text-2xl font-bold'>Press Kit</h2>
			<div className='grid gap-4 md:grid-cols-3'>
				{PRESS_KITS.map((kit) => (
					<div key={kit.title} className={pressKitCardStyles}>
						<div className={pressKitIconStyles}>
							<kit.icon className='h-6 w-6 text-muted transition-colors group-hover:text-accent-foreground' />
						</div>
						<h3 className='font-bold'>{kit.title}</h3>
						<p className='mt-1 text-sm text-muted'>{kit.description}</p>
						<p className='mt-2 text-xs text-muted'>{kit.size}</p>
						<button className='mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-accent'>
							<Download className='h-4 w-4' />
							Download
						</button>
					</div>
				))}
			</div>
		</motion.div>
	)
}
