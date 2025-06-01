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
					<TableHead className="text-right">Valor</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map(({ client, price, product, status }, id) => (
					<TableRow key={id}>
						<TableCell className="font-medium">{client}</TableCell>
						<TableCell>{status}</TableCell>
						<TableCell>{product}</TableCell>
						<TableCell className="text-right">{price}</TableCell>
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
