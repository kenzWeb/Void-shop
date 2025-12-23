'use client'

import {Loader2, Search, X} from 'lucide-react'
import {
	clearButtonStyles,
	clearIconStyles,
	inputContainerStyles,
	inputStyles,
	loaderIconStyles,
	searchIconStyles,
} from '../search-bar.styles'

interface SearchInputProps {
	query: string
	isLoading: boolean
	inputRef: React.RefObject<HTMLInputElement | null>
	onQueryChange: (value: string) => void
	onClearQuery: () => void
}

export function SearchInput({
	query,
	isLoading,
	inputRef,
	onQueryChange,
	onClearQuery,
}: SearchInputProps) {
	return (
		<div className={inputContainerStyles}>
			<Search className={searchIconStyles} />
			<input
				ref={inputRef}
				type='text'
				value={query}
				onChange={(e) => onQueryChange(e.target.value)}
				placeholder='Search products...'
				className={inputStyles}
			/>
			{isLoading && <Loader2 className={loaderIconStyles} />}
			{query && !isLoading && (
				<button onClick={onClearQuery} className={clearButtonStyles}>
					<X className={clearIconStyles} />
				</button>
			)}
		</div>
	)
}
