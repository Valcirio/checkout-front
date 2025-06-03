import { TListProduct } from '@/validators/product'
import { Lock } from 'lucide-react'

export default function Slide({ product }: { product: TListProduct }) {
	return (
		<div className="w-full max-w-none flex-col justify-between border-r border-border bg-muted/50 p-8 md:max-w-lg lg:flex xl:max-w-3xl">
			<div>
				{/* <div className="mb-12 flex items-center text-foreground">
					<Button variant="ghost" size="icon" className="mr-2">
						<ArrowLeft className="h-5 w-5" />
					</Button>
					<span className="text-xl font-semibold">{product.title}</span>
				</div> */}

				<div className="mb-6 flex flex-col items-start gap-8">
					<div className="flex flex-col items-start justify-center">
						<h1 className="text-xl font-semibold text-foreground md:text-3xl">{product.title}</h1>
						<p className="text-3xl font-bold text-primary md:text-5xl">R$ {product.price}</p>
					</div>
					<div className="h-auto w-full max-w-sm self-center overflow-hidden rounded-lg border border-border bg-background">
						<img src={product.picture} alt={product.title} className="h-full w-full object-cover" />
					</div>
					<div className="flex flex-col items-start justify-center gap-2">
						<span className="text-lg md:text-xl">Descrição do produto</span>
						<p className="md:text-basetext-muted-foreground text-sm">{product.description}</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center text-xs text-muted-foreground">
				<Lock className="mr-1.5 h-3 w-3" />
				<span>Pagamento seguro via Stripe</span>
			</div>
		</div>
	)
}
