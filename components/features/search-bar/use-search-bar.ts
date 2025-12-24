'use client'

import {useDebounce} from '@/hooks'
import {useUIStore} from '@/store'
import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {DEBOUNCE_DELAY} from './search-bar.constants'
import {UseSearchBarReturn} from './search-bar.types'
import {searchProducts} from './search-bar.utils'

export function useSearchBar(): UseSearchBarReturn {
	const [query, setQuery] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const isOpen = useUIStore((state) => state.isSearchOpen)
	const closeSearch = useUIStore((state) => state.closeSearch)

	const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY)

	const results = useMemo(() => {
		return searchProducts(debouncedQuery)
	}, [debouncedQuery])

	// Loading state based on debounce
	useEffect(() => {
		if (query !== debouncedQuery) {
			setIsLoading(true)
		} else {
			setIsLoading(false)
		}
	}, [query, debouncedQuery])

	// Focus input when opened, clear when closed
	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus()
		} else {
			setQuery('')
		}
	}, [isOpen])

	// Escape key and body scroll lock
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeSearch()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = ''
		}
	}, [isOpen, closeSearch])

	const handleQueryChange = useCallback((value: string) => {
		setQuery(value)
	}, [])

	const handleClearQuery = useCallback(() => {
		setQuery('')
	}, [])

	const handleClose = useCallback(() => {
		closeSearch()
	}, [closeSearch])

	const handleResultClick = useCallback(() => {
		closeSearch()
		setQuery('')
	}, [closeSearch])

	return {
		isOpen,
		query,
		debouncedQuery,
		isLoading,
		results,
		inputRef,
		handlers: {
			onQueryChange: handleQueryChange,
			onClearQuery: handleClearQuery,
			onClose: handleClose,
			onResultClick: handleResultClick,
		},
	}
}
