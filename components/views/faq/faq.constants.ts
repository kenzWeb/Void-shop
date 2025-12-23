import {Breadcrumb} from '@/types'
import {CreditCard, LucideIcon, Package, RotateCcw, Truck} from 'lucide-react'

export const BREADCRUMBS: Breadcrumb[] = [
	{label: 'FAQ', href: '/faq', isActive: true},
]

export interface FAQ {
	question: string
	answer: string
}

export interface FAQCategory {
	id: string
	icon: LucideIcon
	title: string
	faqs: FAQ[]
}

export const FAQ_CATEGORIES: FAQCategory[] = [
	{
		id: 'orders',
		icon: Package,
		title: 'Orders & Products',
		faqs: [
			{
				question: 'How do I track my order?',
				answer:
					"Once your order ships, you'll receive an email with a tracking number. You can also view your order status in your account.",
			},
			{
				question: 'Can I modify or cancel my order?',
				answer:
					'Orders can be modified or cancelled within 1 hour of placement.',
			},
			{
				question: 'What if an item is out of stock?',
				answer:
					'You can sign up for back-in-stock notifications on any product page.',
			},
		],
	},
	{
		id: 'payment',
		icon: CreditCard,
		title: 'Payment & Pricing',
		faqs: [
			{
				question: 'What payment methods do you accept?',
				answer:
					'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Shop Pay.',
			},
			{
				question: 'Is my payment information secure?',
				answer:
					'We use industry-standard SSL encryption and never store your full payment details.',
			},
		],
	},
	{
		id: 'shipping',
		icon: Truck,
		title: 'Shipping & Delivery',
		faqs: [
			{
				question: 'How much does shipping cost?',
				answer:
					'Free standard shipping on orders over $100. For orders under $100, shipping starts at $5.99.',
			},
			{
				question: 'How long does delivery take?',
				answer:
					'Standard shipping takes 5-7 business days. Express is 2-3 days.',
			},
		],
	},
	{
		id: 'returns',
		icon: RotateCcw,
		title: 'Returns & Refunds',
		faqs: [
			{
				question: 'What is your return policy?',
				answer:
					'We offer free returns within 30 days of delivery. Items must be unworn with tags attached.',
			},
			{
				question: 'How long do refunds take?',
				answer:
					'Refunds are processed within 3-5 business days after receiving your return.',
			},
		],
	},
]
