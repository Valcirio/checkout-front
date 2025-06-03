'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import React from 'react'

export const SelectComponent = ({
	order,
	children,
}: {
	order: string
	children: React.ReactElement[]
}) => {
	const router = useRouter()
	const pathname = usePathname()
	const previousParams = useSearchParams()

	function HandleClick(event: string) {
		const params = new URLSearchParams(previousParams)
		params.set('ordination', event)

		router.replace(`${pathname}?${params.toString()}`)
	}

	return (
		<Select
			onValueChange={(e) => {
				HandleClick(e)
			}}
			defaultValue={order}
		>
			<SelectTrigger className="w-full max-w-xs">
				<SelectValue placeholder="Selecione uma ordenação" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Ordernar por</SelectLabel>
					{children}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
