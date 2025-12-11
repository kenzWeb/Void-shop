// refactor(product-card): extract hover actions with animation
'use client'

import {IconButton} from '@/components/ui'
import {motion} from 'framer-motion'
import {Eye, ShoppingBag} from 'lucide-react'
import {QUICK_ADD_BUTTON_ANIMATION} from '../product-card.constants'
import {
	hoverActionsContainerStyles,
	quickAddButtonStyles,
	quickViewButtonStyles,
} from '../product-card.styles'

interface HoverActionsProps {
	isHovered: boolean
	onQuickAdd: (e: React.MouseEvent) => void
	isOutOfStock: boolean
}

export function HoverActions({
	isHovered,
	onQuickAdd,
	isOutOfStock,
}: HoverActionsProps) {
	return (
		<motion.div
			initial={QUICK_ADD_BUTTON_ANIMATION.initial}
			animate={{
				opacity: isHovered ? 1 : 0,
				y: isHovered ? 0 : QUICK_ADD_BUTTON_ANIMATION.initial.y,
			}}
			transition={{duration: QUICK_ADD_BUTTON_ANIMATION.duration}}
			className={hoverActionsContainerStyles}
		>
			<motion.button
				whileHover={{scale: 1.02}}
				whileTap={{scale: 0.98}}
				onClick={onQuickAdd}
				disabled={isOutOfStock}
				className={quickAddButtonStyles({disabled: isOutOfStock})}
			>
				<ShoppingBag className='h-4 w-4' />
				Quick Add
			</motion.button>
			<IconButton
				icon={<Eye className='h-full w-full' />}
				label='Quick view'
				variant='secondary'
				size='md'
				className={quickViewButtonStyles}
			/>
		</motion.div>
	)
}
