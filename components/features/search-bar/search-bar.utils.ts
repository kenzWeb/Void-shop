import {MOCK_PRODUCTS} from '@/data'
import {Product} from '@/types'
import {MAX_RESULTS} from './search-bar.constants'

export function searchProducts(query: string): Product[] {
	if (!query.trim()) return []

	const searchTerm = query.toLowerCase()
	return MOCK_PRODUCTS.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm) ||
			product.description.toLowerCase().includes(searchTerm) ||
			product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
			product.category.toLowerCase().includes(searchTerm),
	).slice(0, MAX_RESULTS)
}

export function escapeRegex(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function splitTextByHighlight(
	text: string,
	highlight: string,
): string[] {
	if (!highlight.trim()) return [text]

	const regex = new RegExp(`(${escapeRegex(highlight)})`, 'gi')
	return text.split(regex)
}

export function isHighlightMatch(part: string, highlight: string): boolean {
	const regex = new RegExp(`(${escapeRegex(highlight)})`, 'gi')
	return regex.test(part)
}
