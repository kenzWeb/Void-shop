export interface LoginViewProps {}

export interface LoginFormData {
	email: string
	password: string
}

export interface PageHeaderProps {}

export interface ErrorAlertProps {
	message: string
}

export interface LoginFormProps {
	onSubmit: (data: LoginFormData) => void
	isLoading: boolean
	errors: Record<string, {message?: string}>
	register: any
}

export interface DemoCredentialsProps {}
