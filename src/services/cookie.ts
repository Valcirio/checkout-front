import { cookies } from 'next/headers'

export default async function getCookieData(): Promise<string | undefined> {
	const cookieData = (await cookies()).get('access-token')?.value
	return await new Promise((resolve) => {
		resolve(cookieData)
	})
}
