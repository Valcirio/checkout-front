import { z } from 'zod'

export const ZRegisterProduct = z.object({
	title: z
		.string()
		.max(40, 'O nome do produto não pode ter mais de 40 caracteres.')
		.nonempty('O produto precisa de um nome.'),
	description: z
		.string()
		.nonempty('O produto precisa de uma descrição.')
		.max(500, 'A descrição não pode ter mais de 500 caracteres.'),
	price: z.number().min(0, 'Preço inválido.'),
	picture: z.string().nonempty('O produto precisa de uma foto.'),
	quantity: z.number().min(0, 'Quantidade inválida.'),
})

export type TRegisterProduct = z.infer<typeof ZRegisterProduct>

export const ZListProduct = z.object({ id: z.string().nonempty() }).merge(ZRegisterProduct)

export type TListProduct = z.infer<typeof ZListProduct>

export type TRequestProduct = z.infer<typeof ZListProduct>
