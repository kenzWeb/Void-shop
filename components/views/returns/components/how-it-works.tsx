'use client'

import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import {STEPS} from '../returns.constants'

export function HowItWorks() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.3}}
		>
			<h2 className='mb-6 text-2xl font-bold'>How It Works</h2>
			<div className='grid gap-6 md:grid-cols-4'>
				{STEPS.map((s, i) => (
					<div key={s.num} className='relative'>
						<div className='mb-4 text-4xl font-bold text-accent/30'>
							{s.num}
						</div>
						<h3 className='mb-2 font-bold'>{s.title}</h3>
						<p className='text-sm text-muted'>{s.desc}</p>
						{i < STEPS.length - 1 && (
							<ArrowRight className='absolute right-0 top-4 hidden h-6 w-6 text-muted lg:block' />
						)}
					</div>
				))}
			</div>
		</motion.div>
	)
}
