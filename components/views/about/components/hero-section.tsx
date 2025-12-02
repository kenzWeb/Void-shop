'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import {HERO_IMAGE} from '../about.constants'
import {
	heroAccentStyles,
	heroDescriptionStyles,
	heroGridStyles,
	heroImageContainerStyles,
	heroSubDescriptionStyles,
	heroTitleStyles,
} from '../about.styles'

export function HeroSection() {
	return (
		<div className='mb-16'>
			<motion.div
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				className={heroGridStyles}
			>
				<div>
					<h1 className={heroTitleStyles}>
						Redefining
						<br />
						<span className={heroAccentStyles}>Modern Style</span>
					</h1>
					<p className={heroDescriptionStyles}>
						VOIDØ was born from a simple idea: create premium, minimalist
						products for those who appreciate quality craftsmanship and timeless
						design.
					</p>
					<p className={heroSubDescriptionStyles}>
						Since 2019, we've been curating a collection that combines
						functionality with aesthetics, proving that less truly is more.
					</p>
				</div>
				<motion.div
					initial={{opacity: 0, scale: 0.95}}
					animate={{opacity: 1, scale: 1}}
					transition={{delay: 0.2}}
					className={heroImageContainerStyles}
				>
					<Image
						src={HERO_IMAGE}
						alt='VOIDØ Store'
						fill
						sizes='(max-width: 1024px) 100vw, 50vw'
						className='object-cover'
					/>
				</motion.div>
			</motion.div>
		</div>
	)
}
