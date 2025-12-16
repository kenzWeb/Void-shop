'use client'

import {Button, Container} from '@/components/ui'
import Link from 'next/link'

export function EmptyCart() {
	return (
		<section className='py-20'>
			<Container>
				<div className='mx-auto max-w-md text-center'>
					<h1 className='text-2xl font-bold'>Your cart is empty</h1>
					<p className='mt-2 text-muted'>Add some items before checkout</p>
					<Link href='/shop'>
						<Button className='mt-6'>Continue Shopping</Button>
					</Link>
				</div>
			</Container>
		</section>
	)
}
