import { CreditCard, DollarSign, RefreshCw, ShieldAlert, X } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { TooltipFather } from '../tooltip'
import { TooltipProvider } from '../ui/tooltip'

type Status =
	| 'canceled'
	| 'processing'
	| 'requires_action'
	| 'requires_capture'
	| 'requires_confirmation'
	| 'requires_payment_method'
	| 'succeeded'

export const StripeStatus = (status: string) => {
	const StripeStatusLiterals: Record<string, React.ReactElement> = {
		canceled: (
			<a className="text-tertiary flex flex-row items-center justify-center gap-1 text-sm">
				Cancelado <X />
			</a>
		),
		processing: (
			<a className="text-tertiary flex flex-row items-center justify-center gap-1 text-sm">
				Processando <RefreshCw />
			</a>
		),
		requires_payment_method: (
			<TooltipFather description="Método de pagamento">
				<a className="text-tertiary flex flex-row items-center justify-center gap-1 text-sm">
					Processando
					<CreditCard />
				</a>
			</TooltipFather>
		),
		succeeded: (
			<a className="flex flex-row items-center justify-center gap-1 text-sm text-primary">
				Processado <DollarSign />
			</a>
		),
	}

	return status ? (
		StripeStatusLiterals[status]
	) : (
		<TooltipFather description="Ação do Banco ou Cliente">
			<a className="text-tertiary flex flex-row items-center justify-center gap-1 text-sm">
				Aguardando <ShieldAlert />
			</a>
		</TooltipFather>
	)
}
