'use client'
import { MoveDown, MoveUp } from 'lucide-react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const SortingComponent = ({ isDown }: { isDown: boolean }) => {
	const router = useRouter()
	const pathname = usePathname()
	const previousParams = useSearchParams()

	function HandleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		const params = new URLSearchParams(previousParams)
		params.set('desc', (!isDown).toString())

		router.replace(`${pathname}?${params.toString()}`)
	}

	return (
		<button
			onClick={(e) => {
				HandleClick(e)
			}}
		>
			{isDown ? <MoveUp /> : <MoveDown />}
		</button>
	)
}
