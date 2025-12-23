'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {BREADCRUMBS, STATS, TEAM, VALUES} from './about.constants'
import {sectionStyles} from './about.styles'
import {
	CTASection,
	HeroSection,
	StatsBar,
	TeamGrid,
	ValuesGrid,
} from './components'

export function AboutView() {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<HeroSection />
				<StatsBar stats={STATS} />
				<ValuesGrid values={VALUES} />
				<TeamGrid team={TEAM} />
				<CTASection />
			</Container>
		</section>
	)
}
