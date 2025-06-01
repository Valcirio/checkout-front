'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Hooks
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Components
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthContext } from '@/context/AuthContext'
import { toast } from 'sonner'

// Validators | Types
import { TLoginAdmin, ZLoginAdmin } from '@/validators/admin'
import { STATUS_CODE } from '@/types/httpStatus'
import { Loading } from '@/components/loading'

export default function LoginPage() {
	const router = useRouter()
	const { SignIn } = useContext(AuthContext)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TLoginAdmin>({
		resolver: zodResolver(ZLoginAdmin),
		criteriaMode: 'all',
		mode: 'onSubmit',
		defaultValues: { email: '', password: '' },
	})

	async function loginHandle({ email, password }: TLoginAdmin) {
		try {
			const result = await SignIn({ email, password })
			if (result === STATUS_CODE.OK) {
				toast.success('Login bem-sucedido!')
				setTimeout(() => {
					router.push('/admin')
				}, 2000)
			}
		} catch {
			toast.error('Nome ou Senha do usuário inválido.')
		}
	}

	return (
		<section className="flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4">
			<Card className="w-full max-w-xl">
				<CardHeader>
					<CardTitle>Entre agora</CardTitle>
					<CardDescription>
						Entre na sua conta e gerencie seus pagamentos com facilidade!
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						noValidate
						onSubmit={handleSubmit(loginHandle)}
						className="flex h-auto w-full flex-col items-center justify-center gap-3 px-6 sm:px-1"
					>
						<label
							htmlFor="email"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>E-mail</span>
							<Input
								data-invalid={errors.email?.message && true}
								type="email"
								{...register('email')}
							/>
							{errors.email?.message && (
								<p className="text-sm text-destructive">{errors.email?.message}</p>
							)}
						</label>
						<label
							htmlFor="password"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>Senha</span>
							<Input
								data-invalid={errors.password?.message && true}
								type="password"
								{...register('password')}
							/>
							{errors.password?.message && (
								<p className="text-sm text-destructive">{errors.password?.message}</p>
							)}
						</label>
						<label className="my-2 flex w-full items-center justify-start">
							<span>Ainda não possui uma conta?</span>
							<Button asChild variant="link" size="sm" className="px-1 text-base">
								<Link href="/register">Cadastre-se</Link>
							</Button>
						</label>
						<Button type="submit" disabled={isSubmitting} className="w-full">
							{isSubmitting ? <Loading info="Carregando..." size="sm" /> : 'Cadastrar'}
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	)
}
