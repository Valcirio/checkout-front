'use client'

import { Button } from '@/components/ui/button'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select' // Descomente se tiver
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { Loading } from '@/components/loading'
import { TListProduct } from '@/validators/product'
import { deleteCookie } from 'cookies-next/client'
import { useRouter } from 'next/navigation'

export default function PaymentForm({ product }: { product: TListProduct }) {
	const router = useRouter()
	const stripe = useStripe()
	const elements = useElements()
	const [isLoading, setIsLoading] = useState(false)

	const handleClient = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!stripe || !elements) {
			return
		}

		setIsLoading(true)
		const stripeResult = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
			confirmParams: { return_url: 'http://localhost:3000/confirmation' },
		})

		if (!stripeResult.error) {
			deleteCookie('stripe-secret')
			router.push(`/confirmation?redirect_status=${stripeResult.paymentIntent?.status}`)
		}
		setIsLoading(false)
	}

	return (
		<section className="mx-auto w-full max-w-lg">
			<form onSubmit={handleClient} noValidate>
				<div className="space-y-6">
					<h2 className="mb-3 text-lg font-semibold text-foreground">Método de Pagamento</h2>
					<PaymentElement id="payment-element" />
					<Button type="submit" disabled={isLoading} className="w-full">
						{isLoading ? (
							<Loading info="Carregando..." size="sm" />
						) : (
							<p>
								Finalizar compra <strong>R${product.price}</strong>
							</p>
						)}
					</Button>
				</div>
			</form>
		</section>
	)
}
