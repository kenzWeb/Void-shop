'use client'

import {SearchBarUI} from './search-bar'
import {useSearchBar} from './use-search-bar'

export function SearchBar() {
	const {
		isOpen,
		query,
		debouncedQuery,
		isLoading,
		results,
		inputRef,
		handlers,
	} = useSearchBar()

	return (
		<SearchBarUI
			isOpen={isOpen}
			query={query}
			debouncedQuery={debouncedQuery}
			isLoading={isLoading}
			results={results}
			inputRef={inputRef}
			onQueryChange={handlers.onQueryChange}
			onClearQuery={handlers.onClearQuery}
			onClose={handlers.onClose}
			onResultClick={handlers.onResultClick}
		/>
	)
}
