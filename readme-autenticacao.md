# Autenticação administrativa

## Objetivo

A primeira versão terá apenas um acesso administrativo, utilizado pelo responsável pelo projeto para gerenciar os dados da plataforma.

## Regras iniciais

- Não haverá cadastro público de usuários;
- Consumidores poderão pesquisar sem login;
- Somente o administrador autenticado poderá acessar o painel;
- Somente o administrador poderá alterar estabelecimentos, categorias e produtos ou serviços;
- A senha deverá ser armazenada usando hash seguro;
- O sistema deverá encerrar a sessão quando o administrador fizer logout.

## Fluxo de login

```text
Administrador acessa a tela de login
        ↓
Informa usuário/e-mail e senha
        ↓
Sistema valida as credenciais
        ↓
Credenciais válidas: acesso ao painel
Credenciais inválidas: mensagem de erro
```

## Fluxo de logout

O administrador poderá encerrar a sessão por meio de uma ação explícita de saída. Depois disso, as páginas administrativas deverão exigir nova autenticação.

## Decisões ainda pendentes

- Tecnologia de autenticação;
- Forma de armazenamento da sessão;
- Recuperação ou redefinição da senha;
- Política de limite de tentativas;
- Necessidade de autenticação em dois fatores.
