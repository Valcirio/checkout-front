'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false)
	const { theme, resolvedTheme, setTheme } = useTheme()

	useEffect(() => {
		if (resolvedTheme === 'dark' || resolvedTheme === 'light') {
			setTheme(resolvedTheme)
		}
		setMounted(true)
	}, [resolvedTheme, setTheme])

	if (!mounted) return null
	return (
		<div className="h-fit w-fit px-2">
			{theme === 'dark' ? (
				<button
					onClick={() => {
						setTheme('light')
					}}
				>
					<Sun className="animate-spin-appear h-auto w-6 text-foreground" />
				</button>
			) : (
				<button
					onClick={() => {
						setTheme('dark')
					}}
				>
					<Moon className="animate-spin-appear h-auto w-6 text-foreground" />
				</button>
			)}
		</div>
	)
}
