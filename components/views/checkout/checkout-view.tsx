'use client'

import {Breadcrumbs, Button, Container} from '@/components/ui'
import {useHydration} from '@/hooks'
import {useCartStore, useUIStore} from '@/store'
import {zodResolver} from '@hookform/resolvers/zod'
import {ArrowLeft, CreditCard} from 'lucide-react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {BREADCRUMBS, checkoutSchema, formatPrice} from './checkout.constants'
import {
	backLinkStyles,
	formStyles,
	loadingSkeletonStyles,
	mainGridStyles,
	sectionStyles,
} from './checkout.styles'
import {CheckoutFormData} from './checkout.types'
import {
	EmptyCart,
	InputField,
	OrderComplete,
	OrderSummary,
	TrustBadges,
} from './components'

export function CheckoutView() {
	const router = useRouter()
	const isHydrated = useHydration()
	const [isProcessing, setIsProcessing] = useState(false)
	const [orderComplete, setOrderComplete] = useState(false)

	const items = useCartStore((state) => state.items)
	const getCartSummary = useCartStore((state) => state.getCartSummary)
	const clearCart = useCartStore((state) => state.clearCart)
	const showSuccess = useUIStore((state) => state.showSuccess)

	const summary = getCartSummary()

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<CheckoutFormData>({
		resolver: zodResolver(checkoutSchema),
	})

	const onSubmit = async () => {
		setIsProcessing(true)
		await new Promise((resolve) => setTimeout(resolve, 2000))
		setOrderComplete(true)
		clearCart()
		showSuccess('Order placed successfully!', 'Thank you for your purchase')
		setTimeout(() => router.push('/'), 3000)
	}

	if (!isHydrated) {
		return (
			<section className='py-8'>
				<Container>
					<div className={loadingSkeletonStyles}>
						<div className='h-8 w-48 bg-surface' />
						<div className='grid gap-8 lg:grid-cols-2'>
							<div className='space-y-4'>
								{[1, 2, 3, 4].map((i) => (
									<div key={i} className='h-12 bg-surface' />
								))}
							</div>
							<div className='h-96 bg-surface' />
						</div>
					</div>
				</Container>
			</section>
		)
	}

	if (orderComplete) return <OrderComplete />
	if (items.length === 0) return <EmptyCart />

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />

				<div className='mb-8'>
					<Link href='/shop' className={backLinkStyles}>
						<ArrowLeft className='h-4 w-4' />
						Continue Shopping
					</Link>
				</div>

				<div className={mainGridStyles}>
					<div>
						<h1 className='mb-8 text-3xl font-bold tracking-tighter'>
							Checkout
						</h1>

						<form onSubmit={handleSubmit(onSubmit)} className={formStyles}>
							<div>
								<h2 className='mb-4 text-lg font-bold'>Contact Information</h2>
								<InputField
									label='Email'
									type='email'
									placeholder='your@email.com'
									error={errors.email?.message}
									{...register('email')}
								/>
							</div>

							<div>
								<h2 className='mb-4 text-lg font-bold'>Shipping Address</h2>
								<div className='grid gap-4 sm:grid-cols-2'>
									<InputField
										label='First Name'
										placeholder='John'
										error={errors.firstName?.message}
										{...register('firstName')}
									/>
									<InputField
										label='Last Name'
										placeholder='Doe'
										error={errors.lastName?.message}
										{...register('lastName')}
									/>
								</div>
								<div className='mt-4 space-y-4'>
									<InputField
										label='Address'
										placeholder='123 Main Street'
										error={errors.address?.message}
										{...register('address')}
									/>
									<div className='grid gap-4 sm:grid-cols-3'>
										<InputField
											label='City'
											placeholder='New York'
											error={errors.city?.message}
											{...register('city')}
										/>
										<InputField
											label='Postal Code'
											placeholder='10001'
											error={errors.postalCode?.message}
											{...register('postalCode')}
										/>
										<InputField
											label='Country'
											placeholder='USA'
											error={errors.country?.message}
											{...register('country')}
										/>
									</div>
									<InputField
										label='Phone'
										type='tel'
										placeholder='+1 234 567 8900'
										error={errors.phone?.message}
										{...register('phone')}
									/>
								</div>
							</div>

							<div>
								<h2 className='mb-4 text-lg font-bold'>Payment</h2>
								<div className='space-y-4'>
									<InputField
										label='Card Number'
										placeholder='1234 5678 9012 3456'
										error={errors.cardNumber?.message}
										{...register('cardNumber')}
									/>
									<div className='grid gap-4 sm:grid-cols-3'>
										<InputField
											label='Expiry Date'
											placeholder='MM/YY'
											error={errors.cardExpiry?.message}
											{...register('cardExpiry')}
										/>
										<InputField
											label='CVC'
											placeholder='123'
											error={errors.cardCvc?.message}
											{...register('cardCvc')}
										/>
										<InputField
											label='Name on Card'
											placeholder='John Doe'
											error={errors.cardName?.message}
											{...register('cardName')}
										/>
									</div>
								</div>
							</div>

							<Button
								type='submit'
								size='lg'
								fullWidth
								isLoading={isProcessing}
								leftIcon={<CreditCard className='h-5 w-5' />}
							>
								Pay {formatPrice(summary.total)}
							</Button>
						</form>

						<TrustBadges />
					</div>

					<div>
						<OrderSummary
							items={items}
							summary={summary}
							formatPrice={formatPrice}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
