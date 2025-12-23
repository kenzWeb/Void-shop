import {NewArrivalsView} from '@/components/views/new'
import {getNewProducts} from '@/data'

export default function NewArrivalsPage() {
	const products = getNewProducts()
	return <NewArrivalsView products={products} />
}
