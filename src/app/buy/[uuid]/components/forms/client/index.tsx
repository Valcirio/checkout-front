'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select' // Descomente se tiver
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useContext, useState } from 'react'
import { ArrowLeft, Apple, Lock, Router } from 'lucide-react' // Exemplo de ícones
import { TListProduct } from '@/validators/product'
import { useRouter } from 'next/navigation'
import { TRegisterClient, ZRegisterClient } from '@/validators/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Loading } from '@/components/loading'
import { toast } from 'sonner'
import instance from '@/services/axios'
import { BuyContext } from '@/context/buyContext'
import { STATUS_CODE } from '@/types/httpStatus'

export default function ClientForm({ id }: { id: string }) {
	const { CreateOrder } = useContext(BuyContext)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TRegisterClient>({
		resolver: zodResolver(ZRegisterClient),
		criteriaMode: 'all',
		mode: 'onSubmit',
		defaultValues: { name: '', email: '', cpf: '' },
	})

	const handleClient = async (data: TRegisterClient) => {
		try {
			const result = await CreateOrder({ ...data, productId: id })
			if (result === STATUS_CODE.OK) {
				toast.success('Login bem-sucedido!')
			}
		} catch (error: unknown) {
			toast.error('Nome ou Senha do usuário inválido.')
		}
	}

	return (
		<div className="mx-auto w-full max-w-lg">
			<form onSubmit={handleSubmit(handleClient)} noValidate>
				<div className="space-y-6">
					<h2 className="mb-3 text-lg font-semibold text-foreground">
						Informações de Contato e Envio
					</h2>
					<div className="space-y-4">
						<label
							htmlFor="email"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>Nome Completo</span>
							<Input
								data-invalid={errors.name?.message && true}
								type="name"
								{...register('name')}
							/>
							{errors.name?.message && (
								<p className="text-sm text-destructive">{errors.name?.message}</p>
							)}
						</label>
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
							htmlFor="email"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>CPF</span>
							<Input data-invalid={errors.cpf?.message && true} type="text" {...register('cpf')} />
							{errors.cpf?.message && (
								<p className="text-sm text-destructive">{errors.cpf?.message}</p>
							)}
						</label>
						<label
							htmlFor="address"
							className="flex w-full flex-col items-start justify-center gap-2"
						>
							<span>Endereço</span>
							<Input
								data-invalid={errors.address?.message && true}
								type="text"
								{...register('address')}
							/>
							{errors.address?.message && (
								<p className="text-sm text-destructive">{errors.address?.message}</p>
							)}
						</label>
					</div>

					<Button type="submit" disabled={isSubmitting} className="w-full">
						{isSubmitting ? <Loading info="Carregando..." size="sm" /> : <p>Próxima etapa →</p>}
					</Button>
				</div>
			</form>
		</div>
	)
}
