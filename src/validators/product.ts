import { z } from 'zod'

export const ZRegisterProduct = z.object({
	title: z.string().nonempty('O produto precisa de um nome.'),
	description: z.string().nonempty('O produto precisa de uma descrição.'),
	price: z.number().min(0, 'Preço inválido.'),
	picture: z.string().nonempty('O produto precisa de uma foto.'),
	quantity: z.number().min(0, 'Quantidade inválida.'),
})

export type TRegisterProduct = z.infer<typeof ZRegisterProduct>

export const ZListProduct = z.object({ id: z.string().nonempty() }).merge(ZRegisterProduct)

export type TListProduct = z.infer<typeof ZListProduct>

export type TRequestProduct = z.infer<typeof ZListProduct>
