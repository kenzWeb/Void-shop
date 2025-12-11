// refactor(product-card): extract badge container logic
'use client'

import {cn} from '@/lib/cn'
import {
	badgeBaseStyles,
	badgeContainerStyles,
	discountBadgeStyles,
	newBadgeStyles,
} from '../product-card.styles'
import {StatusBadgeConfig} from '../product-card.types'

interface BadgeContainerProps {
	isNew: boolean
	hasDiscount: boolean
	discountPercentage: number
	statusBadge: StatusBadgeConfig | null
}

export function BadgeContainer({
	isNew,
	hasDiscount,
	discountPercentage,
	statusBadge,
}: BadgeContainerProps) {
	return (
		<div className={badgeContainerStyles}>
			{isNew && (
				<span className={cn(badgeBaseStyles, newBadgeStyles)}>New</span>
			)}
			{hasDiscount && (
				<span className={cn(badgeBaseStyles, discountBadgeStyles)}>
					-{discountPercentage}%
				</span>
			)}
			{statusBadge && (
				<span className={cn(badgeBaseStyles, statusBadge.className)}>
					{statusBadge.label}
				</span>
			)}
		</div>
	)
}
