import { cpf } from 'cpf-cnpj-validator'
import { z } from 'zod'

export const ZRegisterClient = z.object({
	name: z.string().nonempty('Nome do usuário é obrigatório.'),
	email: z.string().email('E-mail inválido.').nonempty('E-mail é obrigatório.'),
	address: z.string().nonempty('Endereço é obrigatório.'),
	cpf: z
		.string()
		.nonempty('Campo do CPF é obrigatório.')
		.refine((el) => cpf.isValid(el), { message: 'CPF Inválido.' })
		.refine((val) => val.search('_') === -1, { message: 'CPF Inválido.' })
		.transform((val) => val.replaceAll('.', '').replace('-', '')),
	quantity: z
		.number()
		.min(1, 'Quantidade mínima de 1 produto.')
		.max(5, 'Quantidade máxima de 5 produtos.'),
})

export type TRegisterClient = z.infer<typeof ZRegisterClient>

export type TCreateOrder = TRegisterClient & { productId: string }
