'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {BREADCRUMBS, COLLECTIONS} from './collections.constants'
import {sectionStyles} from './collections.styles'
import {CollectionsGrid, PageHeader} from './components'

export function CollectionsView() {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				<CollectionsGrid collections={COLLECTIONS} />
			</Container>
		</section>
	)
}
