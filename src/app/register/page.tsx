'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TRegisterAdmin, ZRegisterAdmin } from '@/validators/admin'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import instance from '@/services/axios'
import { STATUS_CODE } from '@/types/httpStatus'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Loading } from '@/components/loading'
import { getCookie } from 'cookies-next/client'
import { useHookFormMask } from 'use-mask-input'

export default function RegisterPage() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TRegisterAdmin>({
		resolver: zodResolver(ZRegisterAdmin),
		criteriaMode: 'all',
		mode: 'onSubmit',
		defaultValues: { name: '', cnpj: '', email: '', password: '', confirmPassword: '' },
	})
	const registerCNPJ = useHookFormMask(register)

	async function registerHandle({ cnpj, password, name, email }: TRegisterAdmin) {
		try {
			const result = await instance.post(
				'/admin',
				{ name, email, password, cnpj: cnpj.replaceAll('.', '').replace('/', '').replace('-', '') },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${getCookie('access-token')}`,
					},
				}
			)

			if (result.status === STATUS_CODE.Created) {
				setTimeout(() => {
					toast.success('Usuário criado com sucesso.')
					router.push('/login')
				}, 2000)
			}
		} catch {
			toast.error('Ocorreu um erro ao tentar criar o usuário.')
		}
	}

	return (
		<section className="flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4">
			<Card className="w-full max-w-xl">
				<CardHeader>
					<CardTitle>Cadastre-se agora</CardTitle>
					<CardDescription>
						Cadastre sua empresa e ofereça pagamentos simples, rápidos e seguros!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={handleSubmit(registerHandle)}
						className="flex h-auto w-full flex-col items-center justify-center gap-3 px-6 sm:px-1"
					>
						<label htmlFor="name" className="flex w-full flex-col items-start justify-center gap-2">
							<span>Nome Completo</span>
							<Input {...register('name')} />
							{errors.name?.message && (
								<p className="text-sm text-destructive">{errors.name?.message}</p>
							)}
						</label>
						<label
							htmlFor="email"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>E-mail</span>
							<Input {...register('email')} />
							{errors.email?.message && (
								<p className="text-sm text-destructive">{errors.email?.message}</p>
							)}
						</label>
						<label htmlFor="cnpj" className="flex w-full flex-col items-start justify-center gap-2">
							<span>CNPJ</span>
							<Input
								placeholder="99.999.999/9999-99"
								{...registerCNPJ('cnpj', '99.999.999/9999-99')}
							/>
							{errors.cnpj?.message && (
								<p className="text-sm text-destructive">{errors.cnpj?.message}</p>
							)}
						</label>
						<label
							htmlFor="password"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>Senha</span>
							<Input type="password" {...register('password')} />
							{errors.password?.message && (
								<p className="text-sm text-destructive">{errors.password?.message}</p>
							)}
						</label>
						<label
							htmlFor="confirmPassword"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>Confirme a senha</span>
							<Input type="password" {...register('confirmPassword')} />
							{errors.confirmPassword?.message && (
								<p className="text-sm text-destructive">{errors.confirmPassword?.message}</p>
							)}
						</label>
						<label className="my-2 flex w-full items-center justify-start">
							<span>Já possui cadastro?</span>
							<Button asChild variant="link" size="sm" className="px-1 text-base">
								<Link href="/login">Conecte-se</Link>
							</Button>
						</label>
						<Button disabled={isSubmitting} className="w-full">
							{isSubmitting ? <Loading info="Carregando..." size="sm" /> : 'Cadastrar'}
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	)
}
