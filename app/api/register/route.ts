import {users} from '@/lib/auth'
import {NextResponse} from 'next/server'

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const {name, email, password} = body

		if (!name || !email || !password) {
			return NextResponse.json(
				{message: 'Missing required fields'},
				{status: 400},
			)
		}

		const existingUser = users.find((u) => u.email === email)
		if (existingUser) {
			return NextResponse.json({message: 'User already exists'}, {status: 409})
		}

		const newUser = {
			id: String(users.length + 1),
			name,
			email,
			password,
		}

		users.push(newUser)

		return NextResponse.json(
			{
				message: 'User created successfully',
				user: {id: newUser.id, name: newUser.name, email: newUser.email},
			},
			{status: 201},
		)
	} catch (error) {
		return NextResponse.json({message: 'Internal server error'}, {status: 500})
	}
}
