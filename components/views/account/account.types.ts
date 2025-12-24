import {LucideIcon} from 'lucide-react'

export interface AccountViewProps {}

export interface UserProfileProps {
	name: string
	email: string
	favoritesCount: number
	cartCount: number
	onSignOut: () => void
}

export interface MenuItem {
	icon: LucideIcon
	label: string
	description: string
	href: string
}

export interface NavigationMenuProps {
	items: MenuItem[]
}

export interface RecentOrder {
	id: string
	date: string
	status: string
	total: number
	items: number
}

export interface RecentOrdersProps {
	orders: RecentOrder[]
}

export interface QuickActionsProps {
	favoritesCount: number
}

export interface MemberBenefitsProps {}

export interface LoadingStateProps {}
