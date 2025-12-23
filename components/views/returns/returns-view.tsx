'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {
	ContactSection,
	EligibilitySection,
	HighlightBanner,
	HowItWorks,
	PageHeader,
} from './components'
import {BREADCRUMBS} from './returns.constants'
import {contentStyles, sectionStyles} from './returns.styles'

export function ReturnsView() {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				<div className={contentStyles}>
					<HighlightBanner />
					<HowItWorks />
					<EligibilitySection />
					<ContactSection />
				</div>
			</Container>
		</section>
	)
}
