import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React from 'react'
import { TRecorusesAdmin } from '@/types/header'
import { Button } from '@/components/ui/button'

type TDropdownProps = { children: React.ReactElement; resources: TRecorusesAdmin[] }

export const DropdownLinks = ({ children, resources }: TDropdownProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className="hidden w-40 sm:block" align="start">
				<DropdownMenuLabel>Recursos</DropdownMenuLabel>
				{resources.map(({ title, short: Short, item, handleClick }, id) => {
					return (
						<DropdownMenuItem key={id} title={title} className={item.color}>
							{item.content}
							<DropdownMenuShortcut>
								<Button onClick={handleClick} variant="ghost" size="icon" className={item.color}>
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
