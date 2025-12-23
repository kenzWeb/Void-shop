'use client'

import {highlightStyles} from '../search-bar.styles'
import {isHighlightMatch, splitTextByHighlight} from '../search-bar.utils'

interface HighlightedTextProps {
	text: string
	highlight: string
}

export function HighlightedText({text, highlight}: HighlightedTextProps) {
	const parts = splitTextByHighlight(text, highlight)

	if (!highlight.trim()) {
		return <span>{text}</span>
	}

	return (
		<span>
			{parts.map((part, i) =>
				isHighlightMatch(part, highlight) ? (
					<mark key={i} className={highlightStyles}>
						{part}
					</mark>
				) : (
					<span key={i}>{part}</span>
				),
			)}
		</span>
	)
}
