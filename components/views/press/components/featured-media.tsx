'use client'

import {motion} from 'framer-motion'
import {ExternalLink} from 'lucide-react'
import Image from 'next/image'
import {MEDIA} from '../press.constants'
import {mediaCardStyles} from '../press.styles'

export function FeaturedMedia() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.6}}
		>
			<h2 className='mb-6 text-2xl font-bold'>Featured In</h2>
			<div className='grid gap-6 md:grid-cols-3'>
				{MEDIA.map((m) => (
					<a key={m.title} href='#' className={mediaCardStyles}>
						<div className='relative aspect-[4/3] overflow-hidden'>
							<Image
								src={m.image}
								alt={m.title}
								fill
								sizes='33vw'
								className='object-cover transition-transform duration-500 group-hover:scale-105'
							/>
						</div>
						<div className='p-4'>
							<p className='text-xs text-accent'>{m.publication}</p>
							<h3 className='mt-1 font-bold'>{m.title}</h3>
							<p className='mt-1 text-sm text-muted'>{m.date}</p>
							<span className='mt-2 inline-flex items-center gap-1 text-sm hover:text-accent'>
								Read
								<ExternalLink className='h-3 w-3' />
							</span>
						</div>
					</a>
				))}
			</div>
		</motion.div>
	)
}
