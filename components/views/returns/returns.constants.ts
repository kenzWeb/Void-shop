import {Breadcrumb} from '@/types'
import {Clock, LucideIcon, Package, RotateCcw} from 'lucide-react'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Returns', href: '/returns', isActive: true},
]

export interface Step {
	num: string
	title: string
	desc: string
}

export const STEPS: Step[] = [
	{num: '01', title: 'Start Return', desc: "Log in, select 'Start Return'"},
	{num: '02', title: 'Print Label', desc: 'Get prepaid label via email'},
	{num: '03', title: 'Ship It', desc: 'Drop off at shipping location'},
	{num: '04', title: 'Get Refund', desc: 'Processed in 3-5 days'},
]

export const ELIGIBLE = [
	'Unworn items',
	'Original tags attached',
	'Original packaging',
	'Within 30 days',
]

export const NOT_ELIGIBLE = [
	'Final sale items',
	'Worn/washed items',
	'No tags',
	'After 30 days',
]

export interface Highlight {
	icon: LucideIcon
	val: string
	sub: string
}

export const HIGHLIGHTS: Highlight[] = [
	{icon: RotateCcw, val: 'Free Returns', sub: 'Prepaid label'},
	{icon: Clock, val: '30 Days', sub: 'Return window'},
	{icon: Package, val: 'Easy', sub: 'Online process'},
]
