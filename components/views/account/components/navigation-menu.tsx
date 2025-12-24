'use client'

import {ChevronRight} from 'lucide-react'
import Link from 'next/link'
import {cardStyles, menuItemStyles} from '../account.styles'
import {MenuItem} from '../account.types'

interface NavigationMenuProps {
	items: MenuItem[]
}

export function NavigationMenu({items}: NavigationMenuProps) {
	return (
		<div className={`mt-6 ${cardStyles}`}>
			{items.map((item, index) => (
				<Link
					key={item.label}
					href={item.href}
					className={menuItemStyles(index === items.length - 1)}
				>
					<div className='flex items-center gap-3'>
						<item.icon className='h-5 w-5 text-muted' />
						<div>
							<p className='text-sm font-medium'>{item.label}</p>
							<p className='text-xs text-muted'>{item.description}</p>
						</div>
					</div>
					<ChevronRight className='h-4 w-4 text-muted' />
				</Link>
			))}
		</div>
	)
}
