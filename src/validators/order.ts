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
	product: { title: string; price: string }
	status: string
}

export type TRequestOrderSession = {
	client: { name: string; email: string; method: string | null }
	product: { title: string; price: number; picture: string }

	status: string
	value: number
	clientId: string
	productId: string
	createdAt: string
}
