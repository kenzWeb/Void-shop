'use client'

import {motion} from 'framer-motion'
import {
	sectionHeaderStyles,
	sectionSubtitleStyles,
	sectionTitleStyles,
	valueCardStyles,
	valueDescriptionStyles,
	valueIconContainerStyles,
	valueIconStyles,
	valuesGridStyles,
	valueTitleStyles,
} from '../about.styles'
import {ValuesGridProps} from '../about.types'

export function ValuesGrid({values}: ValuesGridProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.4}}
			className='mb-16'
		>
			<div className={sectionHeaderStyles}>
				<h2 className={sectionTitleStyles}>Our Values</h2>
				<p className={sectionSubtitleStyles}>
					The principles that guide everything we do
				</p>
			</div>

			<div className={valuesGridStyles}>
				{values.map((value, index) => (
					<motion.div
						key={value.title}
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.5 + index * 0.1}}
						className={valueCardStyles}
					>
						<div className={valueIconContainerStyles}>
							<value.icon className={valueIconStyles} />
						</div>
						<h3 className={valueTitleStyles}>{value.title}</h3>
						<p className={valueDescriptionStyles}>{value.description}</p>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}
