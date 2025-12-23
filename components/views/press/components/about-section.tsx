'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'

export function AboutSection() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.2}}
			className='grid gap-8 md:grid-cols-2'
		>
			<div className='relative aspect-video overflow-hidden border border-border'>
				<Image
					src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop'
					alt='VOIDØ'
					fill
					sizes='(max-width: 768px) 100vw, 50vw'
					className='object-cover'
				/>
			</div>
			<div className='flex flex-col justify-center'>
				<h2 className='text-2xl font-bold'>About VOIDØ</h2>
				<p className='mt-4 text-muted'>
					Premium e-commerce platform founded in 2019, curating minimalist
					products for the modern consumer.
				</p>
			</div>
		</motion.div>
	)
}
