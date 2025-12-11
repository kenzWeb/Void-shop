'use client'

import {AnimatePresence, motion} from 'framer-motion'
import {ChevronDown} from 'lucide-react'
import {SECTION_ANIMATION} from '../product-filter.constants'
import {
	sectionButtonStyles,
	sectionChevronStyles,
	sectionContainerStyles,
	sectionContentStyles,
	sectionTitleStyles,
} from '../product-filter.styles'

interface FilterSectionProps {
	title: string
	isExpanded: boolean
	onToggle: () => void
	children: React.ReactNode
}

export function FilterSection({
	title,
	isExpanded,
	onToggle,
	children,
}: FilterSectionProps) {
	return (
		<div className={sectionContainerStyles}>
			<button onClick={onToggle} className={sectionButtonStyles}>
				<span className={sectionTitleStyles}>{title}</span>
				<ChevronDown className={sectionChevronStyles({isExpanded})} />
			</button>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={SECTION_ANIMATION.initial}
						animate={SECTION_ANIMATION.animate}
						exit={SECTION_ANIMATION.exit}
						transition={SECTION_ANIMATION.transition}
						className='overflow-hidden'
					>
						<div className={sectionContentStyles}>{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
