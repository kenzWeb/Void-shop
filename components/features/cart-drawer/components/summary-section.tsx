'use client'

import {formatPrice} from '@/lib/format'
import {CartSummary} from '@/types'
import {
	summaryContainerStyles,
	summaryLabelStyles,
	summaryRowStyles,
	summaryTotalRowStyles,
} from '../cart-drawer.styles'

interface SummarySectionProps {
	summary: CartSummary
}

export function SummarySection({summary}: SummarySectionProps) {
	return (
		<div className={summaryContainerStyles}>
			<div className={summaryRowStyles}>
				<span className={summaryLabelStyles}>Subtotal</span>
				<span>{formatPrice(summary.subtotal)}</span>
			</div>
			<div className={summaryRowStyles}>
				<span className={summaryLabelStyles}>Shipping</span>
				<span>
					{summary.shipping === 0 ? (
						<span className='text-accent'>Free</span>
					) : (
						formatPrice(summary.shipping)
					)}
				</span>
			</div>
			<div className={summaryRowStyles}>
				<span className={summaryLabelStyles}>Tax</span>
				<span>{formatPrice(summary.tax)}</span>
			</div>
			<div className={summaryTotalRowStyles}>
				<span>Total</span>
				<span>{formatPrice(summary.total)}</span>
			</div>
		</div>
	)
}
