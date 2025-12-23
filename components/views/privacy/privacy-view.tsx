'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {ContactCard, PageHeader, SectionList} from './components'
import {BREADCRUMBS} from './privacy.constants'
import {containerStyles, sectionStyles} from './privacy.styles'

export function PrivacyView() {
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
