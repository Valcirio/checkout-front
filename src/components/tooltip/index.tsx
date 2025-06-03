import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
export function TooltipFather({
	children,
	description,
}: {
	children: React.ReactElement
	description: string
}) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{description}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
