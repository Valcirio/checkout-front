'use client'
import { MoveRight, MoveLeft } from 'lucide-react'

import { type TPaginationProps } from '@/types/table'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const PaginationComponent = ({ hasNext, hasPrev, pageNumber }: TPaginationProps) => {
	const router = useRouter()
	const pathname = usePathname()
	const previousParams = useSearchParams()

	function HandleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const params = new URLSearchParams(previousParams)
		const search = event.currentTarget.value

		if (search) {
			// setLead(null)
			if (search === 'next') {
				params.set('page', (pageNumber + 1).toString())
			} else {
				params.set('page', (pageNumber - 1).toString())
			}
		}
		router.replace(`${pathname}?${params.toString()}`)
	}

	return (
		<section className="flex w-full flex-row items-center justify-center gap-4">
			<button
				value="prev"
				disabled={!hasPrev}
				onClick={(el) => {
					HandleClick(el)
				}}
				className="text-small flex flex-row items-center justify-center gap-1 text-foreground disabled:text-foreground/55"
			>
				<MoveLeft />
				Anterior
			</button>

			<button
				value="next"
				disabled={!hasNext}
				onClick={(el) => {
					HandleClick(el)
				}}
				className="text-small flex flex-row items-center justify-center gap-1 text-foreground disabled:text-foreground/55"
			>
				Próximo
				<MoveRight />
			</button>
		</section>
	)
}
