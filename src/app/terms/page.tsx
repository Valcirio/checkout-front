import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfServicePage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<Card className="mx-auto max-w-3xl">
				<CardHeader>
					<CardTitle className="text-center text-3xl font-bold">Termos de Serviço</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">1. Aceitação dos Termos</h2>
						<p className="text-muted-foreground">
							Ao acessar e usar nosso site e serviços (coletivamente, &quot;Serviço&quot;), você
							concorda em cumprir e estar vinculado por estes Termos de Serviço
							(&quot;Termos&quot;). Se você não concordar com estes Termos, não deverá usar o
							Serviço. Reservamo-nos o direito de alterar ou modificar estes Termos a qualquer
							momento, a nosso exclusivo critério.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">2. Uso do Serviço</h2>
						<p className="text-muted-foreground">
							Você concorda em usar o Serviço apenas para fins legais e de acordo com estes Termos.
							Você é responsável por todas as suas atividades em conexão com o Serviço. Qualquer uso
							fraudulento, abusivo ou ilegal pode ser motivo para encerrar seu direito de usar o
							Serviço.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">3. Contas de Usuário</h2>
						<p className="text-muted-foreground">
							Para acessar certas funcionalidades do Serviço, você pode ser obrigado a criar uma
							conta. Você é responsável por manter a confidencialidade de suas credenciais de conta
							e por todas as atividades que ocorrem sob sua conta. Você concorda em nos notificar
							imediatamente sobre qualquer uso não autorizado de sua conta.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">
							4. Propriedade Intelectual
						</h2>
						<p className="text-muted-foreground">
							O Serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão
							propriedade exclusiva da <strong className="text-primary">MeuEccomerce</strong> e seus
							licenciadores. O Serviço é protegido por direitos autorais, marcas registradas e
							outras leis do Brasil e de países estrangeiros.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">
							5. Limitação de Responsabilidade
						</h2>
						<p className="text-muted-foreground">
							Em nenhuma circunstância a <strong className="text-primary">MeuEccomerce</strong>, nem
							seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, serão
							responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou
							punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou
							outras perdas intangíveis, resultantes de (i) seu acesso ou uso ou incapacidade de
							acessar ou usar o Serviço; (ii) qualquer conduta ou conteúdo de terceiros no Serviço;
							(iii) qualquer conteúdo obtido do Serviço; e (iv) acesso não autorizado, uso ou
							alteração de suas transmissões ou conteúdo, seja com base em garantia, contrato, ato
							ilícito (incluindo negligência) ou qualquer outra teoria legal, quer tenhamos sido
							informados ou não da possibilidade de tais danos.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">6. Alterações nos Termos</h2>
						<p className="text-muted-foreground">
							Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes
							Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso
							prévio de pelo menos 30 dias antes que quaisquer novos termos entrem em vigor. O que
							constitui uma alteração material será determinado a nosso exclusivo critério.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">7. Contato</h2>
						<p className="text-muted-foreground">
							Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em&nbsp;
							<strong className="text-primary">meu_ecommerce@email.com</strong>
						</p>
						<p className="mt-4 text-sm text-muted-foreground">
							Última atualização: {new Date().toLocaleDateString('pt-BR')}
						</p>
					</section>
				</CardContent>
			</Card>
		</div>
	)
}
