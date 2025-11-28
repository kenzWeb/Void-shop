'use client'

import {Container} from '@/components/ui'
import {motion} from 'framer-motion'
import {Check} from 'lucide-react'
import {successContainerStyles, successIconStyles} from '../register.styles'

export function SuccessState() {
	return (
		<section className='py-20'>
			<Container>
				<motion.div
					initial={{opacity: 0, scale: 0.9}}
					animate={{opacity: 1, scale: 1}}
					className={successContainerStyles}
				>
					<div className={successIconStyles}>
						<Check className='h-10 w-10 text-accent-foreground' />
					</div>
					<h1 className='text-3xl font-bold'>Account Created!</h1>
					<p className='mt-4 text-muted'>Redirecting to login...</p>
				</motion.div>
			</Container>
		</section>
	)
}
