'use client'

import Link from 'next/link'

export function LoginLink() {
	return (
		<div className='mt-6 text-center text-sm'>
			<span className='text-muted'>Already have an account? </span>
			<Link href='/login' className='font-medium underline hover:text-accent'>
				Sign in
			</Link>
		</div>
	)
}
