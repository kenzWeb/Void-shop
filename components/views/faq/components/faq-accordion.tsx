'use client'

import {cn} from '@/lib/cn'
import {AnimatePresence, motion} from 'framer-motion'
import {ChevronDown} from 'lucide-react'
import {FAQCategory} from '../faq.constants'
import {accordionItemStyles} from '../faq.styles'

interface FAQAccordionProps {
	categories: FAQCategory[]
	openItems: Set<string>
	onToggle: (id: string) => void
}

export function FAQAccordion({
	categories,
	openItems,
	onToggle,
}: FAQAccordionProps) {
	return (
		<div className='mx-auto max-w-3xl space-y-8'>
			{categories.map((cat, catIdx) => (
				<motion.div
					key={cat.id}
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{delay: 0.4 + catIdx * 0.1}}
				>
					<h2 className='mb-4 flex items-center gap-2 text-lg font-bold'>
						<cat.icon className='h-5 w-5' />
						{cat.title}
					</h2>
					<div className='border border-border'>
						{cat.faqs.map((faq, faqIdx) => {
							const itemId = `${cat.id}-${faqIdx}`
							const isOpen = openItems.has(itemId)
							return (
								<div
									key={faqIdx}
									className={accordionItemStyles(
										faqIdx === cat.faqs.length - 1,
									)}
								>
									<button
										onClick={() => onToggle(itemId)}
										className='flex w-full items-center justify-between p-5 text-left'
									>
										<span className='pr-4 font-medium'>{faq.question}</span>
										<ChevronDown
											className={cn(
												'h-5 w-5 shrink-0 text-muted transition-transform',
												isOpen && 'rotate-180',
											)}
										/>
									</button>
									<AnimatePresence>
										{isOpen && (
											<motion.div
												initial={{height: 0, opacity: 0}}
												animate={{height: 'auto', opacity: 1}}
												exit={{height: 0, opacity: 0}}
												transition={{duration: 0.2}}
												className='overflow-hidden'
											>
												<p className='px-5 pb-5 text-sm text-muted'>
													{faq.answer}
												</p>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							)
						})}
					</div>
				</motion.div>
			))}
			{categories.length === 0 && (
				<div className='py-12 text-center'>
					<p className='text-muted'>No FAQs match your search.</p>
				</div>
			)}
		</div>
	)
}
