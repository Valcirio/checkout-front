'use client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'

type TCheckoutProvider = { secret: string; children: React.ReactElement }

export default function StripeProvider({ secret, children }: TCheckoutProvider) {
	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)
	const options: StripeElementsOptions = {
		loader: 'always',
		locale: 'pt-BR',
		appearance: {
			theme: 'stripe',
			labels: 'above',
			variables: {
				colorPrimary: 'hsl(142.1 76.2% 36.3%)',
				colorDanger: 'hsl(0 84.2% 60.2%)',
				colorText: 'hsl(240 3.7% 15.9%) .dark:hsl(355.7 100% 97.3%)',
				colorTextSecondary: 'hsl(240 5.9% 10%) .dark:hsl(0 0% 98%)',
				colorBackground: 'hsl(0 0% 100%) .dark:hsl(240 3.7% 15.9%)',
			},
			rules: {
				'.Input--invalid': {
					boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)',
				},
				'.Input:focus': { color: 'var(--colorPrimary)' },
			},
		},
		clientSecret: secret,
	}
	return (
		<Elements stripe={stripePromise} options={options}>
			{children}
		</Elements>
	)
}
