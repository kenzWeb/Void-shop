'use client'

import {AnimatePresence, motion} from 'framer-motion'
import {SearchInput, SearchResults, SearchSuggestions} from './components'
import {OVERLAY_ANIMATION, SEARCH_PANEL_ANIMATION} from './search-bar.constants'
import {
	overlayStyles,
	searchBoxStyles,
	searchContainerStyles,
	searchPanelPositionStyles,
} from './search-bar.styles'
import {SearchBarUIProps} from './search-bar.types'

export function SearchBarUI({
	isOpen,
	query,
	debouncedQuery,
	isLoading,
	results,
	inputRef,
	onQueryChange,
	onClearQuery,
	onClose,
	onResultClick,
}: SearchBarUIProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={OVERLAY_ANIMATION.initial}
						animate={OVERLAY_ANIMATION.animate}
						exit={OVERLAY_ANIMATION.exit}
						transition={OVERLAY_ANIMATION.transition}
						onClick={onClose}
						className={overlayStyles}
					/>

					<motion.div
						initial={SEARCH_PANEL_ANIMATION.initial}
						animate={SEARCH_PANEL_ANIMATION.animate}
						exit={SEARCH_PANEL_ANIMATION.exit}
						transition={SEARCH_PANEL_ANIMATION.transition}
						className={searchPanelPositionStyles}
					>
						<div className={searchContainerStyles}>
							<div className={searchBoxStyles}>
								<SearchInput
									query={query}
									isLoading={isLoading}
									inputRef={inputRef}
									onQueryChange={onQueryChange}
									onClearQuery={onClearQuery}
								/>

								<AnimatePresence mode='wait'>
									{debouncedQuery && (
										<SearchResults
											results={results}
											query={debouncedQuery}
											onResultClick={onResultClick}
										/>
									)}
								</AnimatePresence>

								{!debouncedQuery && <SearchSuggestions />}
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}
