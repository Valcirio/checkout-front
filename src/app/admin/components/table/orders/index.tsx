'use client'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import * as Filter from './components/filters'

import { TRequestOrder } from '@/validators/order'
import { StripeStatus } from '@/components/status'
import { TooltipProvider } from '@/components/ui/tooltip'

type TTableOrderProps = {
	data: TRequestOrder[]
	filters: { page: { number: number; hasNext: boolean }; ordination: string; desc: boolean }
}

export default function TableOrder({ data, filters }: TTableOrderProps) {
	return (
		<Table className="h-full max-h-60">
			<TableCaption>
				<Filter.Pagination hasNext={filters.page.hasNext} pageNumber={filters.page.number} />
			</TableCaption>
			<TableHeader>
				<TableRow className="w-full">
					<TableHead>
						<Filter.Select order={filters.ordination} />
					</TableHead>
					<TableHead>
						<Filter.Sorting isDown={filters.desc} />
					</TableHead>
				</TableRow>
				<TableRow>
					<TableHead className="w-60">Comprador</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Data da Compra</TableHead>
					<TableHead>Produto</TableHead>
					<TableHead className="text-right">Ações</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.length === 0 && (
					<TableRow>
						<TableCell align="center" className="h-full w-full py-10 text-center" colSpan={5}>
							<p className="h-full w-full">Ainda não há registro de pedidos.</p>
						</TableCell>
					</TableRow>
				)}
				{data.map(({ client, product, status, createdAt }, id) => {
					const date = new Date(createdAt)
					const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
					return (
						<TableRow key={id}>
							<TableCell className="font-medium">{client.name}</TableCell>
							<TableCell className="text-right">
								<TooltipProvider>{StripeStatus(status)}</TooltipProvider>
							</TableCell>
							<TableCell>{formattedDate}</TableCell>
							<TableCell>
								<div className="flex flex-col items-start justify-center">
									<a>{product.title}</a>
									<a>{product.price}</a>
								</div>
							</TableCell>
							<TableCell>Ola</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}
