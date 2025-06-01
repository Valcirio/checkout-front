'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from '../themeSwitcher'
import * as Links from './components/links'

export const Header = () => {
	const params = usePathname()
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<Link href="/" className="mr-6 flex items-center space-x-2">
					<ShoppingCart className="h-6 w-6 text-primary" />
					<span className="text-lg font-bold sm:inline-block">MeuEcommerce</span>
				</Link>
				<nav className="ml-auto flex items-center gap-4 text-sm lg:gap-6">
					{params === '/' ? <Links.Landing /> : null}
					{params.startsWith('/admin') ? <Links.Admin /> : null}
					<ThemeSwitcher />
				</nav>
			</div>
		</header>
	)
}
