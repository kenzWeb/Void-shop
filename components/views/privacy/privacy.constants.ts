import {Breadcrumb} from '@/types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Privacy Policy', href: '/privacy', isActive: true},
]

export interface Section {
	title: string
	content: string
}

export const SECTIONS: Section[] = [
	{
		title: 'Information We Collect',
		content:
			'We collect info you provide: name, email, payment info, order history.',
	},
	{
		title: 'How We Use Info',
		content:
			'Process orders, send updates, personalize experience, improve services.',
	},
	{
		title: 'Information Sharing',
		content:
			"We don't sell data. We share with service providers, payment processors, carriers.",
	},
	{
		title: 'Data Security',
		content:
			'SSL encryption, PCI-compliant processing, regular audits, secure storage.',
	},
	{
		title: 'Cookies',
		content: 'We use cookies for preferences, analytics, and personalization.',
	},
	{
		title: 'Your Rights',
		content:
			'Access, correct, delete your data. Opt-out of marketing. Contact privacy@voidshop.com',
	},
]
