import {Breadcrumb} from '@/types'
import {
	Coffee,
	Globe,
	Heart,
	Laptop,
	LucideIcon,
	Plane,
	Zap,
} from 'lucide-react'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Careers', href: '/careers', isActive: true},
]

export interface Benefit {
	icon: LucideIcon
	title: string
	description: string
}

export const BENEFITS: Benefit[] = [
	{
		icon: Heart,
		title: 'Health & Wellness',
		description: 'Comprehensive coverage',
	},
	{icon: Laptop, title: 'Remote First', description: 'Work from anywhere'},
	{icon: Zap, title: 'Growth Budget', description: '$2,000 annual L&D'},
	{icon: Coffee, title: 'Team Events', description: 'Regular gatherings'},
	{icon: Plane, title: 'Unlimited PTO', description: 'Take time to recharge'},
	{icon: Globe, title: 'Global Team', description: 'Collaborate worldwide'},
]

export interface Job {
	id: string
	title: string
	department: string
	location: string
	type: string
	description: string
}

export const JOBS: Job[] = [
	{
		id: '1',
		title: 'Senior Frontend Developer',
		department: 'Engineering',
		location: 'Remote',
		type: 'Full-time',
		description: 'Build exceptional UX with React and Next.js.',
	},
	{
		id: '2',
		title: 'Product Designer',
		department: 'Design',
		location: 'NY / Remote',
		type: 'Full-time',
		description: 'Shape product through research and design.',
	},
	{
		id: '3',
		title: 'Marketing Manager',
		department: 'Marketing',
		location: 'Remote',
		type: 'Full-time',
		description: 'Drive brand awareness and acquisition.',
	},
	{
		id: '4',
		title: 'Customer Success Lead',
		department: 'Operations',
		location: 'Remote',
		type: 'Full-time',
		description: 'Ensure exceptional customer experiences.',
	},
]

export const DEPARTMENTS = [
	'All',
	'Engineering',
	'Design',
	'Marketing',
	'Operations',
]
