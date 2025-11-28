'use client'

import {Breadcrumbs, Container} from '@/components/ui'
import {zodResolver} from '@hookform/resolvers/zod'
import {motion} from 'framer-motion'
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {
	DemoCredentials,
	ErrorAlert,
	LoginForm,
	PageHeader,
	RegisterLink,
} from './components'
import {BREADCRUMBS, loginSchema} from './login.constants'
import {
	formCardStyles,
	formContainerStyles,
	sectionStyles,
} from './login.styles'
import {LoginFormData} from './login.types'

export function LoginView() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = async (data: LoginFormData) => {
		setIsLoading(true)
		setError(null)
		const result = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		})
		if (result?.error) {
			setError('Invalid email or password')
			setIsLoading(false)
		} else {
			router.push('/account')
			router.refresh()
		}
	}

	return (
		<section className={sectionStyles}>
			<Container>
				<Breadcrumbs items={BREADCRUMBS} className='mb-8' />
				<div className={formContainerStyles}>
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.5}}
					>
						<PageHeader />
						<div className={formCardStyles}>
							{error && <ErrorAlert message={error} />}
							<LoginForm
								onSubmit={handleSubmit(onSubmit)}
								isLoading={isLoading}
								errors={errors}
								register={register}
							/>
							<RegisterLink />
							<DemoCredentials />
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}
