import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React from 'react'
import { TRecoruses } from '@/types/header'
import { Button } from '@/components/ui/button'

type TDropdownProps<T> = { children: React.ReactElement; resources: TRecoruses<T>[] }

export function DropdownLinks<T>({ children, resources }: TDropdownProps<T>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className="hidden w-40 sm:block" align="start">
				<DropdownMenuLabel>Recursos</DropdownMenuLabel>
				{resources.map(({ title, short: Short, item, handleClick, url }, id) => {
					return (
						<DropdownMenuItem
							key={id}
							title={title}
							className={item.color}
							onClick={
								typeof handleClick === 'function'
									? url
										? () => handleClick(url)
										: () => handleClick()
									: undefined
							}
						>
							{item.content}
							<DropdownMenuShortcut>
								<Button variant="ghost" size="icon" className={item.color}>
									<Short />
								</Button>
							</DropdownMenuShortcut>
						</DropdownMenuItem>
					)
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
