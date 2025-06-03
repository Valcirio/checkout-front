import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { TableOfContents } from 'lucide-react'
import React from 'react'

export default function SideBar({ children }: { children: React.ReactElement }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="ml-auto flex sm:hidden" variant="ghost" size="icon">
					<TableOfContents className="h-12 w-12" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Opções de Usuário</SheetTitle>
				</SheetHeader>
				<div className="mt-6 grid flex-1 auto-rows-min gap-6 px-4">{children}</div>
			</SheetContent>
		</Sheet>
	)
}
