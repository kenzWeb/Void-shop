'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {zodResolver} from '@hookform/resolvers/zod'
import {motion} from 'framer-motion'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {
	BenefitsSidebar,
	LoginLink,
	RegisterForm,
	SuccessState,
} from './components'
import {BREADCRUMBS, registerSchema} from './register.constants'
import {
	formCardStyles,
	mainContainerStyles,
	mainGridStyles,
	sectionStyles,
} from './register.styles'

type RegisterFormData = z.infer<typeof registerSchema>

export function RegisterView() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
	})

	const onSubmit = async (data: RegisterFormData) => {
		setIsLoading(true)
		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(data),
			})

			if (!res.ok) {
				const error = await res.json()
				console.error('Registration failed:', error)
				setIsLoading(false)
				return
			}

			setIsSuccess(true)
			setTimeout(() => router.push('/login'), 2000)
		} catch (error) {
			console.error('Registration error:', error)
			setIsLoading(false)
		}
	}

	if (isSuccess) return <SuccessState />

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<div className={mainContainerStyles}>
					<div className={mainGridStyles}>
						<BenefitsSidebar />
						<motion.div
							initial={{opacity: 0, x: 20}}
							animate={{opacity: 1, x: 0}}
						>
							<div className={formCardStyles}>
								<h3 className='mb-6 text-xl font-bold'>Create Your Account</h3>
								<RegisterForm
									onSubmit={handleSubmit(onSubmit)}
									isLoading={isLoading}
									errors={errors}
									register={register}
								/>
								<LoginLink />
							</div>
						</motion.div>
					</div>
				</div>
			</Container>
		</section>
	)
}
