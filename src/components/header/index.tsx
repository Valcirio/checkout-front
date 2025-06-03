'use client'
import { Ellipsis, LogOut, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from '../themeSwitcher'
import * as Links from './components/links'
import { Button } from '../ui/button'
import { TRecorusesAdmin } from '@/types/header'
import SideBar from './components/sheet'
import { ContainerLink } from './components/containerLink'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

export const Header = () => {
	const path = usePathname()
	const { user, SignOut } = useContext(AuthContext)

	const RESOURCES_ADMIN: TRecorusesAdmin[] = [
		{
			title: 'Sair da Conta',
			item: { content: 'Sair', color: 'text-destructive hover:bg-destructive/15' },
			short: LogOut,
			handleClick: SignOut,
		},
	]
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-14 w-full items-center justify-between">
				<Link href="/" className="flex items-center space-x-2 pl-6">
					<ShoppingCart className="h-6 w-6 text-primary" />
					<span className="text-lg font-bold sm:inline-block">MeuEcommerce</span>
				</Link>
				<nav className="ml-auto hidden items-center gap-4 text-sm sm:flex lg:gap-6">
					{path === '/' ? <Links.Landing /> : null}
					{path.startsWith('/admin') ? <Links.Admin /> : null}
					{user && (
						<Links.Dropdown resources={RESOURCES_ADMIN}>
							<Button variant="ghost" size="icon">
								<Ellipsis />
							</Button>
						</Links.Dropdown>
					)}
					{!path.startsWith('/admin') && <Links.Products />}
				</nav>
				<SideBar>
					<>
						{path === '/' ? <Links.Landing /> : null}
						{path.startsWith('/admin') ? <Links.Admin /> : null}
						<ContainerLink recourses={RESOURCES_ADMIN} />
						{!path.startsWith('/admin') && <Links.Products />}
					</>
				</SideBar>
				<ThemeSwitcher />
			</div>
		</header>
	)
}
