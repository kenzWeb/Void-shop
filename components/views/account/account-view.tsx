'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {useHydration} from '@/hooks'
import {useCartStore, useFavoritesStore} from '@/store'
import {motion} from 'framer-motion'
import {signOut, useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import {BREADCRUMBS, MENU_ITEMS, RECENT_ORDERS} from './account.constants'
import {
	contentStyles,
	mainGridStyles,
	sectionStyles,
	sidebarStyles,
} from './account.styles'
import {
	LoadingState,
	MemberBenefits,
	NavigationMenu,
	QuickActions,
	RecentOrders,
	UserProfile,
} from './components'

export function AccountView() {
	const router = useRouter()
	const {data: session, status} = useSession()
	const isHydrated = useHydration()
	const favoritesCount = useFavoritesStore((state) => state.getFavoritesCount())
	const cartItemCount = useCartStore((state) => state.getItemCount())

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/login')
		}
	}, [status, router])

	if (status === 'loading' || !isHydrated) {
		return <LoadingState />
	}

	if (!session) {
		return null
	}

	const handleSignOut = () => {
		signOut({callbackUrl: '/'})
	}

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />

				<div className={mainGridStyles}>
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						className={sidebarStyles}
					>
						<UserProfile
							name={session.user.name ?? ''}
							email={session.user.email ?? ''}
							favoritesCount={favoritesCount}
							cartCount={cartItemCount}
							onSignOut={handleSignOut}
						/>
						<NavigationMenu items={MENU_ITEMS} />
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.1}}
						className={contentStyles}
					>
						<RecentOrders orders={RECENT_ORDERS} />
						<div className='mt-6 grid gap-6 sm:grid-cols-2'>
							<QuickActions favoritesCount={favoritesCount} />
							<MemberBenefits />
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}
