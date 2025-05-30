'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'

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
					<CiDark className="animate-spin-appear h-auto w-6 text-foreground" />
				</button>
			) : (
				<button
					onClick={() => {
						setTheme('dark')
					}}
				>
					<CiLight className="animate-spin-appear h-auto w-6 text-foreground" />
				</button>
			)}
		</div>
	)
}
