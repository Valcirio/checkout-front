import { cnpj } from 'cpf-cnpj-validator'
import { z } from 'zod'

export const ZRegisterAdmin = z
	.object({
		name: z.string().nonempty('Nome do usuário é obrigatório.'),
		email: z.string().email('E-mail inválido.').nonempty(),
		cnpj: z
			.string()
			.nonempty('Campo do CNPJ é obrigatório.')
			.refine((el) => cnpj.isValid(el), { message: 'CNPJ Inválido.' }),
		password: z
			.string({ message: 'Campo senha é obrigatório' })
			.nonempty('Campo senha é obrigatório.'),
		confirmPassword: z
			.string({ message: 'Campo senha é obrigatório' })
			.nonempty('Campo senha é obrigatório.'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não coincidem.',
		path: ['confirmPassword'],
	})

export type TRegisterAdmin = z.infer<typeof ZRegisterAdmin>

export const ZLoginAdmin = z.object({
	email: z.string().email('E-mail inválido.').nonempty('Campo de E-mail é obrigatório.'),
	password: z.string().nonempty('Campo de senha é obrigatório.'),
})

export type TLoginAdmin = z.infer<typeof ZLoginAdmin>

export type TAdminToken = { id: string; name: string; iat: number; exp: number }
