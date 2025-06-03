'use client'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import * as Filter from '../../../components/filters'

import { TRequestOrder } from '@/validators/order'
import { StripeStatus } from '@/utils/statusTableOrder'
import { TooltipProvider } from '@/components/ui/tooltip'
import { EOrderSelect } from '@/types/table'
import { SelectItem } from '@/components/ui/select'
import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { utcToDate } from '@/utils/utcToDate'

type TTableOrderProps = {
	data: TRequestOrder[]
	filters: { page: { number: number; hasNext: boolean }; ordination: string; desc: boolean }
}

export default function TableOrder({ data, filters }: TTableOrderProps) {
	const router = useRouter()
	const path = usePathname()

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()

		router.push(`${path}/${e.currentTarget.id}`)
	}

	return (
		<Table className="h-full max-h-60">
			<TableCaption>
				<Filter.Pagination hasNext={filters.page.hasNext} pageNumber={filters.page.number} />
			</TableCaption>
			<TableHeader>
				<TableRow className="w-full">
					<TableHead>
						<Filter.Select order={filters.ordination}>
							<SelectItem value={EOrderSelect.ALPHABETICAL}>Nome do cliente</SelectItem>
							<SelectItem value={EOrderSelect.PRICE}>Valor do pedido</SelectItem>
							<SelectItem value={EOrderSelect.DATE}>Data do pedido</SelectItem>
						</Filter.Select>
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
				{data.map(({ client, product, status, createdAt, id: reqId }, id) => {
					return (
						<TableRow key={id}>
							<TableCell className="font-medium">{client.name}</TableCell>
							<TableCell className="text-right">
								<TooltipProvider>{StripeStatus(status, 'text-sm')}</TooltipProvider>
							</TableCell>
							<TableCell>{utcToDate(createdAt)}</TableCell>
							<TableCell>
								<div className="flex flex-col items-start justify-center">
									<a>{product.title}</a>
									<a>{product.price}</a>
								</div>
							</TableCell>
							<TableCell>
								<Button id={reqId} onClick={handleClick} size="icon" variant="tertiary">
									<Eye />
								</Button>
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}
