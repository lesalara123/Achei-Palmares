# Achei-Palmares

O Achei-Palmares e uma plataforma web para ajudar consumidores a encontrar produtos e servicos disponiveis em estabelecimentos comerciais de Palmares.

## Objetivo

Facilitar a busca por produtos e servicos locais, apresentando informacoes como estabelecimento, endereco, horario de funcionamento e formas de contato.

## Publico-alvo

- Consumidores que procuram produtos ou servicos em Palmares.
- Comerciantes que desejam divulgar seus estabelecimentos e o que oferecem.

Esta versao inicial ja possui uma interface web funcional para demonstracao local. Os dados sao armazenados no navegador e a autenticacao administrativa e demonstrativa; uma API e um banco de dados reais serao necessarios para producao.

## Como executar

1. Abra um terminal na pasta do projeto.
2. Inicie um servidor HTTP local:

	```powershell
	python -m http.server 5500
	```

3. Acesse `http://localhost:5500` no navegador.

Tambem e possivel abrir o `index.html` usando a extensao Live Server do VS Code.

## Funcionalidades disponiveis

- Busca publica por nome de produto, servico ou estabelecimento.
- Filtro por categoria e combinacao entre termo e categoria.
- Exibicao de estabelecimento, endereco, horario e contato.
- Link para abrir a localizacao no Google Maps.
- Painel administrativo local para categorias, estabelecimentos e itens.
- Ativacao, desativacao e exclusao de registros.
- Layout responsivo para computador e celular.

### Acesso demonstrativo

- E-mail: `admin@acheipalmares.local`
- Senha: `achei123`

Os dados cadastrados ficam no `localStorage` do navegador. Essa configuracao e adequada para apresentacao e prototipacao, mas nao substitui autenticacao, API, banco de dados, controle de acesso e validacao no servidor.

## Proximos passos tecnicos

- Definir e implementar a API e o banco de dados da aplicacao.
- Migrar a autenticacao demonstrativa para sessoes seguras no servidor.
- Adicionar testes automatizados para busca, autorizacao e operacoes administrativas.

## Documentacao

- [Escopo do projeto](readme-escopo.md)
- [Requisitos funcionais e nao funcionais](readme-requisitos.md)
- [Estrutura do projeto](readme-estrutura.md)
- [Arquitetura](readme-arquitetura.md)
- [Banco de dados](readme-banco-de-dados.md)
- [Autenticacao](readme-autenticacao.md)
- [Administracao](readme-administracao.md)
- [Busca publica](readme-busca.md)
- [Localizacao](readme-localizacao.md)
- [Decisoes do projeto](readme-decisoes.md)
