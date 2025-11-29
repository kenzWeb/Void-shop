'use client'

import {motion} from 'framer-motion'
import {AlertCircle} from 'lucide-react'
import {errorAlertStyles} from '../login.styles'

interface ErrorAlertProps {
	message: string
}

export function ErrorAlert({message}: ErrorAlertProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: -10}}
			animate={{opacity: 1, y: 0}}
			className={errorAlertStyles}
		>
			<AlertCircle className='h-4 w-4 shrink-0' />
			{message}
		</motion.div>
	)
}
