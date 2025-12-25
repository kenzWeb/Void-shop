'use client'

import {motion} from 'framer-motion'
import {Award, Users} from 'lucide-react'
import {
	ctaBlockStyles,
	ctaDescriptionStyles,
	ctaGridStyles,
	ctaLinkStyles,
	ctaTitleStyles,
} from '../about.styles'

export function CTASection() {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.9}}
			className={ctaGridStyles}
		>
			<div>
				<div className={ctaBlockStyles}>
					<Users className='h-6 w-6' />
					<h3 className={ctaTitleStyles}>Join Our Team</h3>
				</div>
				<p className={ctaDescriptionStyles}>
					We're always looking for talented individuals who share our passion
					for design and innovation.
				</p>
				<a href='/careers' className={ctaLinkStyles}>
					View Open Positions →
				</a>
			</div>
			<div>
				<div className={ctaBlockStyles}>
					<Award className='h-6 w-6' />
					<h3 className={ctaTitleStyles}>Press & Media</h3>
				</div>
				<p className={ctaDescriptionStyles}>
					For media inquiries, press kits, and brand assets, visit our press
					page.
				</p>
				<a href='/press' className={ctaLinkStyles}>
					Press Resources →
				</a>
			</div>
		</motion.div>
	)
}
