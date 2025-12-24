import {SaleView} from '@/components/views/sale'
import {MOCK_PRODUCTS} from '@/data'

const saleProducts = MOCK_PRODUCTS.filter(
	(product) => product.originalPrice && product.originalPrice > product.price,
)

export default function SalePage() {
	return <SaleView products={saleProducts} />
}
