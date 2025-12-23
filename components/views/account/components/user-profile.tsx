'use client'

import {LogOut, User} from 'lucide-react'
import {
	avatarContainerStyles,
	avatarIconStyles,
	profileCardStyles,
	signOutButtonStyles,
	statLabelStyles,
	statsGridStyles,
	statValueStyles,
} from '../account.styles'

interface UserProfileProps {
	name: string
	email: string
	favoritesCount: number
	cartCount: number
	onSignOut: () => void
}

export function UserProfile({
	name,
	email,
	favoritesCount,
	cartCount,
	onSignOut,
}: UserProfileProps) {
	return (
		<div className={profileCardStyles}>
			<div className='flex items-center gap-4'>
				<div className={avatarContainerStyles}>
					<User className={avatarIconStyles} />
				</div>
				<div>
					<h2 className='text-lg font-bold'>{name}</h2>
					<p className='text-sm text-muted'>{email}</p>
				</div>
			</div>

			<div className={statsGridStyles}>
				<div className='text-center'>
					<p className={statValueStyles}>{favoritesCount}</p>
					<p className={statLabelStyles}>Favorites</p>
				</div>
				<div className='text-center'>
					<p className={statValueStyles}>{cartCount}</p>
					<p className={statLabelStyles}>In Cart</p>
				</div>
			</div>

			<button onClick={onSignOut} className={signOutButtonStyles}>
				<LogOut className='h-4 w-4' />
				Sign Out
			</button>
		</div>
	)
}
