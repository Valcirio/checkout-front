'use client'

import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import * as Filter from '../../../components/filters'
import { TListProduct } from '@/validators/product'
import { Ellipsis, Eye, Plus, Trash2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { EProductSelect } from '@/types/table'
import { SelectItem } from '@/components/ui/select'
import DeleteDialog from '../dialog'
import Link from 'next/link'

type TTableProductProps = {
	data: TListProduct[]
	filters: { page: { number: number; hasNext: boolean }; ordination: string; desc: boolean }
}

export default function TableProducts({ data, filters }: TTableProductProps) {
	const router = useRouter()
	const path = usePathname()
	const [dialogOpen, setDialogOpen] = useState<boolean>(false)
	const [currentId, setCurrentId] = useState<string>('')

	function handleDeleteClick(e: React.MouseEvent<HTMLDivElement>) {
		setCurrentId(e.currentTarget.id)
		setDialogOpen(true)
	}

	function handleViewClick(e: React.MouseEvent<HTMLDivElement>) {
		router.push(`${path}/${e.currentTarget.id}`)
	}

	return (
		<>
			<DeleteDialog open={dialogOpen} id={currentId} setOpen={setDialogOpen} />
			<Table className="h-full max-h-60">
				<TableCaption>Listagem de produtos.</TableCaption>
				<TableCaption>
					<Filter.Pagination hasNext={filters.page.hasNext} pageNumber={filters.page.number} />
				</TableCaption>
				<TableHeader>
					<TableRow className="w-full">
						<TableHead>
							<Button asChild size="sm">
								<Link href={`${path}/create`}>
									novo <Plus />
								</Link>
							</Button>
						</TableHead>
						<TableHead>
							<Filter.Select order={filters.ordination}>
								<SelectItem value={EProductSelect.ALPHABETICAL}>Nome do produto</SelectItem>
								<SelectItem value={EProductSelect.PRICE}>Valor do produto</SelectItem>
								<SelectItem value={EProductSelect.QTD}>Quantidade no estoque</SelectItem>
							</Filter.Select>
						</TableHead>
						<TableHead>
							<Filter.Sorting isDown={filters.desc} />
						</TableHead>
					</TableRow>
					<TableRow>
						<TableHead className="w-24">Imagem</TableHead>
						<TableHead>Título</TableHead>
						<TableHead>Preço</TableHead>
						<TableHead className="text-center">Quantidade</TableHead>
						<TableHead className="text-center">Ações</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map(({ title, price, picture, quantity, id: reqId }, id) => (
						<TableRow key={id}>
							<TableCell className="font-medium">
								<img
									src={picture}
									alt={title}
									className="h-18 w-18 rounded-sm border border-border object-cover"
								/>
							</TableCell>
							<TableCell className="font-medium">{title}</TableCell>
							<TableCell align="left">R$ {price}</TableCell>
							<TableCell align="center">{quantity}</TableCell>
							<TableCell align="center">
								<div className="flex justify-center">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="icon">
												<Ellipsis />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent className="w-40" align="start">
											<DropdownMenuLabel>{title}</DropdownMenuLabel>
											<DropdownMenuItem id={reqId} title="visualizar" onClick={handleViewClick}>
												Visualizar
												<DropdownMenuShortcut>
													<Button size="icon" variant="tertiary">
														<Eye />
													</Button>
												</DropdownMenuShortcut>
											</DropdownMenuItem>
											<DropdownMenuItem id={reqId} title="apagar" onClick={handleDeleteClick}>
												Apagar
												<DropdownMenuShortcut>
													<Button size="icon" variant="destructive">
														<Trash2 />
													</Button>
												</DropdownMenuShortcut>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}
