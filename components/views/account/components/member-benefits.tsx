'use client'

import {memberBadgeStyles} from '../account.styles'

export function MemberBenefits() {
	return (
		<div className='border border-accent bg-accent/5 p-6'>
			<h3 className='mb-2 font-bold'>Member Benefits</h3>
			<p className='text-sm text-muted'>
				As a VOIDØ member, you get access to exclusive deals, early product
				launches, and free shipping on all orders.
			</p>
			<div className={memberBadgeStyles}>MEMBER</div>
		</div>
	)
}
