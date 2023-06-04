---
title:  "Normalização de banco de dados"
date: 2023-05-30 17:00:00 -0300
categories: [DESENVOLVIMENTO, PROGRAMADOR]
tags: [Senac, programador, projetos, banco de dados]
---
O projeto de um banco de dados é uma tarefa complexa e requer atenção aos detalhes para evitar problemas como redundância de dados e inconsistência. A inclusão, alteração ou exclusão de registros pode resultar em anomalias que prejudicam o funcionamento do banco de dados. A normalização de dados é uma técnica utilizada para corrigir essas anomalias e garantir um armazenamento consistente e eficiente dos dados em bancos de dados relacionais.

## Anomalias de banco de dados

### Anomalia de Inclusão

A anomalia de inclusão ocorre quando é necessário digitar novamente informações repetidas, como nome, endereço e cidade, em cada novo registro. Isso pode resultar em inconsistência caso algum campo seja digitado incorretamente. Além disso, o aumento da redundância de dados ocupa mais espaço em disco, impactando negativamente o desempenho e a eficiência do banco de dados.

### Anomalia de Atualização

Já a anomalia de atualização ocorre quando a modificação de uma informação resulta em inconsistência nos dados. Por exemplo, se o nome "João Silva" aparece diversas vezes em registros diferentes e é necessário alterá-lo para "João da Silva", é preciso fazer essa alteração em todos os registros para evitar inconsistência. A falta de uma atualização global pode levar a informações desatualizadas e divergentes em diferentes partes do banco de dados.

### Anomalia de Exclusão

A anomalia de exclusão ocorre quando a exclusão de um registro resulta na perda de informações importantes para o banco de dados. Por exemplo, se for necessário excluir os registros de pedido 8 e 10, todas as informações do cliente "João Silva" serão perdidas automaticamente. Isso pode levar a uma perda irreparável de dados e comprometer a integridade e consistência do banco de dados.

## Normalização de Dados

Para evitar essas anomalias, é importante utilizar a normalização de dados. A normalização é um processo composto por uma série de passos que permitem um armazenamento consistente e eficiente dos dados em bancos de dados relacionais. Esses passos reduzem a redundância de dados e as chances dos dados se tornarem inconsistentes.

A normalização geralmente é aplicada quando uma base de dados foi criada antes da existência de um banco de dados relacional ou foi desenvolvida sem considerar a existência de um banco de dados relacional. Ela também pode ser aplicada ao final do processo de modelagem de um banco para conferir se o modelo de dados está normalizado e, caso não esteja, pode-se normalizá-lo antes da implementação da base de dados do SGBD.

O processo de normalização é constituído por um conjunto de formas normais que especificam critérios para definir quando uma tabela está bem estruturada ou não. As formas normais mais comumente utilizadas são:

1. Primeira Forma Normal (1NF): Nessa forma normal, os valores em uma tabela devem ser atômicos, ou seja, cada valor deve ser indivisível. Também não deve haver duplicação de registros.
2. Segunda Forma Normal (2NF): Nessa forma normal, a tabela deve atender aos critérios da 1NF e, além disso, todos os atributos não chave devem depender completamente da chave primária.
3. Terceira Forma Normal (3NF): Nessa forma normal, a tabela deve atender aos critérios da 2NF e, além disso, não deve haver dependência transitiva entre os atributos não chave.

> Existem outras formas normais, como a Quarta Forma Normal (4NF) e a Quinta Forma Normal (5NF), que visam eliminar ainda mais a redundância de dados e garantir a integridade e eficiência do banco de dados.
{: .prompt-tip }

## Exemplo Prático 1fn

Considere uma tabela de cadastro de clientes em um banco de dados relacional. Inicialmente, pode-se ter uma tabela não normalizada, como mostrado a seguir:

Vamos aplicar a primeira forma normal na tabela fornecida:

| ID  | Nome          | Endereço                        | Telefone                  |
| --- | ------------- | ------------------------------- | ------------------------- |
| 1   | João Silva    | Rua A, 123, Sobral, CE          | São Paulo                 |
| 2   | Maria Santos  | Rua B, 456,  Rio de Janeiro, RJ | 999 8822265, 999 8895165  |
| 3   | Pedro Almeida | Rua C, 789, São Paulo, SP       | 999 8813661, 999 88258665 |

