import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import React from 'react'
export function TooltipFather({
	children,
	description,
}: {
	children: React.ReactElement
	description: string
}) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent>
				<p>{description}</p>
			</TooltipContent>
		</Tooltip>
	)
}
