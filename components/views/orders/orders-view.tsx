'use client'

import {Breadcrumbs, Button, Container} from '@/components/ui'
import {cn} from '@/lib/cn'
import {Breadcrumb} from '@/types'
import {motion} from 'framer-motion'
import {
	ArrowLeft,
	CheckCircle,
	ChevronDown,
	ChevronUp,
	Clock,
	ExternalLink,
	Package,
	Truck,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Account', href: '/account', isActive: false},
	{label: 'Orders', href: '/account/orders', isActive: true},
]

interface OrderItem {
	id: string
	name: string
	image: string
	price: number
	quantity: number
	size: string
	color: string
}
interface Order {
	id: string
	date: string
	status: 'processing' | 'shipped' | 'delivered' | 'cancelled'
	total: number
	items: OrderItem[]
	trackingNumber?: string
	estimatedDelivery?: string
}

const ORDERS: Order[] = [
	{
		id: 'ORD-2024-001',
		date: 'December 25, 2024',
		status: 'delivered',
		total: 299.99,
		items: [
			{
				id: '1',
				name: 'Void Tech Hoodie',
				image:
					'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop',
				price: 149.99,
				quantity: 1,
				size: 'L',
				color: 'Black',
			},
			{
				id: '2',
				name: 'Minimal Cargo Pants',
				image:
					'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&h=200&fit=crop',
				price: 129.99,
				quantity: 1,
				size: '32',
				color: 'Olive',
			},
		],
		trackingNumber: '1Z999AA10123456784',
	},
	{
		id: 'ORD-2024-002',
		date: 'December 20, 2024',
		status: 'shipped',
		total: 89.99,
		items: [
			{
				id: '3',
				name: 'Grid Pattern Tee',
				image:
					'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop',
				price: 89.99,
				quantity: 1,
				size: 'M',
				color: 'White',
			},
		],
		trackingNumber: '1Z999AA10123456785',
		estimatedDelivery: 'December 28, 2024',
	},
	{
		id: 'ORD-2024-003',
		date: 'December 15, 2024',
		status: 'processing',
		total: 459.97,
		items: [
			{
				id: '4',
				name: 'Acid Wash Denim Jacket',
				image:
					'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop',
				price: 199.99,
				quantity: 1,
				size: 'M',
				color: 'Blue',
			},
			{
				id: '5',
				name: 'Void Logo Cap',
				image:
					'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop',
				price: 49.99,
				quantity: 2,
				size: 'One Size',
				color: 'Black',
			},
		],
		estimatedDelivery: 'January 2, 2025',
	},
]

const STATUS_CONFIG = {
	processing: {
		icon: Clock,
		label: 'Processing',
		color: 'text-yellow-500',
		bg: 'bg-yellow-500/10',
	},
	shipped: {
		icon: Truck,
		label: 'Shipped',
		color: 'text-blue-500',
		bg: 'bg-blue-500/10',
	},
	delivered: {
		icon: CheckCircle,
		label: 'Delivered',
		color: 'text-accent',
		bg: 'bg-accent/10',
	},
	cancelled: {
		icon: Package,
		label: 'Cancelled',
		color: 'text-error',
		bg: 'bg-error/10',
	},
}

function formatPrice(price: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price)
}

export function OrdersView() {
	const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

	return (
		<section className='py-8'>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<div className='mb-8'>
					<Link
						href='/account'
						className='inline-flex items-center gap-2 text-sm text-muted hover:text-foreground'
					>
						<ArrowLeft className='h-4 w-4' />
						Back to Account
					</Link>
				</div>

				<div className='mx-auto max-w-3xl'>
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
					>
						<h1 className='mb-8 text-3xl font-bold tracking-tighter'>
							Order History
						</h1>

						<div className='space-y-4'>
							{ORDERS.map((order, index) => {
								const status = STATUS_CONFIG[order.status]
								const StatusIcon = status.icon
								const isExpanded = expandedOrder === order.id

								return (
									<motion.div
										key={order.id}
										initial={{opacity: 0, y: 20}}
										animate={{opacity: 1, y: 0}}
										transition={{delay: index * 0.1}}
										className='border border-border'
									>
										<button
											onClick={() =>
												setExpandedOrder(isExpanded ? null : order.id)
											}
											className='flex w-full items-center justify-between p-6 text-left'
										>
											<div className='flex items-center gap-4'>
												<div className={cn('p-3', status.bg)}>
													<StatusIcon className={cn('h-5 w-5', status.color)} />
												</div>
												<div>
													<p className='font-bold'>{order.id}</p>
													<p className='text-sm text-muted'>{order.date}</p>
												</div>
											</div>
											<div className='flex items-center gap-6'>
												<div className='text-right'>
													<p className='font-bold'>
														{formatPrice(order.total)}
													</p>
													<p className={cn('text-sm', status.color)}>
														{status.label}
													</p>
												</div>
												{isExpanded ? (
													<ChevronUp className='h-5 w-5 text-muted' />
												) : (
													<ChevronDown className='h-5 w-5 text-muted' />
												)}
											</div>
										</button>

										{isExpanded && (
											<motion.div
												initial={{opacity: 0, height: 0}}
												animate={{opacity: 1, height: 'auto'}}
												className='border-t border-border'
											>
												<div className='p-6'>
													<div className='space-y-4'>
														{order.items.map((item) => (
															<div
																key={item.id}
																className='flex items-center gap-4'
															>
																<div className='relative h-20 w-20 shrink-0 overflow-hidden border border-border bg-surface'>
																	<Image
																		src={item.image}
																		alt={item.name}
																		fill
																		sizes='80px'
																		className='object-cover'
																	/>
																</div>
																<div className='flex-1'>
																	<p className='font-medium'>{item.name}</p>
																	<p className='text-sm text-muted'>
																		{item.size} / {item.color} × {item.quantity}
																	</p>
																</div>
																<p className='font-medium'>
																	{formatPrice(item.price * item.quantity)}
																</p>
															</div>
														))}
													</div>
													{(order.trackingNumber ||
														order.estimatedDelivery) && (
														<div className='mt-6 flex flex-wrap gap-6 border-t border-border pt-6'>
															{order.trackingNumber && (
																<div>
																	<p className='text-sm text-muted'>
																		Tracking Number
																	</p>
																	<a
																		href='#'
																		className='inline-flex items-center gap-1 font-mono text-sm hover:text-accent'
																	>
																		{order.trackingNumber}
																		<ExternalLink className='h-3 w-3' />
																	</a>
																</div>
															)}
															{order.estimatedDelivery && (
																<div>
																	<p className='text-sm text-muted'>
																		Estimated Delivery
																	</p>
																	<p className='text-sm font-medium'>
																		{order.estimatedDelivery}
																	</p>
																</div>
															)}
														</div>
													)}
													<div className='mt-6 flex gap-3'>
														<Button variant='outline' size='sm'>
															View Details
														</Button>
														{order.status === 'delivered' && (
															<Button variant='outline' size='sm'>
																Buy Again
															</Button>
														)}
													</div>
												</div>
											</motion.div>
										)}
									</motion.div>
								)
							})}

							{ORDERS.length === 0 && (
								<div className='border border-dashed border-border py-16 text-center'>
									<Package className='mx-auto h-12 w-12 text-muted' />
									<p className='mt-4 font-medium'>No orders yet</p>
									<p className='mt-1 text-sm text-muted'>
										When you place orders, they will appear here
									</p>
									<Link href='/shop'>
										<Button className='mt-6'>Start Shopping</Button>
									</Link>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}
