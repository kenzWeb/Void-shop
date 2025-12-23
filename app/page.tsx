import {HomeView} from '@/components/views/home'
import {getFeaturedProducts} from '@/data'

export default function HomePage() {
	const featuredProducts = getFeaturedProducts()

	return <HomeView featuredProducts={featuredProducts} />
}
