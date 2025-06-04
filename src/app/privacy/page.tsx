import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicyPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<Card className="mx-auto max-w-3xl">
				<CardHeader>
					<CardTitle className="text-center text-3xl font-bold">Política de Privacidade</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">1. Coleta de Informações</h2>
						<p className="text-muted-foreground">
							Coletamos informações pessoais que você nos fornece diretamente, como nome, endereço
							de e-mail, e informações de contato quando você se registra em nosso Serviço, preenche
							um formulário, ou se comunica conosco de outra forma. Também podemos coletar
							informações automaticamente quando você navega em nosso site, como seu endereço IP,
							tipo de navegador, páginas visitadas e horários de acesso.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">2. Uso das Informações</h2>
						<div className="text-muted-foreground">
							Utilizamos as informações coletadas para:
							<ul className="mt-2 list-inside list-disc pl-4 text-muted-foreground">
								<li>Fornecer, operar e manter nosso Serviço;</li>
								<li>Melhorar, personalizar e expandir nosso Serviço;</li>
								<li>Entender e analisar como você usa nosso Serviço;</li>
								<li>Desenvolver novos produtos, serviços, recursos e funcionalidades;</li>
								<li>
									Comunicar com você, diretamente ou através de um de nossos parceiros, incluindo
									para atendimento ao cliente, para fornecer atualizações e outras informações
									relativas ao Serviço, e para fins de marketing e promocionais;
								</li>
								<li>Enviar e-mails;</li>
								<li>Encontrar e prevenir fraudes.</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">
							3. Compartilhamento de Informações
						</h2>
						<p className="text-muted-foreground">
							Não vendemos, trocamos ou alugamos suas informações de identificação pessoal para
							terceiros. Podemos compartilhar informações genéricas agregadas não vinculadas a
							qualquer informação de identificação pessoal sobre visitantes e usuários com nossos
							parceiros de negócios, afiliados confiáveis e anunciantes para os fins descritos
							acima. Podemos usar prestadores de serviços terceirizados para nos ajudar a operar
							nossos negócios e o Site ou administrar atividades em nosso nome, como o envio de
							newsletters ou pesquisas.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">4. Cookies</h2>
						<p className="text-muted-foreground">
							Nosso site pode usar &quot;cookies&quot; para melhorar a experiência do usuário. O
							navegador do usuário coloca cookies no disco rígido para fins de manutenção de
							registros e, às vezes, para rastrear informações sobre eles. O usuário pode optar por
							configurar seu navegador para recusar cookies ou para alertá-lo quando os cookies
							estiverem sendo enviados. Se o fizerem, observe que algumas partes do Site podem não
							funcionar corretamente.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">5. Segurança dos Dados</h2>
						<p className="text-muted-foreground">
							A segurança dos seus dados é importante para nós, mas lembre-se que nenhum método de
							transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora
							nos esforcemos para usar meios comercialmente aceitáveis para proteger suas
							Informações Pessoais, não podemos garantir sua segurança absoluta.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">
							6. Links para Outros Sites
						</h2>
						<p className="text-muted-foreground">
							Nosso Serviço pode conter links para outros sites que não são operados por nós. Se
							você clicar em um link de terceiros, será direcionado para o site desse terceiro.
							Aconselhamos vivamente que reveja a Política de Privacidade de todos os sites que
							visitar. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas
							de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">
							7. Alterações a Esta Política de Privacidade
						</h2>
						<p className="text-muted-foreground">
							Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos
							você sobre quaisquer alterações publicando a nova Política de Privacidade nesta
							página. Aconselhamos que você revise esta Política de Privacidade periodicamente para
							quaisquer alterações. As alterações a esta Política de Privacidade entram em vigor
							quando são publicadas nesta página.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-2xl font-semibold text-tertiary">7. Contato</h2>
						<p className="text-muted-foreground">
							Se você tiver alguma dúvida sobre estes Política de Privacidade, entre em contato
							conosco em&nbsp;
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
