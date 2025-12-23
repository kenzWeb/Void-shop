'use client'

import {Button} from '@/components/ui'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {contactBannerStyles} from '../faq.styles'

export function ContactBanner() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.6}}
			className={contactBannerStyles}
		>
			<h3 className='text-lg font-bold'>Still have questions?</h3>
			<p className='mt-2 text-sm text-muted'>
				Our support team is here to help.
			</p>
			<Link href='/contact'>
				<Button className='mt-4'>Contact Support</Button>
			</Link>
		</motion.div>
	)
}
