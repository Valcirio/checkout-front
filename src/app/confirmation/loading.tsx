'use client'

import { Loading } from '@/components/loading'

export default function ConfirmationLoading() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-4 text-foreground">
			<Loading size="lg" />
			<p className="text-lg text-muted-foreground">Verificando status do pagamento...</p>
		</div>
	)
}
