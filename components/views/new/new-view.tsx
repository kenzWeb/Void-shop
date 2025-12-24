'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {Product} from '@/types'
import {EmptyState, PageHeader, ProductGrid} from './components'
import {BREADCRUMBS} from './new.constants'
import {sectionStyles} from './new.styles'

interface NewArrivalsViewProps {
	products: Product[]
}

export function NewArrivalsView({products}: NewArrivalsViewProps) {
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
