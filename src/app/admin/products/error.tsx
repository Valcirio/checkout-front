'use client'

import Link from 'next/link'

export default function Error({ error }: { error: Error & { digest?: string } }) {
	return (
		<>
			<main className="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold text-primary">{error.cause as number}</p>
					<h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
						Produtos não Encontrados
					</h1>
					<p className="mt-6 text-pretty text-lg font-medium text-foreground sm:text-xl/8">
						Desculpe, tente novamente mais tarde.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a href="#" className="text-sm font-semibold text-primary">
							Suporte <span aria-hidden="true">&rarr;</span>
						</a>
						<Link href="/" className="text-sm font-semibold text-primary">
							Página inicial
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}
