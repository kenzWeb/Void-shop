'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {Product} from '@/types'
import {EmptyState, PageHeader, ProductGrid} from './components'
import {BREADCRUMBS} from './sale.constants'
import {sectionStyles} from './sale.styles'

interface SaleViewProps {
	products: Product[]
}

export function SaleView({products}: SaleViewProps) {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				{products.length > 0 ? (
					<ProductGrid products={products} />
				) : (
					<EmptyState />
				)}
			</Container>
		</section>
	)
}
