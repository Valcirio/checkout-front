'use client'
import { MoveRight, MoveLeft } from 'lucide-react'

import { ESelect, type paginationProps } from '@/types/table'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export const SelectComponent = ({ hasNext, hasPrev, pageNumber }: paginationProps) => {
	const router = useRouter()
	const pathname = usePathname()
	const previousParams = useSearchParams()

	function HandleClick(event: string) {
		const params = new URLSearchParams(previousParams)

		console.log(event)
		// router.replace(`${pathname}?${params.toString()}`)
	}

	return (
		<Select
			onValueChange={(e) => {
				HandleClick(e)
			}}
			defaultValue={ESelect.DATE}
		>
			<SelectTrigger className="w-full max-w-xs">
				<SelectValue placeholder="Selecione uma ordenação" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Ordernar por</SelectLabel>
					<SelectItem value={ESelect.ALPHABETICAL}>Nome do cliente</SelectItem>
					<SelectItem value={ESelect.PRICE}>Valor do pedido</SelectItem>
					<SelectItem value={ESelect.DATE}>Data do pedido</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
