import {BestSellersView} from '@/components/views/best-sellers'
import {getBestSellers} from '@/data/products'

export default function BestSellersPage() {
	const products = getBestSellers()
	return <BestSellersView products={products} />
}
