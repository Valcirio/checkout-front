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
import { TRegisterProduct } from '@/validators/product'

type TTableProps = { data: TRegisterProduct[] }

export default function TableProducts({ data }: TTableProps) {
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
				{data.map(({ title, description, price, picture, quantity }, id) => (
					<TableRow key={id}>
						<TableCell className="font-medium">
							<img
								src={picture}
								alt={title}
								className="h-18 w-18 rounded-sm border border-border object-cover"
							/>
						</TableCell>
						<TableCell className="font-medium">{title}</TableCell>
						<TableCell>{description}</TableCell>
						<TableCell>{quantity}</TableCell>
						<TableCell className="text-right">{price}</TableCell>
						<TableCell className="text-right">{description}</TableCell>
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
