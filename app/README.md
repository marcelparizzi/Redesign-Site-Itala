# Redesign Site Ítala Chinazzo

Este é o repositório do site redesenhado de Ítala Chinazzo. O site foi desenvolvido utilizando tecnologias modernas para oferecer uma experiência interativa e responsiva.

## Descrição

O site apresenta informações sobre os serviços oferecidos, abordagem profissional, indicações, seções para crianças, contato e muito mais. Foi construído com foco em design elegante, animações suaves e acessibilidade.

## Tecnologias Utilizadas

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Componentes UI**: Radix UI (shadcn/ui)
- **Animações**: GSAP
- **Scroll Smooth**: Lenis
- **Ícones**: Lucide React
- **Formulários**: React Hook Form com resolvers
- **Outros**: Embla Carousel, Date-fns, etc.

## Estrutura do Projeto

```
src/
├── components/ui/     # Componentes reutilizáveis (shadcn/ui)
├── hooks/             # Hooks customizados
├── lib/               # Utilitários
├── pages/             # Páginas principais
├── sections/          # Seções do site (Hero, About, Contact, etc.)
├── App.tsx            # Componente raiz
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcelparizzi/Redesign-Site-Itala_Borboleta.git
   cd Redesign-Site-Itala_Borboleta/app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run lint` - Executa o linter ESLint
- `npm run preview` - Visualiza o build de produção localmente

## Funcionalidades

- Design responsivo e moderno
- Animações suaves com GSAP
- Navegação suave com Lenis
- Componentes acessíveis com Radix UI
- Formulários interativos
- Seções dedicadas: Hero, Sobre, Abordagem, Indicações, Seção Infantil, Contato, etc.

## Licença

Este projeto é privado e destinado ao uso pessoal/profissional de Ítala Chinazzo.
