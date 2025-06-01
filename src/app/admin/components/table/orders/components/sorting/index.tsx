'use client'
import { MoveDown, MoveUp } from 'lucide-react'

import { type TSortingProps } from '@/types/table'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const SortingComponent = ({ isUp }: TSortingProps) => {
	const router = useRouter()
	const pathname = usePathname()
	const previousParams = useSearchParams()

	function HandleClick(event: React.MouseEvent<HTMLSelectElement, MouseEvent>) {
		const params = new URLSearchParams(previousParams)
		const search = event.currentTarget.value

		if (search) {
			if (search === 'next') {
				params.set('page', (pageNumber + 1).toString())
			} else {
				params.set('page', (pageNumber - 1).toString())
			}
		}
		router.replace(`${pathname}?${params.toString()}`)
	}

	return <Button variant="ghost">{isUp ? <MoveUp /> : <MoveDown />}</Button>
}
