'use client'

import dynamic from 'next/dynamic'
const NextThemeProvider = dynamic(
	async () => await import('next-themes').then((mod) => mod.ThemeProvider),
	{ ssr: false }
)

export function ThemeProvider({ children }: { children: React.ReactElement }) {
	return (
		<NextThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</NextThemeProvider>
	)
}
