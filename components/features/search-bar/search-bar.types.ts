import {Product} from '@/types'

export interface SearchBarProps {
	// Container has no external props - uses store directly
}

export interface SearchBarUIProps {
	isOpen: boolean
	query: string
	debouncedQuery: string
	isLoading: boolean
	results: Product[]
	inputRef: React.RefObject<HTMLInputElement | null>
	onQueryChange: (value: string) => void
	onClearQuery: () => void
	onClose: () => void
	onResultClick: () => void
}

export interface UseSearchBarReturn {
	isOpen: boolean
	query: string
	debouncedQuery: string
	isLoading: boolean
	results: Product[]
	inputRef: React.RefObject<HTMLInputElement | null>
	handlers: {
		onQueryChange: (value: string) => void
		onClearQuery: () => void
		onClose: () => void
		onResultClick: () => void
	}
}

export interface SearchResultProps {
	product: Product
	query: string
	onClick: () => void
}

export interface HighlightedTextProps {
	text: string
	highlight: string
}
