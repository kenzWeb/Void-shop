'use client'

import {Button} from '@/components/ui'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {contactBannerStyles} from '../careers.styles'

export function ContactBanner() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.8}}
			className={contactBannerStyles}
		>
			<h3 className='text-xl font-bold'>Don&apos;t see the right role?</h3>
			<p className='mt-2 text-muted'>
				Send us your resume for future opportunities.
			</p>
			<Link href='/contact'>
				<Button className='mt-6'>Get in Touch</Button>
			</Link>
		</motion.div>
	)
}
