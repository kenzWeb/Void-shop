'use client'

import {motion} from 'framer-motion'
import {SECTIONS} from '../terms.constants'
import {sectionListStyles} from '../terms.styles'

export function SectionList() {
	return (
		<div className={sectionListStyles}>
			{SECTIONS.map((s, i) => (
				<motion.div
					key={s.title}
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.1 + i * 0.03}}
				>
					<h2 className='mb-3 text-lg font-bold'>{s.title}</h2>
					<p className='text-sm leading-relaxed text-muted'>{s.content}</p>
				</motion.div>
			))}
		</div>
	)
}
