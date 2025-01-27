# Tududone Website

Este é o repositório do site da Tududone, uma empresa especializada em remodelações e design de interiores.

## Tecnologias Utilizadas

- Next.js 13
- TypeScript
- Tailwind CSS
- React
- Node.js

## Funcionalidades

- Design responsivo
- Modo escuro/claro
- Formulário de contato
- Galeria de projetos
- FAQ
- Sobre nós

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/tududone-website.git
```

2. Instale as dependências:
```bash
cd tududone-website
npm install
```

3. Crie um arquivo `.env.local` e adicione as variáveis de ambiente necessárias:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria uma versão otimizada para produção
- `npm start`: Inicia o servidor de produção
- `npm run lint`: Executa a verificação de linting

## Estrutura do Projeto

```
tududone-website/
├── app/                # Páginas e rotas da aplicação
├── components/         # Componentes React reutilizáveis
├── public/            # Arquivos estáticos
├── styles/           # Arquivos de estilo
└── types/            # Definições de tipos TypeScript
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
