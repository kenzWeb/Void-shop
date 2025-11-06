import {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const users = [
	{
		id: '1',
		email: 'demo@voidshop.com',
		password: 'demo123',
		name: 'Demo User',
	},
]

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {label: 'Email', type: 'email'},
				password: {label: 'Password', type: 'password'},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					return null
				}

				const user = users.find(
					(u) =>
						u.email === credentials.email &&
						u.password === credentials.password,
				)

				if (user) {
					return {
						id: user.id,
						email: user.email,
						name: user.name,
					}
				}

				return null
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({token, user}) {
			if (user) {
				token.id = user.id
			}
			return token
		},
		async session({session, token}) {
			if (session.user) {
				session.user.id = token.id as string
			}
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET || 'demo-secret-key-123', 
}
