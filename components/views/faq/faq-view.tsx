'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {useState} from 'react'
import {
	CategoryFilter,
	ContactBanner,
	FAQAccordion,
	PageHeader,
	SearchBar,
} from './components'
import {BREADCRUMBS, FAQ_CATEGORIES} from './faq.constants'
import {sectionStyles} from './faq.styles'

export function FAQView() {
	const [searchQuery, setSearchQuery] = useState('')
	const [openItems, setOpenItems] = useState<Set<string>>(new Set())
	const [activeCategory, setActiveCategory] = useState<string | null>(null)

	const toggleItem = (id: string) => {
		setOpenItems((prev) => {
			const next = new Set(prev)
			next.has(id) ? next.delete(id) : next.add(id)
			return next
		})
	}

	const filteredCategories = FAQ_CATEGORIES.map((cat) => ({
		...cat,
		faqs: cat.faqs.filter(
			(faq) =>
				faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
				faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
		),
	})).filter(
		(cat) =>
			cat.faqs.length > 0 && (!activeCategory || cat.id === activeCategory),
	)

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />
				<SearchBar value={searchQuery} onChange={setSearchQuery} />
				<CategoryFilter
					activeCategory={activeCategory}
					onSelectCategory={setActiveCategory}
				/>
				<FAQAccordion
					categories={filteredCategories}
					openItems={openItems}
					onToggle={toggleItem}
				/>
				<ContactBanner />
			</Container>
		</section>
	)
}
