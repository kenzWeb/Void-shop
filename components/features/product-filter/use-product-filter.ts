'use client'

import {useCallback, useState} from 'react'
import {DEFAULT_EXPANDED_SECTION} from './product-filter.constants'
import {UseProductFilterReturn} from './product-filter.types'

export function useProductFilter(): UseProductFilterReturn {
	const [isOpen, setIsOpen] = useState(false)
	const [expandedSection, setExpandedSection] = useState<string | null>(
		DEFAULT_EXPANDED_SECTION,
	)

	const handleOpenDrawer = useCallback(() => {
		setIsOpen(true)
	}, [])

	const handleCloseDrawer = useCallback(() => {
		setIsOpen(false)
	}, [])

	const handleToggleSection = useCallback((section: string) => {
		setExpandedSection((prev) => (prev === section ? null : section))
	}, [])

	return {
		isOpen,
		expandedSection,
		handlers: {
			onOpenDrawer: handleOpenDrawer,
			onCloseDrawer: handleCloseDrawer,
			onToggleSection: handleToggleSection,
		},
	}
}
