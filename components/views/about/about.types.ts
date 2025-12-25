import {LucideIcon} from 'lucide-react'

export interface AboutViewProps {}

export interface ValueItem {
	icon: LucideIcon
	title: string
	description: string
}

export interface StatItem {
	value: string
	label: string
}

export interface TeamMember {
	name: string
	role: string
	image: string
}

export interface HeroSectionProps {}

export interface StatsBarProps {
	stats: StatItem[]
}

export interface ValuesGridProps {
	values: ValueItem[]
}

export interface TeamGridProps {
	team: TeamMember[]
}

export interface CTASectionProps {}
