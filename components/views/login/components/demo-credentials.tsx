'use client'

import {DEMO_CREDENTIALS} from '../login.constants'
import {demoCredentialsStyles} from '../login.styles'

export function DemoCredentials() {
	return (
		<div className={demoCredentialsStyles}>
			<p className='mb-4 text-center text-xs text-muted'>Demo credentials</p>
			<div className='space-y-1 text-center text-xs text-muted'>
				<p>Email: {DEMO_CREDENTIALS.email}</p>
				<p>Password: {DEMO_CREDENTIALS.password}</p>
			</div>
		</div>
	)
}
