import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const ProductsLinks = () => {
	return (
		<Button asChild size="sm">
			<Link href="/products">
				Ver Produtos <ArrowRight className="ml-2 h-4 w-4" />
			</Link>
		</Button>
	)
}
