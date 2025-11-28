'use client'

import {Button} from '@/components/ui'
import {ArrowRight, Lock, Mail, User} from 'lucide-react'
import Link from 'next/link'
import {iconStyles, inputWithIconStyles} from '../register.styles'

interface RegisterFormProps {
	onSubmit: (e: React.FormEvent) => void
	isLoading: boolean
	errors: any
	register: any
}

export function RegisterForm({
	onSubmit,
	isLoading,
	errors,
	register: formRegister,
}: RegisterFormProps) {
	return (
		<form onSubmit={onSubmit} className='space-y-5'>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>Full Name</label>
				<div className='relative'>
					<User className={iconStyles} />
					<input
						type='text'
						placeholder='John Doe'
						className={inputWithIconStyles(!!errors.name)}
						{...formRegister('name')}
					/>
				</div>
				{errors.name && (
					<p className='mt-1 text-xs text-error'>{errors.name.message}</p>
				)}
			</div>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>Email</label>
				<div className='relative'>
					<Mail className={iconStyles} />
					<input
						type='email'
						placeholder='your@email.com'
						className={inputWithIconStyles(!!errors.email)}
						{...formRegister('email')}
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
						{...formRegister('password')}
					/>
				</div>
				{errors.password && (
					<p className='mt-1 text-xs text-error'>{errors.password.message}</p>
				)}
			</div>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>
					Confirm Password
				</label>
				<div className='relative'>
					<Lock className={iconStyles} />
					<input
						type='password'
						placeholder='••••••••'
						className={inputWithIconStyles(!!errors.confirmPassword)}
						{...formRegister('confirmPassword')}
					/>
				</div>
				{errors.confirmPassword && (
					<p className='mt-1 text-xs text-error'>
						{errors.confirmPassword.message}
					</p>
				)}
			</div>
			<div className='flex items-start gap-2 text-sm'>
				<input
					type='checkbox'
					id='terms'
					className='mt-1 h-4 w-4 border-border accent-accent'
					required
				/>
				<label htmlFor='terms' className='text-muted'>
					I agree to the{' '}
					<Link href='/terms' className='underline hover:text-foreground'>
						Terms
					</Link>{' '}
					and{' '}
					<Link href='/privacy' className='underline hover:text-foreground'>
						Privacy Policy
					</Link>
				</label>
			</div>
			<Button
				type='submit'
				size='lg'
				fullWidth
				isLoading={isLoading}
				rightIcon={<ArrowRight className='h-4 w-4' />}
			>
				Create Account
			</Button>
		</form>
	)
}
