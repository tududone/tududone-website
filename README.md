# Tududone - Remodelação de Apartamentos

Site institucional da Tududone, especializada em remodelação de apartamentos em Almada, Portugal.

## 🔗 Links

- [Website](https://tududone.com)
- [GitHub](https://github.com/tududone/tududone-website)

## 🚀 Tecnologias

- Next.js 14
- TypeScript
- Tailwind CSS
- Strapi (CMS)
- Framer Motion

## 💻 Estrutura do Projeto

O projeto está dividido em duas partes principais:

- `Frontend`: Aplicação Next.js com TypeScript
- `Backend`: CMS Strapi para gerenciamento de conteúdo

## 🛠️ Instalação

### Frontend

```bash
# Clone o repositório
git clone https://github.com/tududone/tududone-website.git

# Entre no diretório
cd tududone-website

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev
```

### Backend (Strapi)

```bash
cd my-blog-backend

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run develop
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## 📝 Funcionalidades

- Landing page responsiva
- Blog com gerenciamento de conteúdo via Strapi
- Seções: Home, Sobre, Remodelação, Blog
- Tema claro/escuro
- Animações suaves com Framer Motion

## 📄 Licença

Este projeto está sob a licença MIT.
