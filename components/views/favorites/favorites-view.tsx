'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {useHydration} from '@/hooks'
import {useFavoritesStore} from '@/store'
import {EmptyState, LoadingState, PageHeader, ProductGrid} from './components'
import {sectionStyles} from './favorites.styles'
import {BREADCRUMBS} from './favorites.types'

export function FavoritesView() {
	const isHydrated = useHydration()
	const favorites = useFavoritesStore((state) => state.favorites)
	const clearFavorites = useFavoritesStore((state) => state.clearFavorites)

	const count = isHydrated ? favorites.length : 0
	const hasItems = isHydrated && favorites.length > 0

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />

				<PageHeader
					count={count}
					onClear={clearFavorites}
					hasItems={hasItems}
				/>

				{!isHydrated ? (
					<LoadingState />
				) : favorites.length > 0 ? (
					<ProductGrid products={favorites} />
				) : (
					<EmptyState />
				)}
			</Container>
		</section>
	)
}
