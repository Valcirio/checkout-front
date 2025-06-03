import { CreditCard, DollarSign, RefreshCw, ShieldAlert, X } from 'lucide-react'
import React from 'react'
import { TooltipFather } from '@/components/tooltip'
import { cn } from '@/lib/utils'

// type Status =
// 	| 'canceled'
// 	| 'processing'
// 	| 'requires_action'
// 	| 'requires_capture'
// 	| 'requires_confirmation'
// 	| 'requires_payment_method'
// 	| 'succeeded'

export const StripeStatus = (status: string, size: string) => {
	const StripeStatusLiterals: Record<string, React.ReactElement> = {
		canceled: (
			<a className={cn('flex flex-row items-center justify-center gap-1 text-tertiary', size)}>
				Cancelado <X />
			</a>
		),
		processing: (
			<a className={cn('flex flex-row items-center justify-center gap-1 text-tertiary', size)}>
				Processando <RefreshCw />
			</a>
		),
		requires_payment_method: (
			<TooltipFather description="Método de pagamento">
				<a className={cn('flex flex-row items-center justify-center gap-1 text-tertiary', size)}>
					Processando
					<CreditCard />
				</a>
			</TooltipFather>
		),
		succeeded: (
			<a className={cn('flex flex-row items-center justify-center gap-1 text-primary', size)}>
				Processado <DollarSign />
			</a>
		),
	}

	return status ? (
		StripeStatusLiterals[status]
	) : (
		<TooltipFather description="Ação do Banco ou Cliente">
			<a className={cn('flex flex-row items-center justify-center gap-1 text-tertiary', size)}>
				Aguardando <ShieldAlert />
			</a>
		</TooltipFather>
	)
}
