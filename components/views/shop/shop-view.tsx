'use client'

import {ProductFilter} from '@/components/features'
import {Breadcrumbs, Container} from '@/components/ui'
import {useProductFilter} from '@/hooks'
import {Product} from '@/types'
import {EmptyState, PageHeader, ProductGrid} from './components'
import {BREADCRUMBS} from './shop.constants'
import {filterContainerStyles, sectionStyles} from './shop.styles'

interface ShopViewProps {
	products: Product[]
}

export function ShopView({products}: ShopViewProps) {
	const {
		filters,
		sortOption,
		filteredProducts,
		setCategory,
		setColor,
		setSize,
		setPriceRange,
		setSortOption,
		resetFilters,
		activeFilterCount,
	} = useProductFilter(products)

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />

				<PageHeader productCount={filteredProducts.length} />

				<div className={filterContainerStyles}>
					<ProductFilter
						filters={filters}
						sortOption={sortOption}
						activeFilterCount={activeFilterCount}
						onCategoryChange={setCategory}
						onColorChange={setColor}
						onSizeChange={setSize}
						onPriceRangeChange={setPriceRange}
						onSortChange={setSortOption}
						onReset={resetFilters}
					/>
				</div>

				{filteredProducts.length > 0 ? (
					<ProductGrid products={filteredProducts} />
				) : (
					<EmptyState onReset={resetFilters} />
				)}
			</Container>
		</section>
	)
}
