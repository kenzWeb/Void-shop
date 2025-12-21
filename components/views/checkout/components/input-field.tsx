'use client'

import {forwardRef} from 'react'
import {inputStyles} from '../checkout.styles'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	({label, error, className, ...props}, ref) => {
		return (
			<div>
				<label className='mb-1.5 block text-sm font-medium'>{label}</label>
				<input ref={ref} className={inputStyles(!!error)} {...props} />
				{error && <p className='mt-1 text-xs text-error'>{error}</p>}
			</div>
		)
	},
)

InputField.displayName = 'InputField'
