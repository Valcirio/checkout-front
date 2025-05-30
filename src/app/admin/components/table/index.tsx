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
import { TRegisterOrder } from '@/validators/order'

type TTableProps = { data: TRegisterOrder[] }

export default function TableOrder({ data }: TTableProps) {
	return (
		<Table>
			<TableCaption>Listagem de pedidos.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Comprador</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Método</TableHead>
					<TableHead className="text-right">Preço</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((el, id) => (
					<TableRow key={id}>
						<TableCell className="font-medium">{el.client}</TableCell>
						<TableCell>{el.status}</TableCell>
						<TableCell>{el.product}</TableCell>
						<TableCell className="text-right">{el.price}</TableCell>
					</TableRow>
				))}
			</TableBody>
			{/* <TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter> */}
		</Table>
	)
}
