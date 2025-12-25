'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import {
	sectionHeaderStyles,
	sectionSubtitleStyles,
	sectionTitleStyles,
	teamCardStyles,
	teamGridStyles,
	teamImageContainerStyles,
	teamImageStyles,
	teamNameStyles,
	teamRoleStyles,
} from '../about.styles'
import {TeamGridProps} from '../about.types'

export function TeamGrid({team}: TeamGridProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.6}}
			className='mb-16'
		>
			<div className={sectionHeaderStyles}>
				<h2 className={sectionTitleStyles}>Meet the Team</h2>
				<p className={sectionSubtitleStyles}>The people behind VOIDØ</p>
			</div>

			<div className={teamGridStyles}>
				{team.map((member, index) => (
					<motion.div
						key={member.name}
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.7 + index * 0.1}}
						className={teamCardStyles}
					>
						<div className={teamImageContainerStyles}>
							<Image
								src={member.image}
								alt={member.name}
								fill
								sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
								className={teamImageStyles}
							/>
						</div>
						<h3 className={teamNameStyles}>{member.name}</h3>
						<p className={teamRoleStyles}>{member.role}</p>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}
