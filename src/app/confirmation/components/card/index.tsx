'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link'
import statusConfirmationMessage from '@/utils/statusConfirmationMessage'

export default function ConfirmationCard({ status }: { status: string }) {
	const currentStatus = statusConfirmationMessage(status)
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
