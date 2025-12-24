'use client'

import {motion} from 'framer-motion'
import {Globe} from 'lucide-react'
import {INTL} from '../shipping.constants'
import {tableHeaderStyles} from '../shipping.styles'

export function InternationalShipping() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.5}}
		>
			<div className='mb-6 flex items-center gap-2'>
				<Globe className='h-6 w-6' />
				<h2 className='text-2xl font-bold'>International</h2>
			</div>
			<div className='border border-border'>
				<div className={tableHeaderStyles}>
					<span>Destination</span>
					<span>Time</span>
					<span>Price</span>
				</div>
				{INTL.map((z, i) => (
					<div
						key={z.zone}
						className={`grid grid-cols-3 p-4 text-sm ${
							i < INTL.length - 1 ? 'border-b border-border' : ''
						}`}
					>
						<span className='font-medium'>{z.zone}</span>
						<span className='text-muted'>{z.time}</span>
						<span>{z.price}</span>
					</div>
				))}
			</div>
		</motion.div>
	)
}
