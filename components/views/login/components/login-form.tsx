'use client'

import {Button} from '@/components/ui'
import {ArrowRight, Lock, Mail} from 'lucide-react'
import Link from 'next/link'
import {
	iconStyles,
	inputWithIconStyles,
	rememberMeRowStyles,
} from '../login.styles'

interface LoginFormProps {
	onSubmit: (e: React.FormEvent) => void
	isLoading: boolean
	errors: {email?: {message?: string}; password?: {message?: string}}
	register: any
}

export function LoginForm({
	onSubmit,
	isLoading,
	errors,
	register,
}: LoginFormProps) {
	return (
		<form onSubmit={onSubmit} className='space-y-6'>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>Email</label>
				<div className='relative'>
					<Mail className={iconStyles} />
					<input
						type='email'
						placeholder='your@email.com'
						className={inputWithIconStyles(!!errors.email)}
						{...register('email')}
					/>
				</div>
				{errors.email && (
					<p className='mt-1 text-xs text-error'>{errors.email.message}</p>
				)}
			</div>

			<div>
				<label className='mb-1.5 block text-sm font-medium'>Password</label>
				<div className='relative'>
					<Lock className={iconStyles} />
					<input
						type='password'
						placeholder='••••••••'
						className={inputWithIconStyles(!!errors.password)}
						{...register('password')}
					/>
				</div>
				{errors.password && (
					<p className='mt-1 text-xs text-error'>{errors.password.message}</p>
				)}
			</div>

			<div className={rememberMeRowStyles}>
				<label className='flex items-center gap-2'>
					<input
						type='checkbox'
						className='h-4 w-4 border-border accent-accent'
					/>
					<span>Remember me</span>
				</label>
				<Link
					href='/forgot-password'
					className='text-muted hover:text-foreground'
				>
					Forgot password?
				</Link>
			</div>

			<Button
				type='submit'
				size='lg'
				fullWidth
				isLoading={isLoading}
				rightIcon={<ArrowRight className='h-4 w-4' />}
			>
				Sign In
			</Button>
		</form>
	)
}
