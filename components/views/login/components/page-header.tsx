'use client'

import {
	headerContainerStyles,
	subtitleStyles,
	titleStyles,
} from '../login.styles'

export function PageHeader() {
	return (
		<div className={headerContainerStyles}>
			<h1 className={titleStyles}>Welcome Back</h1>
			<p className={subtitleStyles}>Sign in to access your account</p>
		</div>
	)
}
