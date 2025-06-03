import Link from 'next/link'

export const AdminLinks = () => {
	return (
		<>
			<Link
				href="/admin/order"
				className="text-muted-foreground transition-colors hover:text-foreground"
			>
				Pedidos
			</Link>
			<Link
				href="/admin/products"
				className="text-muted-foreground transition-colors hover:text-foreground"
			>
				Produtos
			</Link>
		</>
	)
}
