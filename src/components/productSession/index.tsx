'use client'

import { TListProduct } from '@/validators/product'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function ProductSession({ data }: { data: TListProduct[] }) {
	const router = useRouter()
	return (
		<section className="grid h-full grid-cols-1 gap-6 bg-background p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{data.map(({ id, title, description, price, picture }, index) => {
				return (
					<Card
						key={index}
						className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-transparent shadow-xl"
					>
						<CardHeader className="relative p-0">
							<img src={picture} alt={title} className="h-auto w-full object-cover" />
						</CardHeader>
						<CardContent className="flex flex-grow flex-col bg-gradient-to-t from-primary/10 to-background/10 p-5">
							<div className="flex-grow">
								<CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
								<p className="mt-1 h-10 text-sm text-foreground">{description}</p>
								<p className="mt-3 text-2xl font-bold text-primary">R${price}</p>
							</div>
							<div className="mt-4">
								<Button
									variant="default"
									className="w-full rounded-xl bg-primary px-6 py-3 font-semibold"
									onClick={() => {
										router.push(`/buy/${id}`)
									}}
								>
									Comprar Agora
								</Button>
							</div>
						</CardContent>
					</Card>
				)
			})}
		</section>
	)
}
