'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { Loading } from '@/components/loading'

export default function ConfirmationPage() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [status, setStatus] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const redirectStatus = searchParams.get('redirect_status')
		setTimeout(() => {
			setStatus(redirectStatus)
			setIsLoading(false)
		}, 1500)
	}, [searchParams])

	const statusMessages = {
		succeeded: {
			icon: <CheckCircle2 className="h-16 w-16 text-green-500" />,
			title: 'Pagamento Aprovado!',
			description:
				'Seu pedido foi processado com sucesso. Em breve você receberá um email de confirmação com os detalhes.',
			cta: (
				<Button asChild>
					<Link href="/">Voltar à Loja</Link>
				</Button>
			),
		},
		failed: {
			icon: <XCircle className="h-16 w-16 text-destructive" />,
			title: 'Falha no Pagamento',
			description:
				'Houve um problema ao processar seu pagamento. Por favor, verifique os dados fornecidos ou tente novamente com outro método de pagamento.',
			cta: (
				<Button asChild variant="outline">
					<Link href="/checkout">Tentar Novamente</Link>
				</Button>
			), // Supondo que /checkout seja a sua página de pagamento
		},
		requires_action: {
			icon: <AlertTriangle className="h-16 w-16 text-chart-4" />,
			title: 'Ação Necessária',
			description:
				'Seu pagamento requer uma etapa adicional de autenticação. Por favor, siga as instruções do seu banco para concluir a transação.',
			cta: <Button onClick={() => router.back()}>Verificar Autenticação</Button>,
		},
		default: {
			icon: <AlertTriangle className="h-16 w-16 text-muted-foreground" />,
			title: 'Status Desconhecido',
			description:
				'Não foi possível determinar o status do seu pagamento. Entre em contato com o suporte se o problema persistir.',
			cta: (
				<Button asChild>
					<Link href="/">Voltar à Loja</Link>
				</Button>
			),
		},
	}

	const currentStatus =
		status && statusMessages[status as keyof typeof statusMessages]
			? statusMessages[status as keyof typeof statusMessages]
			: statusMessages.default

	if (isLoading) {
		return (
			<div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-4 text-foreground">
				<Loading size="lg" />
				<p className="text-lg text-muted-foreground">Verificando status do pagamento...</p>
			</div>
		)
	}

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
			<Card className="w-full max-w-md shadow-xl">
				<CardHeader className="items-center text-center">
					{currentStatus.icon}
					<CardTitle className="mt-4 text-2xl md:text-3xl">{currentStatus.title}</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6 text-center">
					<CardDescription className="text-base text-muted-foreground md:text-lg">
						{currentStatus.description}
					</CardDescription>
					{currentStatus.cta}
				</CardContent>
			</Card>
			<p className="mt-8 text-xs text-muted-foreground">
				Se você tiver alguma dúvida, entre em contato com nosso{' '}
				<Link href="/support" className="underline hover:text-primary">
					suporte ao cliente
				</Link>
				.
			</p>
		</div>
	)
}
