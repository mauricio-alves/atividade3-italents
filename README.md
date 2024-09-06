# Atividade 3 - Bootcamp Front-end Development iTalents

## Descrição do projeto

O objetivo é desenvolver um projeto de estudo em React utilizando os conceitos de componente apresentados na aula.

## Instruções de como executar a aplicação

1. Primeiro, clone este repositório;
2. Abra com qualquer IDE;
3. Abra o terminal e rode o comando `npm install`;
4. Então, rode o comando `npm start`;
5. Uma janela abrirá no seu navegador e a aplicação será executada.

## Tecnologias utilizadas

- HTML;
- CSS;
- React;
- Node.

## Estrutura dos componentes

- **App:** Componente raiz que vai renderizar toda a aplicação.
- **Home:** Componente da página que vai gerenciar o estado principal da lista de filmes e a pesquisa. Contém a lógica de filtragem e renderização da lista de filmes com base no input de pesquisa.
- **Search:** Componente de formulário que contém o input de pesquisa. Dispara um evento quando o valor do input muda, alterando o estado da lista de filmes e o enviando para o componente pai através de props.
- **Card:** Componente que renderiza as informações de cada filme individualmente. Também recebe as informações do filme (nome, ano, etc.) via props.
- **NotFound:** Componente que é renderizado quando a pesquisa não encontra nenhum filme no banco de dados mockado (mock-db/data.json).
- **Header:** Componente que contém as informações do header da aplicação.
- **Footer:** Componente que contém as informações do footer da aplicação.

A proposta foi desenvolver uma aplicação em React que realize a renderização de um catálogo de filmes e que permita ao usuário pesquisar um filme pelo nome do mesmo.
