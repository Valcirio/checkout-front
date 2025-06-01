'use client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { useTheme } from 'next-themes'

type TCheckoutProvider = { secret: string | undefined; children: React.ReactElement }

export default function StripeProvider({ secret, children }: TCheckoutProvider) {
	const { theme } = useTheme()
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
				iconColor: theme === 'dark' ? 'hsl(355.7 100% 97.3%)' : 'hsl(240 3.7% 15.9%)',
				colorText: theme === 'dark' ? 'hsl(355.7 100% 97.3%)' : 'hsl(240 3.7% 15.9%)',
				colorTextPlaceholder: theme === 'dark' ? 'hsl(240 5% 64.9%)' : 'hsl(240 3.8% 46.1%)',
				colorTextSecondary: theme === 'dark' ? 'hsl(240 5.9% 10%)' : 'hsl(0 0% 98%)',
				colorBackground: theme === 'dark' ? 'hsl(240 3.7% 15.9%)' : 'hsl(0 0% 100%)',
			},
			rules: {
				'.Input': {},
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
