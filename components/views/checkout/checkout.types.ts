import {CartItem} from '@/types'

export interface CheckoutViewProps {}

export interface CheckoutFormData {
	email: string
	firstName: string
	lastName: string
	address: string
	city: string
	postalCode: string
	country: string
	phone: string
	cardNumber: string
	cardExpiry: string
	cardCvc: string
	cardName: string
}

export interface InputFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
}

export interface LoadingStateProps {}

export interface OrderCompleteProps {}

export interface EmptyCartProps {}

export interface CheckoutFormProps {
	onSubmit: (data: CheckoutFormData) => void
	isProcessing: boolean
	total: number
	formatPrice: (price: number) => string
}

export interface OrderSummaryProps {
	items: CartItem[]
	summary: {subtotal: number; shipping: number; tax: number; total: number}
	formatPrice: (price: number) => string
}

export interface TrustBadgesProps {}
