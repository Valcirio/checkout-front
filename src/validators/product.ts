import { z } from 'zod'

const ACCEPTED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']

export const ZRegisterProduct = z.object({
	title: z.string().nonempty('O produto precisa de um nome.'),
	description: z.string().nonempty('O produto precisa de uma descrição.'),
	price: z.number().min(0, 'Preço inválido.'),
	picture: z.string(),
	quantity: z.number().min(0, 'Quantidade inválida.'),
})

export type TRegisterProduct = z.infer<typeof ZRegisterProduct>

export const ZListProduct = z.object({ id: z.string().nonempty() }).merge(ZRegisterProduct)

export type TListProduct = z.infer<typeof ZListProduct>
