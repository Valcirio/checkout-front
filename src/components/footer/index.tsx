export const Footer = () => {
	return (
		<footer className="border-t border-border/40 bg-secondary/30 py-8">
			<div className="container mx-auto flex flex-col items-center justify-start px-4 md:flex-row md:justify-between md:px-6">
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} MeuEcommerce. Todos os direitos reservados.
				</p>
				<div className="mt-4 flex gap-4 md:mt-0">
					<a href="/terms" className="text-sm text-muted-foreground hover:text-primary">
						Termos de Serviço
					</a>
					<a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
						Política de Privacidade
					</a>
				</div>
			</div>
		</footer>
	)
}
