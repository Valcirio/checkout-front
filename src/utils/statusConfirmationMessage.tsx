import { Button } from '@/components/ui/button'
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type TStatusProps = {
	icon: React.ReactElement
	title: string
	description: string
	cta?: React.ReactElement
}

export default function statusConfirmationMessage(status: string) {
	const statusMessages: Record<string, TStatusProps> = {
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
			// cta: (
			// 	<Button asChild variant="outline">
			// 		<Link href="/checkout">Tentar Novamente</Link>
			// 	</Button>
			// ),
		},
		requires_action: {
			icon: <AlertTriangle className="h-16 w-16 text-chart-4" />,
			title: 'Ação Necessária',
			description:
				'Seu pagamento requer uma etapa adicional de autenticação. Por favor, siga as instruções do seu banco para concluir a transação.',
			// cta: <Button onClick={() => router.back()}>Verificar Autenticação</Button>,
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

	return status && statusMessages[status] ? statusMessages[status] : statusMessages.default
}