Critérios da primeira forma normal:

1. Criar na nova tabela um atributo para conter o atributo composto da
tabela original, neste caso criar um atributo telefone, na nova tabela
tbTelefone;
2. Criar na nova tabela um atributo para conter a chave primária da tabela
original, podemos criar um atributo numero_agencia na tabela
tbTelefone;
3. Definir uma chave estrangeira para garantir a relação entre a nova
tabela e a tabela original;
4. Definir a chave primária da nova tabela;
5. Remover o atributo não atômico da tabela original.

Seguindo os critérios mencionados, vamos criar uma nova tabela chamada "tbTelefone" para conter os dados do atributo composto "Telefone". A tabela "tbTelefone" terá os seguintes atributos: "Numero", "ID_Pessoa" (chave estrangeira para relacionamento com a tabela "Pessoa").

A tabela "Pessoa" será modificada para remover o atributo não atômico "Telefone".

**Tabela "Pessoa":**

| ID  | Nome          | Endereço                        |
| --- | ------------- | ------------------------------- |
| 1   | João Silva    | Rua A, 123, Sobral, CE          |
| 2   | Maria Santos  | Rua B, 456,  Rio de Janeiro, RJ |
| 3   | Pedro Almeida | Rua C, 789, São Paulo, SP       |

**Tabela "tbTelefone":**

| Numero       | ID_Pessoa |
| ------------ | --------- |
| 999 8877665  | 1         |
| 999 88123665 | 1         |
| 999 8822265  | 2         |
| 999 8895165  | 2         |
| 999 8813661  | 3         |
| 999 88258665 | 3         |

Agora, a tabela "Pessoa" contém apenas as informações básicas, enquanto os números de telefone estão armazenados na tabela "tbTelefone". A chave estrangeira "ID_Pessoa" na tabela "tbTelefone" estabelece a relação entre as duas tabelas.

> Ao aplicar a primeira forma normal, garantimos que os valores sejam atômicos e eliminamos o atributo não atômico da tabela original. Isso resulta em uma melhor estruturação dos dados, evitando a repetição de informações e permitindo uma manipulação mais eficiente das tabelas.
{: .prompt-info }

## Exemplo 2fn

Para adequar uma tabela que não está na 2FN é necessário fazer os seguintes passos:

1. Criar duas novas tabelas para armazenar os dados dos campos redundantes, onde seus valores apresentam repetição de valores, neste caso uma tabela pessoa e outra tabela endereço, contendo os campos rua, número, cidade e estado
2. Remover os campos com valores redundantes da tabela original
3. Criar chaves primárias nas novas tabelas criadas com base na chave primária da tabela original,
4. Criar relações um-para-muitos entre as novas tabelas criadas e a tabela original. Neste caso criar outra id com a chave estrangeira na tabela endereço, que é a chave primária da tabela pessoa

Vamos continuar aplicando a segunda forma normal à tabela fornecida, seguindo os critérios mencionados:

**Tabela "Pessoa":**

| ID  | Nome          |
| --- | ------------- |
| 1   | João Silva    |
| 2   | Maria Santos  |
| 3   | Pedro Almeida |

**Tabela "Endereço":**

| ID_Endereco | Rua   | Número | Cidade         | Estado |
| ----------- | ----- | ------ | -------------- | ------ |
| 1           | Rua A | 123    | Sobral         | CE     |
| 2           | Rua B | 456    | Rio de Janeiro | RJ     |
| 3           | Rua C | 789    | São Paulo      | SP     |

**Tabela "tbTelefone":**

| Numero       | ID_Pessoa |
| ------------ | --------- |
| 999 8877665  | 1         |
| 999 88123665 | 1         |
| 999 8822265  | 2         |
| 999 8895165  | 2         |
| 999 8813661  | 3         |
| 999 88258665 | 3         |

Neste ponto, criamos duas novas tabelas: "Pessoa" e "Endereço". Os campos redundantes, como "Rua", "Número", "Cidade" e "Estado", foram removidos da tabela original. As tabelas "Pessoa" e "Endereço" possuem chaves primárias baseadas na chave primária da tabela original.

Além disso, adicionamos uma nova coluna "ID_Endereco" na tabela "Pessoa" como chave estrangeira para estabelecer a relação um-para-muitos entre a tabela "Pessoa" e a tabela "Endereço".

