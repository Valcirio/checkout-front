'use client'

import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
	return (
		<html>
			<body>
				<main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
					<div className="text-center">
						<p className="text-base font-semibold text-primary">{error.cause as number}</p>
						<h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
							Página não Encontrada
						</h1>
						<p className="mt-6 text-pretty text-lg font-medium text-foreground sm:text-xl/8">
							Desculpe, tente novamente mais tarde.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a href="#" className="text-sm font-semibold text-primary">
								Suporte <span aria-hidden="true">&rarr;</span>
							</a>
							<Button asChild>
								<Link href="/">Página inicial</Link>
							</Button>
						</div>
					</div>
				</main>
			</body>
		</html>
	)
}
