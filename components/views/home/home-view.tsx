'use client'

import {FeaturedProducts, HeroSection, StatsGrid} from './components'
import {HERO_STATS} from './home.constants'
import {HomeViewProps} from './home.types'

export function HomeView({featuredProducts}: HomeViewProps) {
	return (
		<>
			<HeroSection />
			<StatsGrid stats={HERO_STATS} />
			<FeaturedProducts products={featuredProducts} />
		</>
	)
}
