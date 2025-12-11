import {ProductView} from '@/components/views/product'
import {getProductBySlug} from '@/data'
import {notFound} from 'next/navigation'

interface ProductPageProps {
	params: Promise<{slug: string}>
}

export default async function ProductPage({params}: ProductPageProps) {
	const {slug} = await params
	const product = getProductBySlug(slug)

	if (!product) {
		notFound()
	}

	return <ProductView product={product} />
}
