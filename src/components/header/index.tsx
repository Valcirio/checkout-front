'use client'
import { Ellipsis, FilePen, LogIn, LogOut, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeSwitcher } from '../themeSwitcher'
import * as Links from './components/links'
import { Button } from '../ui/button'
import { TEmptyParams, TRecoruses, TRouteParams } from '@/types/header'
import SideBar from './components/sheet'
import { ContainerLink } from './components/containerLink'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

export const Header = () => {
	const path = usePathname()
	const { push } = useRouter()
	const { user, SignOut } = useContext(AuthContext)

	const RESOURCES_ADMIN: TRecoruses<TEmptyParams>[] = [
		{
			title: 'Sair da Conta',
			item: { content: 'Sair', color: 'text-destructive hover:bg-destructive/15' },
			short: LogOut,
			handleClick: SignOut,
		},
	]
	const RESOURCES_UNKNOWN: TRecoruses<TRouteParams>[] = [
		{
			title: 'Logar na Conta',
			item: { content: 'Login', color: 'text-primary hover:bg-primary/15' },
			short: LogIn,
			handleClick: push,
			url: '/login',
		},
		{
			title: 'Cadastre-se',
			item: { content: 'Cadastre-se', color: 'text-tertiary hover:bg-tertiary/15' },
			short: FilePen,
			handleClick: push,
			url: '/register',
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
					{user ? <Links.Admin /> : null}
					{user && (
						<Links.Dropdown resources={RESOURCES_ADMIN}>
							<Button variant="ghost" size="icon">
								<Ellipsis />
							</Button>
						</Links.Dropdown>
					)}
					{!user && (
						<Links.Dropdown resources={RESOURCES_UNKNOWN}>
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
						{user ? <Links.Admin /> : null}
						{user && <ContainerLink recourses={RESOURCES_ADMIN} />}
						{!user && <ContainerLink recourses={RESOURCES_UNKNOWN} />}
						{!path.startsWith('/admin') && <Links.Products />}
					</>
				</SideBar>
				<ThemeSwitcher />
			</div>
		</header>
	)
}
