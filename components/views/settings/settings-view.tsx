'use client'

import {Breadcrumbs, Button, Container} from '@/components/ui'
import {cn} from '@/lib/cn'
import {useUIStore} from '@/store'
import {Breadcrumb} from '@/types'
import {zodResolver} from '@hookform/resolvers/zod'
import {motion} from 'framer-motion'
import {ArrowLeft, Bell, Globe, Save, User} from 'lucide-react'
import {useSession} from 'next-auth/react'
import Link from 'next/link'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Account', href: '/account', isActive: false},
	{label: 'Settings', href: '/account/settings', isActive: true},
]

const profileSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string().optional(),
})

type ProfileFormData = z.infer<typeof profileSchema>

export function SettingsView() {
	const {data: session} = useSession()
	const showSuccess = useUIStore((state) => state.showSuccess)
	const [isSaving, setIsSaving] = useState(false)
	const [notifications, setNotifications] = useState({
		orders: true,
		promotions: false,
		newsletter: true,
	})

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<ProfileFormData>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: session?.user?.name || '',
			email: session?.user?.email || '',
		},
	})

	const onSubmit = async () => {
		setIsSaving(true)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		setIsSaving(false)
		showSuccess('Settings saved', 'Your profile has been updated')
	}

	const inputStyles = (hasError: boolean) =>
		cn(
			'h-12 w-full border bg-background px-4 text-sm focus:border-foreground focus:outline-none',
			hasError ? 'border-error' : 'border-border',
		)

	return (
		<section className='py-8'>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<div className='mb-8'>
					<Link
						href='/account'
						className='inline-flex items-center gap-2 text-sm text-muted hover:text-foreground'
					>
						<ArrowLeft className='h-4 w-4' />
						Back to Account
					</Link>
				</div>

				<div className='mx-auto max-w-2xl'>
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
					>
						<h1 className='mb-8 text-3xl font-bold tracking-tighter'>
							Account Settings
						</h1>

						<div className='space-y-8'>
							<div className='border border-border p-6'>
								<h2 className='mb-6 flex items-center gap-2 text-lg font-bold'>
									<User className='h-5 w-5' />
									Profile Information
								</h2>
								<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
									<div>
										<label className='mb-1.5 block text-sm font-medium'>
											Full Name
										</label>
										<input
											type='text'
											className={inputStyles(!!errors.name)}
											{...register('name')}
										/>
										{errors.name && (
											<p className='mt-1 text-xs text-error'>
												{errors.name.message}
											</p>
										)}
									</div>
									<div>
										<label className='mb-1.5 block text-sm font-medium'>
											Email Address
										</label>
										<input
											type='email'
											className={inputStyles(!!errors.email)}
											{...register('email')}
										/>
										{errors.email && (
											<p className='mt-1 text-xs text-error'>
												{errors.email.message}
											</p>
										)}
									</div>
									<div>
										<label className='mb-1.5 block text-sm font-medium'>
											Phone Number
										</label>
										<input
											type='tel'
											placeholder='+1 234 567 8900'
											className='h-12 w-full border border-border bg-background px-4 text-sm focus:border-foreground focus:outline-none'
											{...register('phone')}
										/>
									</div>
									<Button
										type='submit'
										isLoading={isSaving}
										leftIcon={<Save className='h-4 w-4' />}
									>
										Save Changes
									</Button>
								</form>
							</div>

							<div className='border border-border p-6'>
								<h2 className='mb-6 flex items-center gap-2 text-lg font-bold'>
									<Bell className='h-5 w-5' />
									Notifications
								</h2>
								<div className='space-y-4'>
									{[
										{
											key: 'orders' as const,
											label: 'Order Updates',
											description: 'Get notified about your order status',
										},
										{
											key: 'promotions' as const,
											label: 'Promotions',
											description: 'Receive exclusive deals and offers',
										},
										{
											key: 'newsletter' as const,
											label: 'Newsletter',
											description: 'Weekly updates on new arrivals',
										},
									].map((item) => (
										<div
											key={item.key}
											className='flex items-center justify-between'
										>
											<div>
												<p className='font-medium'>{item.label}</p>
												<p className='text-sm text-muted'>{item.description}</p>
											</div>
											<button
												onClick={() =>
													setNotifications((prev) => ({
														...prev,
														[item.key]: !prev[item.key],
													}))
												}
												className={cn(
													'relative h-6 w-11 rounded-full transition-colors',
													notifications[item.key] ? 'bg-accent' : 'bg-surface',
												)}
											>
												<span
													className={cn(
														'absolute top-1 h-4 w-4 rounded-full bg-white transition-transform',
														notifications[item.key] ? 'left-6' : 'left-1',
													)}
												/>
											</button>
										</div>
									))}
								</div>
							</div>

							<div className='border border-border p-6'>
								<h2 className='mb-6 flex items-center gap-2 text-lg font-bold'>
									<Globe className='h-5 w-5' />
									Preferences
								</h2>
								<div className='space-y-4'>
									<div>
										<label className='mb-1.5 block text-sm font-medium'>
											Language
										</label>
										<select className='h-12 w-full border border-border bg-background px-4 text-sm focus:border-foreground focus:outline-none'>
											<option value='en'>English</option>
											<option value='ru'>Русский</option>
											<option value='de'>Deutsch</option>
										</select>
									</div>
									<div>
										<label className='mb-1.5 block text-sm font-medium'>
											Currency
										</label>
										<select className='h-12 w-full border border-border bg-background px-4 text-sm focus:border-foreground focus:outline-none'>
											<option value='usd'>USD ($)</option>
											<option value='eur'>EUR (€)</option>
											<option value='gbp'>GBP (£)</option>
										</select>
									</div>
								</div>
							</div>

							<div className='border border-error/50 p-6'>
								<h2 className='mb-2 text-lg font-bold text-error'>
									Danger Zone
								</h2>
								<p className='mb-4 text-sm text-muted'>
									Permanently delete your account and all associated data.
								</p>
								<Button
									variant='outline'
									className='border-error text-error hover:bg-error/10'
								>
									Delete Account
								</Button>
							</div>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}
