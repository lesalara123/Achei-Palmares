# Modelo inicial do banco de dados

## Objetivo

Este documento registra as entidades necessárias para a primeira versão do Achei Palmares. O modelo poderá ser ajustado quando a tecnologia do banco for escolhida.

## Entidades

### Administrador

- `id`
- `nome`
- `email` ou `usuario`
- `senha_hash`
- `ativo`
- `created_at`
- `updated_at`

### Estabelecimento

- `id`
- `nome`
- `descricao`
- `categoria_id`
- `endereco`
- `bairro`
- `cidade`
- `cep`
- `latitude`
- `longitude`
- `telefone`
- `whatsapp`
- `horario_funcionamento`
- `ativo`
- `created_at`
- `updated_at`

### Categoria

- `id`
- `nome`
- `descricao`
- `ativo`
- `created_at`
- `updated_at`

### Produto ou serviço

- `id`
- `nome`
- `descricao`
- `tipo`
- `categoria_id`
- `estabelecimento_id`
- `ativo`
- `created_at`
- `updated_at`

## Relacionamentos

```text
Categoria 1 ──── N Estabelecimentos
Categoria 1 ──── N Produtos/Serviços
Estabelecimento 1 ──── N Produtos/Serviços
```

A relação exata entre estabelecimento e categoria deverá ser revisada caso um estabelecimento possa pertencer a mais de uma categoria. Nesse caso, será criada uma tabela intermediária.

## Observações

- A senha nunca deverá ser armazenada em texto puro;
- Produtos e serviços devem permanecer vinculados a um estabelecimento;
- Registros desativados podem ser mantidos para evitar perda de histórico;
- A latitude e a longitude podem ser preenchidas a partir do endereço, conforme a estratégia de localização escolhida.
