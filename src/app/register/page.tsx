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

	async function registerHandle(data: TRegisterAdmin) {
		try {
			const result = await instance.post('/admin')

			if (result.status === STATUS_CODE.Created) {
				setTimeout(() => {
					toast.success('Usuário criado com sucesso.')
				}, 2000)
				router.push('/login')
			}
		} catch (err) {
			console.log(err)
			toast.error('Usuário criado com sucesso.')
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
						</label>
						<label
							htmlFor="email"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>E-mail</span>
							<Input {...register('email')} />
						</label>
						<label htmlFor="cnpj" className="flex w-full flex-col items-start justify-center gap-2">
							<span>CNPJ</span>
							<Input {...register('cnpj')} />
						</label>
						<label
							htmlFor="password"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>Senha</span>
							<Input type="password" {...register('password')} />
						</label>
						<label
							htmlFor="confirmPassword"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>Confirme a senha</span>
							<Input type="password" {...register('confirmPassword')} />
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
