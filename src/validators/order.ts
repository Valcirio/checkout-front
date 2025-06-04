import { z } from 'zod'

export const ZRegisterOrder = z.object({
	price: z.number().min(0, 'Preço inválido'),
	product: z.string(),
	client: z.string(),
	status: z.string(),
})

export type TRegisterOrder = z.infer<typeof ZRegisterOrder>

export type TRequestOrder = {
	id: string
	client: { name: string }
	createdAt: string
	title: string
	price: string
	status: string
}

export type TRequestOrderSession = {
	client: { name: string; email: string; method: string | null }

	status: string
	value: number
	clientId: string
	title: string
	price: number
	picture: string
	productId: string | null
	createdAt: string
}
