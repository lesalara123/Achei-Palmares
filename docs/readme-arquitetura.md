# Arquitetura inicial

## Visão geral

O Achei Palmares será uma aplicação web para consulta de produtos e serviços disponíveis em estabelecimentos comerciais de Palmares.

A primeira versão terá dois tipos de acesso:

- **Acesso público:** consumidores pesquisam produtos ou serviços sem criar conta.
- **Acesso administrativo:** uma conta exclusiva permite administrar estabelecimentos, categorias e produtos ou serviços.

## Componentes planejados

### Interface web

Responsável por:

- Exibir a página inicial e o campo de pesquisa;
- Permitir o filtro por categoria;
- Apresentar os resultados encontrados;
- Exibir os detalhes dos estabelecimentos;
- Disponibilizar as telas de login e administração.

### Backend

Responsável por:

- Autenticar o administrador;
- Cadastrar, editar e remover dados administrativos;
- Consultar produtos, serviços, categorias e estabelecimentos;
- Aplicar as regras de pesquisa;
- Proteger as operações administrativas.

### Banco de dados

Responsável por armazenar:

- Usuário administrador;
- Estabelecimentos;
- Categorias;
- Produtos e serviços;
- Endereços, contatos e horários de funcionamento.

## Fluxo de comunicação

```text
Navegador
   ↓
Interface web
   ↓
API/backend
   ↓
Banco de dados
```

## Princípios da primeira versão

- A pesquisa pública não exige autenticação;
- Apenas o administrador poderá alterar os dados cadastrados;
- A localização será baseada no endereço do estabelecimento;
- A aplicação será web;
- O sistema não terá pagamentos, pedidos ou entregas inicialmente.

## Estado da arquitetura

A arquitetura acima é uma definição inicial. As tecnologias específicas serão escolhidas antes do início da implementação e registradas neste documento ou no `readme-decisoes.md`.
