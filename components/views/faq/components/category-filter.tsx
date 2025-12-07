'use client'

import {motion} from 'framer-motion'
import {FAQ_CATEGORIES} from '../faq.constants'
import {categoryButtonStyles, categoryFilterStyles} from '../faq.styles'

interface CategoryFilterProps {
	activeCategory: string | null
	onSelectCategory: (id: string | null) => void
}

export function CategoryFilter({
	activeCategory,
	onSelectCategory,
}: CategoryFilterProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.3}}
			className={categoryFilterStyles}
		>
			<button
				onClick={() => onSelectCategory(null)}
				className={categoryButtonStyles(!activeCategory)}
			>
				All
			</button>
			{FAQ_CATEGORIES.map((cat) => (
				<button
					key={cat.id}
					onClick={() => onSelectCategory(cat.id)}
					className={categoryButtonStyles(activeCategory === cat.id)}
				>
					<cat.icon className='h-4 w-4' />
					{cat.title}
				</button>
			))}
		</motion.div>
	)
}
