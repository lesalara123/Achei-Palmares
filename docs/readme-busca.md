# Busca pública

## Objetivo

Permitir que consumidores encontrem produtos ou serviços disponíveis em estabelecimentos de Palmares sem precisar criar uma conta.

## Critérios de pesquisa

A primeira versão deverá permitir:

- Pesquisa por nome do produto ou serviço;
- Filtro por categoria;
- Combinação entre nome e categoria;
- Exibição somente de registros ativos.

## Fluxo de pesquisa

```text
Consumidor acessa a página inicial
        ↓
Informa o nome do produto ou serviço
        ↓
Seleciona uma categoria, se desejar
        ↓
Envia a pesquisa
        ↓
Sistema apresenta os resultados
```

## Resultado esperado

Cada resultado deverá apresentar, quando disponível:

- Nome do produto ou serviço;
- Tipo: produto ou serviço;
- Categoria;
- Nome do estabelecimento;
- Endereço;
- Horário de funcionamento;
- Telefone ou WhatsApp;
- Acesso à localização.

## Regras iniciais

- A busca não exige autenticação;
- Registros inativos não devem aparecer para o consumidor;
- A pesquisa deve aceitar diferenças simples de maiúsculas e minúsculas;
- O sistema deve informar quando nenhum resultado for encontrado;
- O resultado deve permitir acessar mais detalhes do estabelecimento.

## Funcionalidades futuras

- Filtros adicionais;
- Ordenação por proximidade;
- Busca por localização do consumidor;
- Sugestões de pesquisa;
- Busca por múltiplos termos.
