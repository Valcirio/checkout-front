# Frontend Checkout

Este é um projeto frontend moderno construído com Next.js 15, React 19 e TypeScript, focado em proporcionar uma experiência de checkout otimizada e segura.

## 🚀 Tecnologias Principais

- [Next.js 15](https://nextjs.org/) - Framework React com recursos avançados
- [React 19](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Stripe](https://stripe.com/) - Integração com gateway de pagamento
- [Shadcn/UI](https://ui.shadcn.com/) - Componentes acessíveis e personalizáveis
- [Zod](https://zod.dev/) - Validação de esquemas TypeScript
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários

## 📋 Pré-requisitos

- Node.js (versão LTS recomendada)
- pnpm (gerenciador de pacotes)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone [https://github.com/Valcirio/checkout-front]
cd frontend
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

## 🚀 Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## 📦 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento com Turbopack
- `pnpm build` - Cria a build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa a verificação de linting

## 🎨 Estrutura do Projeto

```
src/
├── app/          # Rotas e páginas da aplicação
├── components/   # Componentes reutilizáveis
├── context/      # Providers de contexto (Autorização, compra, etc...)
├── lib/          # Utilitários e configurações
├── providers/    # Funcionalidades que podem englobar toda a aplicação ou uma parte específica
├── services/     # Funções de serviço relacionados a API
├── types/        # Definições de tipos TypeScript
├── utils/        # Funções auxiliares específicas
└── validators/   # Validações do Zod
```

## 🔒 Segurança

- Validação de formulários com Zod
- Integração segura com Stripe
- Proteção contra CSRF
- Sanitização de inputs

## 🧪 Testes

Para executar os testes:

```bash
pnpm test
```

## 📝 Convenções de Código

- ESLint e Prettier configurados para manter a consistência do código
- Conventional Commits para mensagens de commit
- EditorConfig para configurações de editor

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
