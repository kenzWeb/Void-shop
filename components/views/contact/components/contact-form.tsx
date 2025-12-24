'use client'

import {Button} from '@/components/ui'
import {Send} from 'lucide-react'
import {inputStyles, textareaStyles} from '../contact.styles'

interface ContactFormProps {
	onSubmit: (e: React.FormEvent) => void
	isSubmitting: boolean
	errors: {
		name?: {message?: string}
		email?: {message?: string}
		subject?: {message?: string}
		message?: {message?: string}
	}
	register: any
}

export function ContactForm({
	onSubmit,
	isSubmitting,
	errors,
	register,
}: ContactFormProps) {
	return (
		<form onSubmit={onSubmit} className='space-y-5'>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>Name</label>
				<input
					type='text'
					placeholder='Your name'
					className={inputStyles(!!errors.name)}
					{...register('name')}
				/>
				{errors.name && (
					<p className='mt-1 text-xs text-error'>{errors.name.message}</p>
				)}
			</div>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>Email</label>
				<input
					type='email'
					placeholder='your@email.com'
					className={inputStyles(!!errors.email)}
					{...register('email')}
				/>
				{errors.email && (
					<p className='mt-1 text-xs text-error'>{errors.email.message}</p>
				)}
			</div>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>Subject</label>
				<input
					type='text'
					placeholder='How can we help?'
					className={inputStyles(!!errors.subject)}
					{...register('subject')}
				/>
				{errors.subject && (
					<p className='mt-1 text-xs text-error'>{errors.subject.message}</p>
				)}
			</div>
			<div>
				<label className='mb-1.5 block text-sm font-medium'>Message</label>
				<textarea
					rows={5}
					placeholder='Tell us more...'
					className={textareaStyles(!!errors.message)}
					{...register('message')}
				/>
				{errors.message && (
					<p className='mt-1 text-xs text-error'>{errors.message.message}</p>
				)}
			</div>
			<Button
				type='submit'
				fullWidth
				size='lg'
				isLoading={isSubmitting}
				rightIcon={<Send className='h-4 w-4' />}
			>
				Send Message
			</Button>
		</form>
	)
}
