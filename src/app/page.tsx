'use client'

import { Button } from '@/components/ui/button'

import {
	ArrowRight,
	ShoppingCart,
	Package,
	Users,
	CreditCard,
	Truck,
	UserCheck2,
} from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
	return (
		<main className="flex min-h-screen flex-grow flex-col items-center justify-center bg-background text-foreground">
			<section className="flex w-full justify-center bg-secondary/30 py-12 md:py-24 lg:py-32 xl:py-48">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Bem-vindo ao <span className="text-primary">MeuEcommerce</span>
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									A sua loja online para encontrar os melhores produtos com os melhores preços.
									Qualidade e confiança em cada compra.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button size="lg" asChild>
									<Link href="/products">
										Explorar Produtos
										<ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<Link href="#features">Ver Ofertas</Link>
								</Button>
							</div>
						</div>
						<img
							src="https://placehold.co/600x500/e2e8f0/334155?text=Imagem+Hero"
							width="600"
							height="500"
							alt="Hero Image"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full lg:order-last lg:aspect-square"
						/>
					</div>
				</div>
			</section>
			<section id="advantages" className="flex w-full justify-center py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
						<div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
							Por que Comprar Conosco?
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Seu E-commerce <span className="text-primary">Descomplicado</span>
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Oferecemos uma experiência de compra online rápida, segura e conveniente, pensada para
							você.
						</p>
					</div>
					<div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
						<div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm transition-shadow hover:bg-secondary/15 hover:shadow-lg">
							<div className="mb-4 rounded-full bg-primary/10 p-3">
								<CreditCard className="h-10 w-10 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-card-foreground">
								Pagamento Facilitado
							</h3>
							<p className="text-sm text-muted-foreground">
								Diversas opções de pagamento, incluindo cartões de crédito, débito e Pix,
								processados de forma segura e rápida.
							</p>
						</div>
						<div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm transition-shadow hover:bg-secondary/15 hover:shadow-lg">
							<div className="mb-4 rounded-full bg-primary/10 p-3">
								<Truck className="h-10 w-10 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-card-foreground">Entrega Expressa</h3>
							<p className="text-sm text-muted-foreground">
								Receba seus produtos rapidamente no conforto da sua casa com nossas opções de
								entrega ágil para todo o país.
							</p>
						</div>
						<div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm transition-shadow hover:bg-secondary/15 hover:shadow-lg">
							<div className="mb-4 rounded-full bg-primary/10 p-3">
								<UserCheck2 className="h-10 w-10 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-card-foreground">
								Compra Sem Cadastro
							</h3>
							<p className="text-sm text-muted-foreground">
								Agilidade total! Compre seus produtos favoritos sem a necessidade de criar uma conta
								ou lembrar senhas.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				id="about"
				className="flex w-full flex-col items-center justify-center bg-secondary/30 py-12 md:py-24 lg:py-32"
			>
				<div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
							Sobre Nós
						</div>
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Apaixonados por <span className="text-primary">Qualidade</span> e{' '}
							<span className="text-primary">Inovação</span>.
						</h2>
						<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							No MeuEcommerce, nossa missão é oferecer produtos excepcionais que combinam design
							moderno, funcionalidade e um preço justo. Acreditamos em construir relações de
							confiança com nossos clientes, oferecendo uma experiência de compra fácil, segura e
							satisfatória.
						</p>
						<ul className="grid gap-2 py-4">
							<li className="flex items-center">
								<Package className="mr-2 h-5 w-5 text-primary" />
								Produtos de alta qualidade selecionados a dedo.
							</li>
							<li className="flex items-center">
								<Users className="mr-2 h-5 w-5 text-primary" />
								Atendimento ao cliente dedicado e amigável.
							</li>
							<li className="flex items-center">
								<ShoppingCart className="mr-2 h-5 w-5 text-primary" />
								Processo de compra simplificado e seguro.
							</li>
						</ul>
					</div>
					<div className="flex justify-center">
						<img
							src="https://placehold.co/550x450/e2e8f0/334155?text=Sobre+Nós"
							width="550"
							height="450"
							alt="About Us Image"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg sm:w-full lg:aspect-[4/3]"
						/>
					</div>
				</div>
			</section>
			<section
				id="seller"
				className="flex w-full justify-center bg-background py-12 md:py-24 lg:py-32"
			>
				<div className="container px-4 md:px-6">
					<div className="mx-auto w-full max-w-4xl space-y-8 text-center">
						<div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
							Expanda Seus Horizontes
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Venda no <span className="text-primary">MeuEcommerce</span> e Alcance Milhares de
							Clientes!
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Junte-se à nossa crescente comunidade de vendedores e aproveite nossa plataforma para
							exibir seus produtos, gerenciar suas vendas e expandir seu negócio. Oferecemos as
							ferramentas e o suporte que você precisa para ter sucesso.
						</p>
						<div className="flex flex-col justify-center gap-4 min-[400px]:flex-row">
							<Button size="lg" asChild>
								<Link href="/register">
									<Users className="mr-2 h-5 w-5" /> Quero Ser Vendedor(a)
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/">Saiba Mais sobre Vantagens</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
