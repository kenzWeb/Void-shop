'use client'

import {Product} from '@/types'
import {motion} from 'framer-motion'
import {RESULTS_ANIMATION} from '../search-bar.constants'
import {
	noResultsStyles,
	noResultsTextStyles,
	resultsContainerStyles,
	resultsListStyles,
} from '../search-bar.styles'
import {SearchResult} from './search-result'

interface SearchResultsProps {
	results: Product[]
	query: string
	onResultClick: () => void
}

export function SearchResults({
	results,
	query,
	onResultClick,
}: SearchResultsProps) {
	return (
		<motion.div
			initial={RESULTS_ANIMATION.initial}
			animate={RESULTS_ANIMATION.animate}
			exit={RESULTS_ANIMATION.exit}
			transition={RESULTS_ANIMATION.transition}
			className={resultsContainerStyles}
		>
			{results.length > 0 ? (
				<div className={resultsListStyles}>
					{results.map((product) => (
						<SearchResult
							key={product.id}
							product={product}
							query={query}
							onClick={onResultClick}
						/>
					))}
				</div>
			) : (
				<div className={noResultsStyles}>
					<p className={noResultsTextStyles}>
						No results found for &quot;{query}&quot;
					</p>
				</div>
			)}
		</motion.div>
	)
}
