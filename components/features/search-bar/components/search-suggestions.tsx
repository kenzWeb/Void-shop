'use client'

import {SEARCH_SUGGESTIONS} from '../search-bar.constants'
import {
	suggestionsContainerStyles,
	suggestionsTextStyles,
} from '../search-bar.styles'

export function SearchSuggestions() {
	return (
		<div className={suggestionsContainerStyles}>
			<p className={suggestionsTextStyles}>
				Try searching for &quot;{SEARCH_SUGGESTIONS.join('&quot;, &quot;')}
				&quot;
			</p>
		</div>
	)
}
