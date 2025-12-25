'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {
	AboutSection,
	CompanyFacts,
	ContactBanner,
	FeaturedMedia,
	PageHeader,
	PressKitSection,
} from './components'
import {BREADCRUMBS} from './press.constants'
import {contentStyles, sectionStyles} from './press.styles'

export function PressView() {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				<div className={contentStyles}>
					<AboutSection />
					<CompanyFacts />
					<PressKitSection />
					<FeaturedMedia />
					<ContactBanner />
				</div>
			</Container>
		</section>
	)
}
