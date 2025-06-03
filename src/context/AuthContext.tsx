'use client'
import React, { createContext, useEffect, useState } from 'react'
import { TAdminToken, TLoginAdmin } from '@/validators/admin'
import { setCookie, deleteCookie, getCookie } from 'cookies-next/client'
import instance from '@/services/axios'
import { STATUS_CODE } from '@/types/httpStatus'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export type AuthContextProps = {
	isAuth: boolean
	user: string | null
	SignIn: (data: TLoginAdmin) => Promise<STATUS_CODE>
	SignOut: () => void
}

type TLoginResponse = { data: { message: string; access_token: string } }

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthProvider({ children }: { children: React.ReactElement }) {
	const router = useRouter()
	const [user, setUser] = useState<string | null>(null)
	const isAuth = !!user

	useEffect(() => {
		const cookieValue = getCookie('access-token')
		if (cookieValue) {
			const decodeJwt: TAdminToken = jwtDecode(cookieValue)
			setUser(decodeJwt.name)
		}
	}, [])

	async function SignIn({ email, password }: TLoginAdmin) {
		try {
			const response: TLoginResponse = await instance.post(
				'/auth/login',
				{ email, password },
				{ headers: { 'Content-Type': 'application/json' } }
			)
			const decode: TAdminToken = jwtDecode(response.data.access_token)
			setCookie('access-token', response.data.access_token, { expires: new Date(decode.exp) })
			setUser(decode.name)

			return STATUS_CODE.OK
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(`Erro ${error.status}`)
			}
			throw new Error('Erro desconhecido')
		}
	}

	function SignOut() {
		deleteCookie('access-token')
		setUser(null)
		router.refresh()
	}

	return (
		<AuthContext.Provider value={{ isAuth, user, SignIn, SignOut }}>
			{children}
		</AuthContext.Provider>
	)
}
