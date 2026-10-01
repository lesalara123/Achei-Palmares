# Painel administrativo

## Objetivo

O painel administrativo será a área protegida utilizada para manter as informações exibidas aos consumidores.

## Funcionalidades previstas

### Estabelecimentos

- Listar estabelecimentos;
- Cadastrar estabelecimento;
- Editar estabelecimento;
- Desativar ou excluir estabelecimento;
- Atualizar endereço, contatos e horários;
- Atualizar os dados de localização.

### Categorias

- Listar categorias;
- Criar categoria;
- Editar categoria;
- Desativar ou excluir categoria.

### Produtos e serviços

- Listar itens cadastrados;
- Cadastrar produto ou serviço;
- Vincular o item a um estabelecimento;
- Informar categoria;
- Editar item;
- Desativar ou excluir item.

## Proteção

Todas as ações de gerenciamento devem exigir uma sessão administrativa válida. A interface pública não deve exibir controles de edição ou exclusão.

## Ordem recomendada de implementação

1. Login e logout;
2. Cadastro de categorias;
3. Cadastro de estabelecimentos;
4. Cadastro de produtos e serviços;
5. Edição e desativação dos registros;
6. Validações e mensagens de erro.
