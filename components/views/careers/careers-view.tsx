'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {useState} from 'react'
import {BREADCRUMBS, JOBS} from './careers.constants'
import {sectionStyles} from './careers.styles'
import {
	BenefitsSection,
	ContactBanner,
	JobListings,
	PageHeader,
} from './components'

export function CareersView() {
	const [selectedDept, setSelectedDept] = useState('All')
	const filteredJobs = JOBS.filter(
		(j) => selectedDept === 'All' || j.department === selectedDept,
	)

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				<BenefitsSection />
				<JobListings
					selectedDept={selectedDept}
					onSelectDept={setSelectedDept}
					filteredJobs={filteredJobs}
				/>
				<ContactBanner />
			</Container>
		</section>
	)
}
