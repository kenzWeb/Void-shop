'use client'

import {Button} from '@/components/ui'
import {motion} from 'framer-motion'
import {Mail} from 'lucide-react'
import Link from 'next/link'
import {contactStyles} from '../returns.styles'

export function ContactSection() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.6}}
			className={contactStyles}
		>
			<Mail className='h-8 w-8 text-muted' />
			<div>
				<p className='font-bold'>Need Help?</p>
				<p className='mt-1 text-sm text-muted'>Mon-Fri, 9 AM - 6 PM EST</p>
			</div>
			<Link href='/contact'>
				<Button>Contact Support</Button>
			</Link>
		</motion.div>
	)
}
