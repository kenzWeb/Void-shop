'use client'

import {motion} from 'framer-motion'
import {Mail} from 'lucide-react'
import {contactBannerStyles} from '../press.styles'

export function ContactBanner() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.9}}
			className={contactBannerStyles}
		>
			<Mail className='mx-auto h-8 w-8' />
			<h3 className='mt-4 text-xl font-bold'>Media Inquiries</h3>
			<p className='mt-2 text-muted'>Contact our media relations team.</p>
			<a
				href='mailto:press@voidshop.com'
				className='mt-4 inline-block font-medium underline hover:text-accent'
			>
				press@voidshop.com
			</a>
		</motion.div>
	)
}
