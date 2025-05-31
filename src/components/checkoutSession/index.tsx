'use client'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select' // Descomente se tiver
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { FormEvent, useState } from 'react'
import { ArrowLeft, Apple, Lock, Router } from 'lucide-react' // Exemplo de ícones
import { TListProduct } from '@/validators/product'
import { useRouter } from 'next/navigation'
import { TRegisterClient, ZRegisterClient } from '@/validators/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Loading } from '../loading'
import { toast } from 'sonner'
import instance from '@/services/axios'

export default function CheckoutSession({ product }: { product: TListProduct }) {
	const router = useRouter()
	const stripe = useStripe()
	const elements = useElements()
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
		if (!stripe || !elements) {
			return
		}

		// const resultApi = await instance.
		console.log(elements.getElement('paymentRequestButton'))
		console.log(await elements.submit())
		console.log()
		console.log(elements.getElement('payment'))
		console.log(data)

		const resultStripe = await stripe.confirmPayment({
			elements,
			confirmParams: { return_url: 'http://localhost:3000/confirmation' },
		})

		console.log(resultStripe)

		// if (resultStripe.error) {
		// 	toast.error(resultStripe.error.message as string)
		// } else {
		// 	// router.push('/confirmation')
		// }
	}

	return (
		<div className="flex min-h-screen w-full bg-background">
			<div className="hidden w-1/2 flex-col justify-between border-r border-border bg-muted/50 p-8 lg:flex">
				<div>
					<div className="mb-12 flex items-center text-foreground">
						<Button variant="ghost" size="icon" className="mr-2">
							<ArrowLeft className="h-5 w-5" />
						</Button>
						<span className="text-xl font-semibold">{product.title}</span>
					</div>

					<div className="mb-6 flex flex-col items-start gap-8">
						<div className="flex flex-col items-start justify-center">
							<h1 className="text-3xl font-semibold text-foreground">{product.title}</h1>
							<p className="text-5xl font-bold text-primary">R$ {product.price}</p>
						</div>
						<div className="h-auto w-full max-w-sm self-center overflow-hidden rounded-lg border border-border bg-background">
							<img
								src={product.picture}
								alt={product.title}
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="flex flex-col items-start justify-center gap-2">
							<span className="text-xl">Descrição do produto</span>
							<p className="text-muted-foreground">{product.description}</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center text-xs text-muted-foreground">
					<Lock className="mr-1.5 h-3 w-3" />
					<span>Pagamento seguro via Stripe</span>
				</div>
			</div>

			<div className="w-full overflow-y-auto p-8 sm:p-12 md:p-16 lg:w-1/2 lg:p-20">
				<div className="mx-auto max-w-md">
					<form onSubmit={handleSubmit(handleClient)} noValidate>
						<div className="space-y-6">
							<div>
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
										<Input
											data-invalid={errors.cpf?.message && true}
											type="cpf"
											{...register('cpf')}
										/>
										{errors.cpf?.message && (
											<p className="text-sm text-destructive">{errors.cpf?.message}</p>
										)}
									</label>
									<div>
										<label htmlFor="address" className="block text-sm font-medium text-foreground">
											Endereço
										</label>
										<Input
											type="text"
											id="address"
											name="address"
											placeholder="Endereço completo"
											className="mt-1 bg-input"
											required
										/>
									</div>
								</div>
							</div>

							<div>
								<h2 className="mb-3 text-lg font-semibold text-foreground">Método de Pagamento</h2>
								<PaymentElement id="payment-element" />
							</div>
							<Button type="submit" disabled={isSubmitting} className="w-full">
								{isSubmitting ? (
									<Loading info="Carregando..." size="sm" />
								) : (
									<p>
										Finalizar compra <strong>R${product.price}</strong>
									</p>
								)}
							</Button>
						</div>
					</form>

					{/* <div className="mt-6 text-center text-xs text-muted-foreground">
						<span>Powered by </span>
						<a
							href="https://stripe.com"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold text-primary hover:underline"
						>
							Stripe
						</a>
						<span className="mx-1">|</span>
						<a href="#" className="hover:underline">
							Terms
						</a>
						<span className="mx-1">|</span>
						<a href="#" className="hover:underline">
							Privacy
						</a>
					</div> */}
				</div>
			</div>
		</div>
	)
}
