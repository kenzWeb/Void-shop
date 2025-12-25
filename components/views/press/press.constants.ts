import {Breadcrumb} from '@/types'
import {FileText, Image as ImageIcon, LucideIcon, Palette} from 'lucide-react'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Press', href: '/press', isActive: true},
]

export interface PressKit {
	icon: LucideIcon
	title: string
	description: string
	size: string
}

export const PRESS_KITS: PressKit[] = [
	{
		icon: FileText,
		title: 'Press Release',
		description: 'Latest news',
		size: 'PDF • 2.4 MB',
	},
	{
		icon: ImageIcon,
		title: 'Logo Package',
		description: 'Hi-res logos',
		size: 'ZIP • 8.1 MB',
	},
	{
		icon: Palette,
		title: 'Brand Guidelines',
		description: 'Usage guidelines',
		size: 'PDF • 5.2 MB',
	},
]

export interface MediaItem {
	publication: string
	title: string
	date: string
	image: string
}

export const MEDIA: MediaItem[] = [
	{
		publication: 'Vogue',
		title: 'The Future of Minimalist Fashion',
		date: 'Dec 2024',
		image:
			'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
	},
	{
		publication: 'Forbes',
		title: 'VOIDØ: Disrupting E-commerce',
		date: 'Nov 2024',
		image:
			'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
	},
	{
		publication: 'Dezeen',
		title: 'Design Philosophy of VOIDØ',
		date: 'Oct 2024',
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
	},
]

export const STATS = [
	{label: 'Founded', value: '2019'},
	{label: 'HQ', value: 'NY'},
	{label: 'Team', value: '45+'},
	{label: 'Countries', value: '25+'},
	{label: 'Products', value: '500+'},
	{label: 'Customers', value: '50K+'},
]
