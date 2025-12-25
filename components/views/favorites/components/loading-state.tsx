'use client'

import {
	gridStyles,
	skeletonCardStyles,
	skeletonContentStyles,
	skeletonDescStyles,
	skeletonImageStyles,
	skeletonTitleStyles,
} from '../favorites.styles'

export function LoadingState() {
	return (
		<div className={gridStyles}>
			{[1, 2, 3, 4].map((i) => (
				<div key={i} className={skeletonCardStyles}>
					<div className={skeletonImageStyles} />
					<div className={skeletonContentStyles}>
						<div className={skeletonTitleStyles} />
						<div className={skeletonDescStyles} />
					</div>
				</div>
			))}
		</div>
	)
}
