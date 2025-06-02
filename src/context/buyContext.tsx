'use client'
import React, { createContext, useEffect, useState } from 'react'
import instance from '@/services/axios'
import { STATUS_CODE } from '@/types/httpStatus'
import axios from 'axios'
import { TCreateOrder } from '@/validators/client'
import { getCookie, setCookie } from 'cookies-next/client'
import { TIME_STAMP } from '@/types/magicNumbers'

export type BuyContextProps = {
	secret?: string
	CreateOrder: (data: TCreateOrder) => Promise<STATUS_CODE>
}

type TOrderResponse = { data: { message: string; secret: string } }

export const BuyContext = createContext({} as BuyContextProps)

export default function BuyProvider({ children }: { children: React.ReactElement }) {
	const [secret, setSecret] = useState<string | undefined>(undefined)

	useEffect(() => {
		const cookieValue = getCookie('stripe-secret')
		if (cookieValue) {
			setSecret(cookieValue)
		}
	}, [])

	async function CreateOrder({ name, cpf, email, address, quantity, productId }: TCreateOrder) {
		try {
			const response: TOrderResponse = await instance.post(
				'/order',
				{ name, cpf, email, address, quantity, productId },
				{ headers: { 'Content-Type': 'application/json' } }
			)

			setCookie('stripe-secret', response.data.secret, {
				expires: new Date(Date.now() + TIME_STAMP.OneHour),
			})
			setSecret(response.data.secret)
			return STATUS_CODE.OK
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(`Erro ${error.status}`)
			}
			throw new Error('Erro desconhecido')
		}
	}

	return <BuyContext.Provider value={{ secret, CreateOrder }}>{children}</BuyContext.Provider>
}
