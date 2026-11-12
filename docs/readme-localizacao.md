# Localização dos estabelecimentos

## Objetivo

Permitir que o consumidor identifique onde o estabelecimento está localizado e consiga abrir o endereço para navegação.

## Primeira versão

Inicialmente, o sistema deverá:

- Armazenar o endereço completo do estabelecimento;
- Exibir o endereço nos resultados ou na tela de detalhes;
- Disponibilizar um mapa ou link para um serviço de mapas;
- Permitir que o consumidor abra a rota em seu dispositivo.

## Localização automática do consumidor

A localização automática do consumidor não será obrigatória na primeira versão. Caso seja implementada, o navegador deverá solicitar autorização antes de acessar a localização do dispositivo.

Sem autorização, o sistema continuará funcionando com base no endereço cadastrado dos estabelecimentos.

## Dados necessários

- Logradouro;
- Número;
- Complemento, quando houver;
- Bairro;
- Cidade;
- Estado;
- CEP, quando disponível;
- Latitude e longitude, se forem utilizadas.

## Regras de cadastro

- O endereço deve ser validado antes de ser salvo;
- A cidade inicial de atuação será Palmares;
- O administrador poderá corrigir o endereço posteriormente;
- A latitude e a longitude não devem ser preenchidas manualmente pelo consumidor.

## Funcionalidades futuras

- Ordenação por distância;
- Detecção automática da localização do consumidor;
- Mapa integrado na própria página;
- Filtro por raio de distância.
