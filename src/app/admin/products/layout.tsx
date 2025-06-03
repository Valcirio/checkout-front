import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Profile - Produtos',
	description: 'Listagem de produtos.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="flex min-h-screen w-full flex-col items-center justify-start">
			{children}
		</section>
	)
}
