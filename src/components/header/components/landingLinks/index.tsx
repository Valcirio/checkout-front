import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const LandingLinks = () => {
	return (
		<>
			<Link
				href="#advantages"
				className="text-muted-foreground transition-colors hover:text-foreground"
			>
				Vantagens
			</Link>
			<Link href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
				Sobre Nós
			</Link>
			<Link
				href="#seller"
				className="text-muted-foreground transition-colors hover:text-foreground"
			>
				Seja um Vendedor
			</Link>
			<Button asChild size="sm">
				<Link href="/products">
					Ver Produtos <ArrowRight className="ml-2 h-4 w-4" />
				</Link>
			</Button>
		</>
	)
}
