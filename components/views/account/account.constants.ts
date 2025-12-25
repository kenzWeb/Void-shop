import {Breadcrumb} from '@/types'
import {CreditCard, Heart, MapPin, Package, Settings} from 'lucide-react'
import {MenuItem, RecentOrder} from './account.types'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Account', href: '/account', isActive: true},
]

export const MENU_ITEMS: MenuItem[] = [
	{
		icon: Package,
		label: 'Orders',
		description: 'View your order history',
		href: '/account/orders',
	},
	{
		icon: Heart,
		label: 'Favorites',
		description: "Items you've saved",
		href: '/favorites',
	},
	{
		icon: MapPin,
		label: 'Addresses',
		description: 'Manage shipping addresses',
		href: '/account/addresses',
	},
	{
		icon: CreditCard,
		label: 'Payment Methods',
		description: 'Saved payment options',
		href: '/account/payment',
	},
	{
		icon: Settings,
		label: 'Settings',
		description: 'Account preferences',
		href: '/account/settings',
	},
]

export const RECENT_ORDERS: RecentOrder[] = [
	{
		id: 'ORD-001',
		date: 'Dec 25, 2024',
		status: 'Delivered',
		total: 299.99,
		items: 3,
	},
	{
		id: 'ORD-002',
		date: 'Dec 20, 2024',
		status: 'In Transit',
		total: 149.99,
		items: 1,
	},
]
