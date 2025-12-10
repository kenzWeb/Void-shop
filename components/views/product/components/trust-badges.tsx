'use client'

import {RotateCcw, Shield, Truck} from 'lucide-react'
import {trustBadgesStyles} from '../product.styles'

export function TrustBadges() {
	return (
		<div className={trustBadgesStyles}>
			<div className='text-center'>
				<Truck className='mx-auto h-6 w-6 text-muted' />
				<p className='mt-2 text-xs text-muted'>Free Shipping</p>
			</div>
			<div className='text-center'>
				<Shield className='mx-auto h-6 w-6 text-muted' />
				<p className='mt-2 text-xs text-muted'>2 Year Warranty</p>
			</div>
			<div className='text-center'>
				<RotateCcw className='mx-auto h-6 w-6 text-muted' />
				<p className='mt-2 text-xs text-muted'>30-Day Returns</p>
			</div>
		</div>
	)
}
