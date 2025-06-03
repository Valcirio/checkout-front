import { cn } from '@/lib/utils'
import { TRecoruses } from '@/types/header'
import React from 'react'

export function ContainerLink<T>({ recourses }: { recourses: TRecoruses<T>[] }) {
	return recourses.map(({ item, handleClick, url, short: Short }, id) => {
		return (
			<div
				onClick={
					typeof handleClick === 'function'
						? url
							? () => handleClick(url)
							: () => handleClick()
						: undefined
				}
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
