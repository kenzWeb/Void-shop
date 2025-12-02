'use client'

import {Button, Container} from '@/components/ui'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'
import {
	CONTAINER_VARIANTS,
	ITEM_VARIANTS,
	UNDERLINE_ANIMATION,
} from '../home.constants'
import {
	announcementBadgeStyles,
	announcementDotStyles,
	announcementTextStyles,
	heroActionsStyles,
	heroContainerStyles,
	heroContentStyles,
	heroDescriptionStyles,
	heroOverlayStyles,
	heroSectionStyles,
	heroTitleStyles,
	heroUnderlineStyles,
} from '../home.styles'

export function HeroSection() {
	return (
		<section className={heroSectionStyles}>
			<Container className={heroContainerStyles}>
				<motion.div
					variants={CONTAINER_VARIANTS}
					initial='hidden'
					animate='visible'
					className={heroContentStyles}
				>
					<motion.div
						variants={ITEM_VARIANTS}
						className={announcementBadgeStyles}
					>
						<span className={announcementDotStyles} />
						<span className={announcementTextStyles}>
							New Collection Available
						</span>
					</motion.div>

					<motion.h1 variants={ITEM_VARIANTS} className={heroTitleStyles}>
						Designed for the
						<br />
						<span className='relative'>
							<span className='relative z-10'>Modern Era</span>
							<motion.span
								initial={UNDERLINE_ANIMATION.initial}
								animate={UNDERLINE_ANIMATION.animate}
								transition={UNDERLINE_ANIMATION.transition}
								className={heroUnderlineStyles}
							/>
						</span>
					</motion.h1>

					<motion.p variants={ITEM_VARIANTS} className={heroDescriptionStyles}>
						Premium curated products that blend minimalist aesthetics with
						uncompromising quality. Every piece tells a story.
					</motion.p>

					<motion.div variants={ITEM_VARIANTS} className={heroActionsStyles}>
						<Link href='/shop'>
							<Button size='lg' rightIcon={<ArrowRight className='h-4 w-4' />}>
								Explore Collection
							</Button>
						</Link>
						<Link href='/collections'>
							<Button variant='outline' size='lg'>
								View Lookbook
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</Container>

			<div className={heroOverlayStyles} />
		</section>
	)
}
