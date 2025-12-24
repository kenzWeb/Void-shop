'use client'

import {motion} from 'framer-motion'
import {Clock, Truck} from 'lucide-react'
import {OPTIONS} from '../shipping.constants'
import {optionCardStyles} from '../shipping.styles'

export function DomesticShipping() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.2}}
		>
			<div className='mb-6 flex items-center gap-2'>
				<Truck className='h-6 w-6' />
				<h2 className='text-2xl font-bold'>Domestic (US)</h2>
			</div>
			<div className='grid gap-4 md:grid-cols-3'>
				{OPTIONS.map((o) => (
					<div key={o.name} className={optionCardStyles}>
						<h3 className='font-bold'>{o.name}</h3>
						<p className='mt-2 text-2xl font-bold text-accent'>{o.price}</p>
						<div className='mt-2 flex items-center gap-2 text-sm text-muted'>
							<Clock className='h-4 w-4' />
							{o.time}
						</div>
						<p className='mt-4 text-sm text-muted'>{o.desc}</p>
					</div>
				))}
			</div>
		</motion.div>
	)
}
