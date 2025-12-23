'use client'

import {Breadcrumbs, Button, Container} from '@/components/ui'
import {cn} from '@/lib/cn'
import {useUIStore} from '@/store'
import {Breadcrumb} from '@/types'
import {AnimatePresence, motion} from 'framer-motion'
import {ArrowLeft, MapPin, Pencil, Plus, Trash2} from 'lucide-react'
import Link from 'next/link'
import {useState} from 'react'

const BREADCRUMBS: Breadcrumb[] = [
	{label: 'Account', href: '/account', isActive: false},
	{label: 'Addresses', href: '/account/addresses', isActive: true},
]

interface Address {
	id: string
	name: string
	street: string
	city: string
	state: string
	zip: string
	country: string
	phone: string
	isDefault: boolean
}

const INITIAL_ADDRESSES: Address[] = [
	{
		id: '1',
		name: 'John Doe',
		street: '123 Main Street, Apt 4B',
		city: 'New York',
		state: 'NY',
		zip: '10001',
		country: 'United States',
		phone: '+1 234 567 8900',
		isDefault: true,
	},
	{
		id: '2',
		name: 'John Doe',
		street: '456 Oak Avenue',
		city: 'Los Angeles',
		state: 'CA',
		zip: '90001',
		country: 'United States',
		phone: '+1 234 567 8901',
		isDefault: false,
	},
]

export function AddressesView() {
	const showSuccess = useUIStore((state) => state.showSuccess)
	const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES)

	const handleSetDefault = (id: string) => {
		setAddresses((prev) =>
			prev.map((addr) => ({...addr, isDefault: addr.id === id})),
		)
		showSuccess(
			'Default address updated',
			'Your shipping address has been changed',
		)
	}

	const handleDelete = (id: string) => {
		setAddresses((prev) => prev.filter((addr) => addr.id !== id))
		showSuccess('Address deleted', 'The address has been removed')
	}

	const handleAddNew = () => {
		const newAddress: Address = {
			id: Date.now().toString(),
			name: 'New Address',
			street: 'Enter street address',
			city: 'City',
			state: 'State',
			zip: '00000',
			country: 'United States',
			phone: '+1 000 000 0000',
			isDefault: addresses.length === 0,
		}
		setAddresses((prev) => [...prev, newAddress])
		showSuccess('Address added', 'Edit the details below')
	}

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
						<div className='mb-8 flex items-center justify-between'>
							<h1 className='text-3xl font-bold tracking-tighter'>
								Saved Addresses
							</h1>
							<Button
								onClick={handleAddNew}
								leftIcon={<Plus className='h-4 w-4' />}
							>
								Add New
							</Button>
						</div>

						<div className='space-y-4'>
							<AnimatePresence mode='popLayout'>
								{addresses.map((address) => (
									<motion.div
										key={address.id}
										layout
										initial={{opacity: 0, y: 20}}
										animate={{opacity: 1, y: 0}}
										exit={{opacity: 0, scale: 0.95}}
										className={cn(
											'border p-6',
											address.isDefault
												? 'border-accent bg-accent/5'
												: 'border-border',
										)}
									>
										<div className='flex items-start justify-between'>
											<div className='flex items-start gap-4'>
												<div
													className={cn(
														'flex h-10 w-10 items-center justify-center',
														address.isDefault ? 'bg-accent' : 'bg-surface',
													)}
												>
													<MapPin
														className={cn(
															'h-5 w-5',
															address.isDefault
																? 'text-accent-foreground'
																: 'text-muted',
														)}
													/>
												</div>
												<div>
													<div className='flex items-center gap-2'>
														<p className='font-bold'>{address.name}</p>
														{address.isDefault && (
															<span className='bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground'>
																DEFAULT
															</span>
														)}
													</div>
													<p className='mt-1 text-sm text-muted'>
														{address.street}
													</p>
													<p className='text-sm text-muted'>
														{address.city}, {address.state} {address.zip}
													</p>
													<p className='text-sm text-muted'>
														{address.country}
													</p>
													<p className='mt-2 text-sm'>{address.phone}</p>
												</div>
											</div>
											<div className='flex gap-2'>
												<button className='p-2 text-muted hover:text-foreground'>
													<Pencil className='h-4 w-4' />
												</button>
												<button
													onClick={() => handleDelete(address.id)}
													className='p-2 text-muted hover:text-error'
												>
													<Trash2 className='h-4 w-4' />
												</button>
											</div>
										</div>
										{!address.isDefault && (
											<button
												onClick={() => handleSetDefault(address.id)}
												className='mt-4 text-sm text-muted underline hover:text-foreground'
											>
												Set as default
											</button>
										)}
									</motion.div>
								))}
							</AnimatePresence>

							{addresses.length === 0 && (
								<div className='border border-dashed border-border py-12 text-center'>
									<MapPin className='mx-auto h-12 w-12 text-muted' />
									<p className='mt-4 font-medium'>No addresses saved</p>
									<p className='mt-1 text-sm text-muted'>
										Add a shipping address to get started
									</p>
									<Button
										className='mt-6'
										onClick={handleAddNew}
										leftIcon={<Plus className='h-4 w-4' />}
									>
										Add Address
									</Button>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}
