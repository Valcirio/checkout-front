import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { TRecorusesAdmin } from '@/types/header'
import React from 'react'

export const ContainerLink = ({ recourses }: { recourses: TRecorusesAdmin[] }) => {
	return recourses.map(({ item, handleClick, short: Short }, id) => {
		return (
			<div
				onClick={handleClick}
				key={id}
				className={cn(
					'flex h-10 w-full items-center justify-between rounded-md px-2 text-base transition-colors',
					item.color
				)}
			>
				{item.content}
				<Short />
			</div>
		)
	})
}
