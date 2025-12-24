'use client'

import {motion} from 'framer-motion'
import {Clock, Mail, MapPin, Phone} from 'lucide-react'
import {contactCardStyles, iconContainerStyles} from '../contact.styles'

const CONTACT_INFO = [
	{
		icon: Mail,
		label: 'Email',
		value: 'support@voidshop.com',
		href: 'mailto:support@voidshop.com',
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '+1 (555) 123-4567',
		href: 'tel:+15551234567',
	},
	{
		icon: MapPin,
		label: 'Address',
		value: '123 Design District, NY 10001',
		href: '#',
	},
	{icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM - 6PM EST', href: '#'},
]

export function ContactInfoGrid() {
	return (
		<div className='grid gap-6 sm:grid-cols-2'>
			{CONTACT_INFO.map((item, index) => (
				<motion.a
					key={item.label}
					href={item.href}
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.3 + index * 0.1}}
					className={contactCardStyles}
				>
					<div className={iconContainerStyles}>
						<item.icon className='h-5 w-5 text-muted transition-colors group-hover:text-accent-foreground' />
					</div>
					<p className='text-sm text-muted'>{item.label}</p>
					<p className='mt-1 font-medium'>{item.value}</p>
				</motion.a>
			))}
		</div>
	)
}
