'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {Product} from '@/types'
import {BREADCRUMBS, STATS} from './best-sellers.constants'
import {sectionStyles} from './best-sellers.styles'
import {EmptyState, PageHeader, ProductGrid, StatsBar} from './components'

interface BestSellersViewProps {
	products: Product[]
}

export function BestSellersView({products}: BestSellersViewProps) {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				<StatsBar stats={STATS} />
				{products.length > 0 ? (
					<ProductGrid products={products} />
				) : (
					<EmptyState />
				)}
			</Container>
		</section>
	)
}
