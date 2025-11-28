'use client'

import {motion} from 'framer-motion'
import {Check} from 'lucide-react'
import {FEATURES} from '../register.constants'

export function BenefitsSidebar() {
	return (
		<motion.div
			initial={{opacity: 0, x: -20}}
			animate={{opacity: 1, x: 0}}
			className='hidden lg:block'
		>
			<h2 className='text-3xl font-bold tracking-tighter'>Join VOIDØ</h2>
			<p className='mt-4 text-muted'>
				Create an account to unlock exclusive benefits.
			</p>
			<ul className='mt-8 space-y-4'>
				{FEATURES.map((feature, index) => (
					<motion.li
						key={feature}
						initial={{opacity: 0, x: -10}}
						animate={{opacity: 1, x: 0}}
						transition={{delay: 0.2 + index * 0.1}}
						className='flex items-center gap-3'
					>
						<div className='flex h-6 w-6 items-center justify-center bg-accent'>
							<Check className='h-4 w-4 text-accent-foreground' />
						</div>
						<span>{feature}</span>
					</motion.li>
				))}
			</ul>
		</motion.div>
	)
}
