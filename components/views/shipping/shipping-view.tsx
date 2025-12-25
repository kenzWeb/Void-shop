'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {
	DomesticShipping,
	InternationalShipping,
	PageHeader,
	ShippingFeatures,
} from './components'
import {BREADCRUMBS} from './shipping.constants'
import {contentStyles, sectionStyles} from './shipping.styles'

export function ShippingView() {
	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				<div className={contentStyles}>
					<DomesticShipping />
					<InternationalShipping />
					<ShippingFeatures />
				</div>
			</Container>
		</section>
	)
}
