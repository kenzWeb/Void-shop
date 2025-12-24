import {getToken} from 'next-auth/jwt'
import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

const protectedRoutes = [
	'/account',
	'/account/settings',
	'/account/addresses',
	'/account/orders',
	'/account/payment',
	'/checkout',
]

const authRoutes = ['/login', '/register']

export async function proxy(request: NextRequest) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
	})

	const {pathname} = request.nextUrl

	const isProtectedRoute = protectedRoutes.some(
		(route) => pathname === route || pathname.startsWith(route + '/'),
	)

	const isAuthRoute = authRoutes.some((route) => pathname === route)

	if (isProtectedRoute && !token) {
		const loginUrl = new URL('/login', request.url)
		loginUrl.searchParams.set('callbackUrl', pathname)
		return NextResponse.redirect(loginUrl)
	}

	if (isAuthRoute && token) {
		return NextResponse.redirect(new URL('/account', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/account/:path*', '/checkout', '/login', '/register'],
}
