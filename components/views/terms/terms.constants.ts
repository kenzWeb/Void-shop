import {Breadcrumb} from '@/types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Terms of Service', href: '/terms', isActive: true},
]

export interface Section {
	title: string
	content: string
}

export const SECTIONS: Section[] = [
	{title: '1. Agreement', content: 'By using VOIDØ, you agree to these terms.'},
	{
		title: '2. Use of Services',
		content:
			'Use lawfully. No unauthorized access, interference, or impersonation.',
	},
	{
		title: '3. Account',
		content:
			'Provide accurate info. Maintain security. Responsible for all activity.',
	},
	{
		title: '4. Products',
		content: 'Descriptions and prices subject to change. We may limit orders.',
	},
	{
		title: '5. Payment',
		content: 'Prices in USD. Taxes extra. Payment due at order time.',
	},
	{
		title: '6. Shipping',
		content: 'Delivery times are estimates. Risk passes on delivery.',
	},
	{
		title: '7. Returns',
		content: 'Subject to Return Policy. Refunds to original payment method.',
	},
	{
		title: '8. IP',
		content: "All content is VOIDØ property. Don't copy without permission.",
	},
	{
		title: '9. Liability',
		content:
			"We're not liable for indirect damages. Max liability: 12 months of payments.",
	},
	{
		title: '10. Changes',
		content: 'We may modify terms. Continued use = acceptance.',
	},
]
