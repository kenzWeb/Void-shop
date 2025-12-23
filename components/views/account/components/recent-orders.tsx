'use client'

import {Button} from '@/components/ui'
import {Package, ShoppingBag} from 'lucide-react'
import Link from 'next/link'
import {
	cardStyles,
	orderCardStyles,
	orderIconContainerStyles,
} from '../account.styles'
import {RecentOrder} from '../account.types'

interface RecentOrdersProps {
	orders: RecentOrder[]
}

export function RecentOrders({orders}: RecentOrdersProps) {
	return (
		<div className={`${cardStyles} p-6`}>
			<div className='mb-6 flex items-center justify-between'>
				<h3 className='text-lg font-bold'>Recent Orders</h3>
				<Link
					href='/account/orders'
					className='text-sm text-muted hover:text-foreground'
				>
					View All
				</Link>
			</div>

			{orders.length > 0 ? (
				<div className='space-y-4'>
					{orders.map((order) => (
						<div key={order.id} className={orderCardStyles}>
							<div className='flex items-center gap-4'>
								<div className={orderIconContainerStyles}>
									<ShoppingBag className='h-6 w-6 text-muted' />
								</div>
								<div>
									<p className='font-medium'>{order.id}</p>
									<p className='text-sm text-muted'>
										{order.date} • {order.items} item
										{order.items > 1 ? 's' : ''}
									</p>
								</div>
							</div>
							<div className='text-right'>
								<p className='font-medium'>${order.total.toFixed(2)}</p>
								<p
									className={`text-sm ${
										order.status === 'Delivered' ? 'text-accent' : 'text-muted'
									}`}
								>
									{order.status}
								</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className='py-12 text-center'>
					<Package className='mx-auto h-12 w-12 text-muted' />
					<p className='mt-4 font-medium'>No orders yet</p>
					<p className='mt-1 text-sm text-muted'>
						Start shopping to see orders here
					</p>
					<Link href='/shop'>
						<Button className='mt-6'>Browse Products</Button>
					</Link>
				</div>
			)}
		</div>
	)
}
