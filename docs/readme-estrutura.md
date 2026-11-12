# Estrutura do projeto

## Objetivo

Este documento define a organizacao inicial do repositorio do Achei Palmares. A primeira interface funcional foi criada sem dependencias externas, mantendo a documentacao de dominio separada dos arquivos da aplicacao.

## Estrutura atual e planejada

```text
Achei-Palmares/
├── README.md
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── docs/
│   ├── readme-escopo.md
│   ├── readme-estrutura.md
│   ├── readme-arquitetura.md
│   ├── readme-requisitos.md
│   ├── readme-banco-de-dados.md
│   ├── readme-autenticacao.md
│   ├── readme-administracao.md
│   ├── readme-busca.md
│   ├── readme-localizacao.md
│   └── readme-decisoes.md
├── backend/
└── database/
```

## Organização da documentação

Cada assunto relevante será registrado em um arquivo separado:

- `docs/readme-escopo.md`: contexto, problema, proposta e objetivo do sistema.
- `docs/readme-estrutura.md`: organização das pastas e dos arquivos.
- `docs/readme-arquitetura.md`: organização técnica e comunicação entre as partes do sistema.
- `docs/readme-requisitos.md`: requisitos funcionais e não funcionais.
- `docs/readme-banco-de-dados.md`: entidades, atributos e relacionamentos.
- `docs/readme-autenticacao.md`: regras do login exclusivo do administrador.
- `docs/readme-administracao.md`: funcionalidades disponíveis no painel administrativo.
- `docs/readme-busca.md`: funcionamento da pesquisa pública por nome e categoria.
- `docs/readme-localizacao.md`: endereço e acesso à localização dos estabelecimentos.
- `docs/readme-decisoes.md`: registro das decisões importantes do projeto.

## Regra de organização

Alterações de naturezas diferentes devem ser documentadas em arquivos próprios. O `README.md` principal deverá apresentar apenas a visão geral do projeto e links para os documentos específicos.

## Situação atual

Uma primeira versao funcional ja existe em `frontend/index.html`, `frontend/styles.css` e `frontend/app.js`. Ela implementa a busca publica e um painel administrativo demonstrativo com dados no `localStorage` do navegador.

As pastas `frontend/`, `backend/` e `database/` continuam previstas para a proxima etapa, quando a API, a persistencia compartilhada e a autenticacao real forem implementadas.