Dessa forma, separamos as informações de pessoa, endereço e telefone em tabelas distintas, evitando a redundância de dados.

A tabela "Pessoa" agora contém apenas informações específicas sobre as pessoas, enquanto a tabela "Endereço" armazena os detalhes do endereço de cada pessoa. A tabela "tbTelefone" mantém os números de telefone relacionados a cada pessoa.

> Ao aplicar a segunda forma normal, garantimos que todos os atributos não chave dependam completamente da chave primária. Isso resulta em uma estrutura mais eficiente e evita a repetição de dados.
{: .prompt-info }

## Exemplo 3fn

Uma tabela está na Terceira Forma Normal (3FN) se e somente se ela estiver na 1FN e na 2FN e todos os atributos não chave primária puderem ser obtidos somente através da chave primária.

A tabela abaixo está na 1FN porque todos os seus atributos são atômicos, e está na segunda forma normal porque não possui chave composta. No entanto temos o atributo nome_gerente que depende do atributo código_gerente que não é chave e nem faz parte da chave primária.

| Cod_departamento | Nome_departamento | Cod_gerente | Nome_gerente |
| ---------------- | ----------------- | ----------- | ------------ |
| 1                | Vendas            | 101         | Marcos       |
| 2                | Recursos Humanos  | 102         | Maria        |
| 3                | Estoque           | 103         | João         |
| 4                | Financeiro        | 104         | Matheus      |

Para aplicar a terceira forma normal à tabela fornecida, devemos remover a dependência transitiva do atributo "Nome_gerente" em relação ao atributo "Cod_gerente". Para isso, precisamos criar uma nova tabela para armazenar as informações dos gerentes separadamente.

Vamos criar uma nova tabela chamada "Gerente" para armazenar as informações dos gerentes. A tabela "Gerente" terá os seguintes atributos: "Cod_gerente" (chave primária) e "Nome_gerente".

**Tabela "Departamento":**

| Cod_departamento | Nome_departamento | Cod_gerente |
| ---------------- | ----------------- | ----------- |
| 1                | Vendas            | 101         |
| 2                | Recursos Humanos  | 102         |
| 3                | Estoque           | 103         |
| 4                | Financeiro        | 104         |

**Tabela "Gerente":**

| Cod_gerente | Nome_gerente |
| ----------- | ------------ |
| 101         | Marcos       |
| 102         | Maria        |
| 103         | João         |
| 104         | Matheus      |

A tabela "Departamento" agora não possui mais o atributo "Nome_gerente" e mantém apenas a informação do código do gerente. O atributo "Nome_gerente" foi movido para a nova tabela "Gerente", onde ele depende completamente da chave primária "Cod_gerente".

Ao aplicar a terceira forma normal, garantimos que todos os atributos não chave dependam unicamente da chave primária da tabela em que estão. Isso reduz a redundância de dados e facilita a manutenção e consulta das informações.

Agora, temos uma tabela "Departamento" que contém informações sobre os departamentos e um relacionamento com a tabela "Gerente" por meio do código do gerente. A tabela "Gerente" armazena os detalhes dos gerentes de cada departamento.

> Com a terceira forma normal aplicada, evitamos dependências transitivas e alcançamos uma estrutura de banco de dados mais consistente e eficiente.
{: .prompt-tip }

## Conclusão

A normalização de dados é fundamental para garantir a consistência e eficiência do armazenamento de dados em bancos de dados relacionais. Ao seguir as formas normais, é possível evitar anomalias que podem prejudicar o funcionamento do banco de dados e garantir um acesso eficiente aos dados. A aplicação correta da normalização em um projeto de banco de dados é essencial para criar uma estrutura bem estruturada, livre de redundâncias e inconsistências, resultando em um sistema de banco de dados robusto e confiável.

## Referências

[Livro restrito da biblioteca Senac - {{site.data.references.apostilas.senac[15].name}}]({{site.data.references.apostilas.senac[15].link}})

[Livro restrito da biblioteca Senac - {{site.data.references.apostilas.senac[16].name}}]({{site.data.references.apostilas.senac[16].link}})

[Apostila Seduc - {{site.data.references.apostilas.informatica[0].name}} pdf]({{site.data.references.apostilas.informatica[0].link}})
