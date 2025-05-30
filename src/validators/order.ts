import { z } from 'zod'

export const ZRegisterOrder = z.object({
	price: z.number().min(0, 'Preço inválido'),
	product: z.string(),
	client: z.string(),
	status: z.string(),
})

export type TRegisterOrder = z.infer<typeof ZRegisterOrder>
