'use client'

import Link from 'next/link'
import {linkToRegisterStyles} from '../login.styles'

export function RegisterLink() {
	return (
		<div className={linkToRegisterStyles}>
			<span className='text-muted'>Don&apos;t have an account? </span>
			<Link
				href='/register'
				className='font-medium underline hover:text-accent'
			>
				Create one
			</Link>
		</div>
	)
}
