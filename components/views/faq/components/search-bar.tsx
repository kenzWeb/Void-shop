'use client'

import {motion} from 'framer-motion'
import {Search} from 'lucide-react'
import {searchContainerStyles, searchInputStyles} from '../faq.styles'

interface SearchBarProps {
	value: string
	onChange: (value: string) => void
}

export function SearchBar({value, onChange}: SearchBarProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.2}}
			className={searchContainerStyles}
		>
			<div className='relative'>
				<Search className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted' />
				<input
					type='text'
					placeholder='Search FAQs...'
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className={searchInputStyles}
				/>
			</div>
		</motion.div>
	)
}
