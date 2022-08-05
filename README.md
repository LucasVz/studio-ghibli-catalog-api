# STUDIO GHIBLI

Um catálogo de filmes do Studio Ghibli

## Sobre

O projeto consiste em consultar e filtrar informações do Studio Ghibli Api, salvar no banco de dados e renderizar o catalogo de filmes

## Tecnologias

As seguintes ferramentas e frameworks foram usados na construção do projeto:

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

## Como rodar

1. Clone esse repositorio

2. crie um arquivo env igual o env.example

3. Instale as dependencias

```bash
npm i
```

4. instale o banco de dados

```bash
npx prisma migrate dev
```

5. Inicie o aplicativo com

```bash
npm run dev
```

Documentação: https://app.swaggerhub.com/apis-docs/LucasVz/studio-ghibli-catalog-api/1.0.0

Acesse o layout da Api:https://github.com/LucasVz/studio-ghibli-catalog

Acesse online: https://studio-ghibli-catalog.vercel.app/
