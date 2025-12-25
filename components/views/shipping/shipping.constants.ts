import {Breadcrumb} from '@/types'
import {LucideIcon, MapPin, Package, Shield} from 'lucide-react'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Shipping', href: '/shipping', isActive: true},
]

export interface ShippingOption {
	name: string
	price: string
	time: string
	desc: string
}

export const OPTIONS: ShippingOption[] = [
	{
		name: 'Standard',
		price: 'Free over $100',
		time: '5-7 days',
		desc: 'Free for $100+, else $5.99',
	},
	{name: 'Express', price: '$12.99', time: '2-3 days', desc: 'Faster delivery'},
	{
		name: 'Overnight',
		price: '$24.99',
		time: '1 day',
		desc: 'Order by 2 PM EST',
	},
]

export interface InternationalZone {
	zone: string
	time: string
	price: string
}

export const INTL: InternationalZone[] = [
	{zone: 'Canada', time: '7-10 days', price: '$14.99'},
	{zone: 'Europe', time: '10-14 days', price: '$19.99'},
	{zone: 'UK', time: '7-12 days', price: '$17.99'},
	{zone: 'Australia', time: '12-18 days', price: '$24.99'},
	{zone: 'Asia', time: '10-16 days', price: '$22.99'},
]

export interface Feature {
	icon: LucideIcon
	title: string
	desc: string
}

export const FEATURES: Feature[] = [
	{icon: Package, title: 'Secure Packaging', desc: 'Safe delivery'},
	{icon: Shield, title: 'Insured', desc: 'Fully insured'},
	{icon: MapPin, title: 'Tracking', desc: 'Real-time tracking'},
]
