import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
	const token = request.cookies.get('access-token')
	if (!token || !token?.value.trim()) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
