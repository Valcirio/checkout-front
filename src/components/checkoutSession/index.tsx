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
	const [stripeErrorMsg, setStripeErrorMsg] = useState<string | null>('')

	const handleClient = async (data: TRegisterClient) => {
		if (!stripe || !elements) {
			return
		}

		const result = await stripe.confirmPayment({
			elements,
			confirmParams: { return_url: 'http://localhost:3000/confirmation' },
		})

		if (result.error) {
			setStripeErrorMsg(result.error.message as string)
		} else {
			setStripeErrorMsg(null)
			router.push('/confirmation')
		}
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

					<div className="mb-6 flex items-center">
						<div className="mr-4 h-24 w-24 overflow-hidden rounded-lg border border-border bg-slate-200">
							<img
								src={product.picture}
								alt={product.title}
								className="h-full w-full object-cover"
							/>
						</div>
						<div>
							<h1 className="text-2xl font-semibold text-foreground">{product.title}</h1>
							<p className="mt-1 text-3xl font-bold text-primary">${product.price}</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center text-xs text-muted-foreground">
					<Lock className="mr-1.5 h-3 w-3" />
					<span>Pagamento seguro via Stripe</span>
				</div>
			</div>

			{/* Coluna Direita - Formulário de Pagamento */}
			<div className="w-full overflow-y-auto p-8 sm:p-12 md:p-16 lg:w-1/2 lg:p-20">
				<div className="mx-auto max-w-md">
					<Button
						variant="default"
						className="mb-4 flex w-full items-center justify-center bg-black py-3 text-lg text-white hover:bg-gray-800"
					>
						<Apple className="mr-2 h-6 w-6 fill-white" /> Pay
					</Button>

					<div className="relative mb-6 text-center">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t border-border"></span>
						</div>
						<span className="relative bg-background px-2 text-sm text-muted-foreground">
							Ou pague de outra forma
						</span>
					</div>

					<form onSubmit={handleSubmit(handleClient)}>
						<div className="space-y-6">
							<div>
								<h2 className="mb-3 text-lg font-semibold text-foreground">
									Informações de Contato e Envio
								</h2>
								<div className="space-y-4">
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-foreground">
											Email
										</label>
										<Input
											type="email"
											id="email"
											name="email"
											placeholder="seu@email.com"
											className="mt-1 bg-input"
											required
										/>
									</div>
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-foreground">
											Nome Completo
										</label>
										<Input
											type="text"
											id="name"
											name="name"
											placeholder="Nome Completo"
											className="mt-1 bg-input"
											required
										/>
									</div>
									<div>
										<label htmlFor="cpf" className="block text-sm font-medium text-foreground">
											CPF
										</label>
										<Input
											type="text"
											id="cpf"
											name="cpf"
											placeholder="000.000.000-00"
											className="mt-1 bg-input"
											required
										/>
									</div>
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
								<div className="rounded-md border border-border bg-input/50 p-4">
									<PaymentElement id="payment-element" />
								</div>
							</div>

							{stripeErrorMsg && <div className="text-sm text-destructive">{stripeErrorMsg}</div>}

							<Button type="submit" disabled={isSubmitting} className="w-full">
								{isSubmitting ? <Loading info="Carregando..." size="sm" /> : 'Cadastrar'}
							</Button>
						</div>
					</form>

					<div className="mt-6 text-center text-xs text-muted-foreground">
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
					</div>
				</div>
			</div>
		</div>
	)
}
