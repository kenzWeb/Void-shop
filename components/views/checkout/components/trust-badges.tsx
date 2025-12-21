'use client'

import {CreditCard, Shield, Truck} from 'lucide-react'
import {trustBadgesStyles} from '../checkout.styles'

export function TrustBadges() {
	return (
		<div className={trustBadgesStyles}>
			<div className='text-center'>
				<Truck className='mx-auto h-5 w-5 text-muted' />
				<p className='mt-2 text-xs text-muted'>Free Shipping</p>
			</div>
			<div className='text-center'>
				<Shield className='mx-auto h-5 w-5 text-muted' />
				<p className='mt-2 text-xs text-muted'>Secure Payment</p>
			</div>
			<div className='text-center'>
				<CreditCard className='mx-auto h-5 w-5 text-muted' />
				<p className='mt-2 text-xs text-muted'>Encrypted</p>
			</div>
		</div>
	)
}
