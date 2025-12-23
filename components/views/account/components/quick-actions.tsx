'use client'

import {Heart, Settings, ShoppingBag} from 'lucide-react'
import Link from 'next/link'
import {cardStyles} from '../account.styles'

interface QuickActionsProps {
	favoritesCount: number
}

export function QuickActions({favoritesCount}: QuickActionsProps) {
	return (
		<div className={`${cardStyles} p-6`}>
			<h3 className='mb-4 font-bold'>Quick Actions</h3>
			<div className='space-y-3'>
				<Link
					href='/shop'
					className='flex items-center gap-3 text-sm hover:text-accent'
				>
					<ShoppingBag className='h-4 w-4' />
					Continue Shopping
				</Link>
				<Link
					href='/favorites'
					className='flex items-center gap-3 text-sm hover:text-accent'
				>
					<Heart className='h-4 w-4' />
					View Favorites ({favoritesCount})
				</Link>
				<Link
					href='/account/settings'
					className='flex items-center gap-3 text-sm hover:text-accent'
				>
					<Settings className='h-4 w-4' />
					Update Settings
				</Link>
			</div>
		</div>
	)
}
