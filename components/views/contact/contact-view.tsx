'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {useUIStore} from '@/store'
import {zodResolver} from '@hookform/resolvers/zod'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {
	ContactForm,
	ContactInfoGrid,
	LiveChatCard,
	PageHeader,
} from './components'
import {BREADCRUMBS, contactSchema} from './contact.constants'
import {formCardStyles, mainGridStyles, sectionStyles} from './contact.styles'

type ContactFormData = z.infer<typeof contactSchema>

export function ContactView() {
	const showSuccess = useUIStore((state) => state.showSuccess)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	})

	const onSubmit = async () => {
		setIsSubmitting(true)
		await new Promise((resolve) => setTimeout(resolve, 1500))
		setIsSubmitting(false)
		reset()
		showSuccess('Message sent!', "We'll get back to you within 24 hours")
	}

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<PageHeader />

				<div className={mainGridStyles}>
					<motion.div
						initial={{opacity: 0, x: -20}}
						animate={{opacity: 1, x: 0}}
						transition={{delay: 0.2}}
					>
						<ContactInfoGrid />
						<LiveChatCard />
					</motion.div>

					<motion.div
						initial={{opacity: 0, x: 20}}
						animate={{opacity: 1, x: 0}}
						transition={{delay: 0.2}}
						className={formCardStyles}
					>
						<h2 className='mb-6 text-xl font-bold'>Send us a Message</h2>
						<ContactForm
							onSubmit={handleSubmit(onSubmit)}
							isSubmitting={isSubmitting}
							errors={errors}
							register={register}
						/>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}
