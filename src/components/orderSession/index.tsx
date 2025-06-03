'use client'
import { TRequestOrderSession } from '@/validators/order'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'
import { utcToDateTime } from '@/utils/utcToDate'
import { StripeStatus } from '@/utils/statusTableOrder'
import { Separator } from '../ui/separator'

export default function OrderSession({
	data: { client, product, ...props },
}: {
	data: TRequestOrderSession
}) {
	return (
		<section className="flex w-full flex-col items-center justify-start gap-6 px-4 pt-24">
			<Card className="flex w-full max-w-2xl flex-row overflow-hidden rounded-2xl bg-gradient-to-t from-primary/10 to-background/10 shadow-xl">
				<CardHeader className="p-4">
					<img
						src={product.picture}
						alt={product.title}
						className="boder-input h-auto w-full max-w-36 rounded-md border object-cover sm:max-w-60"
					/>
				</CardHeader>
				<CardContent className="flex flex-grow flex-row p-2 sm:p-5">
					<div>
						<CardTitle className="text-xl font-semibold text-foreground sm:text-3xl">
							{product.title}
						</CardTitle>
						<p className="text-lg font-bold text-primary sm:text-2xl">R${product.price}</p>

						<Link
							className="mt-2 flex items-center gap-1 self-start text-sm font-medium text-primary sm:text-xl"
							href={`/admin/products/${props.productId}`}
						>
							ver produto <SquareArrowOutUpRight className="h-4 w-4 sm:h-6 sm:w-6" />
						</Link>
					</div>
				</CardContent>
			</Card>
			<Card className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl shadow-xl">
				<CardHeader className="relative flex flex-row justify-between p-4">
					<CardTitle className="text-xl font-semibold text-foreground sm:text-3xl">
						Comprador
					</CardTitle>
					<CardTitle>{StripeStatus(props.status, 'text-lg')}</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-grow flex-col gap-6 p-5">
					<div>
						<label>
							<span className="text-base sm:text-xl">{client.name}</span>
							<CardDescription className="text-sm sm:text-lg">{client.email}</CardDescription>
						</label>
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<p className="text-base font-bold text-primary sm:text-2xl">Valor: R${product.price}</p>
						<label>
							<span className="text-sm sm:text-lg">Data da Compra:</span>
							<CardDescription className="text-sm sm:text-lg">
								{utcToDateTime(props.createdAt).replace(',', ' as')}
							</CardDescription>
						</label>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
