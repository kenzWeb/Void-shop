'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {ContactCard, PageHeader, SectionList} from './components'
import {BREADCRUMBS} from './terms.constants'
import {containerStyles, sectionStyles} from './terms.styles'

export function TermsView() {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<div className={containerStyles}>
					<PageHeader />
					<SectionList />
					<ContactCard />
				</div>
			</Container>
		</section>
	)
}
