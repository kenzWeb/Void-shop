import {Breadcrumb} from '@/types'
import {Globe, Heart, Target, Zap} from 'lucide-react'
import {StatItem, TeamMember, ValueItem} from './about.types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'About', href: '/about', isActive: true},
]

export const VALUES: ValueItem[] = [
	{
		icon: Target,
		title: 'Quality First',
		description:
			'Every product is carefully curated and tested to meet our exacting standards.',
	},
	{
		icon: Heart,
		title: 'Customer Focused',
		description:
			"Your satisfaction is our priority. We're here to help at every step.",
	},
	{
		icon: Zap,
		title: 'Innovation',
		description:
			'Constantly pushing boundaries in design, materials, and sustainability.',
	},
	{
		icon: Globe,
		title: 'Sustainability',
		description:
			'Committed to ethical sourcing and reducing our environmental impact.',
	},
]

export const STATS: StatItem[] = [
	{value: '2019', label: 'Founded'},
	{value: '50K+', label: 'Customers'},
	{value: '25+', label: 'Countries'},
	{value: '99%', label: 'Satisfaction'},
]

export const TEAM: TeamMember[] = [
	{
		name: 'Alex Chen',
		role: 'Founder & CEO',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
	},
	{
		name: 'Sarah Miller',
		role: 'Creative Director',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
	},
	{
		name: 'James Wilson',
		role: 'Head of Product',
		image:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
	},
	{
		name: 'Emma Davis',
		role: 'Operations Lead',
		image:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
	},
]

export const HERO_IMAGE =
	'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop'
